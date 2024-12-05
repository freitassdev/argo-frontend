import { ICartItem, IProduct } from "@/types";
import { useCartStore } from "./useCartStore";
import { toast } from "sonner";
import axios from "@/services/axios.service";
import { useUserStore } from "./useUserStore";

export default function useCart() {
    const { setCartItems, items } = useCartStore((state) => state);
    const { id } = useUserStore((state) => state);
    const addToCart = async (product: IProduct) => {
        const hasOnCart = items.find((item) => item.id === product.ID);
        if (hasOnCart) return toast.error('Produto já adicionado ao carrinho.');
        console.log('Adding to cart:', product);
        const item: ICartItem = {
            id: product.ID,
            name: product.NOME,
            price: product.VALOR,
            description: product.DESCRICAO,
            image: product.IMGPATH,
        }

        await axios.post('consulta/consulta.php', {
            tipo: "adicionar_carrinho",
            consulta: {
                produto: item.id,
                quantia: 1,
                valor: parseFloat(item.price),
                carrinho: id,
            }
        }).catch((err) => {
            console.log(err)
        })
        const newItems = [...items, item];
        setCartItems(newItems);
        toast.success('Produto adicionado ao carrinho.');
    }

    const removeFromCart = (product: IProduct | ICartItem) => {
        let id;
        if ('ID' in product) {
            id = product.ID;
        } else {
            id = product.id;
        }
        
        const newItems = items.filter((item) => item.id !== id);
        setCartItems(newItems);
        toast.success('Produto removido do carrinho.');
    }

    return {
        addToCart,
        removeFromCart,
    }
}