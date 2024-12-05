import { ICartItem } from "@/types";
import Image from "next/image";
import Link from "next/link";
import useCart from "@/hooks/useCart";
import { Button } from "@/components/ui/button";
export default function CartItem({ item }: { item: ICartItem }) {
    const { removeFromCart } = useCart();
    return (
        <div className="flex flex-row gap-3 p-3 w-full bg-primary h-full max-h-52 rounded-2xl shadow-xl border-border border text-white">
            <div className="w-[30%]">
                <Link href={'/product/' + item.id}>
                    <Image width={300} height={300} className="w-auto border border-border h-full rounded-lg" alt="Imagem do Produto" src={(process.env.NEXT_PUBLIC_BASE_UPLOADS_FOLDER || '') + (item?.image)} />
                </Link>
            </div>
            <div className="flex flex-col justify-between flex-1 gap-2">
                <div className="flex flex-col gap-2">
                    <h1 className="font-bold text-2xl">{item.name}</h1>
                    <p className="text-md">{item.description && item.description.substring(0, 150)}...</p>
                    <p><span className="font-semibold">Preço: </span>R$ {item.price}</p>
                </div>
                <div className="flex flex-row justify-end items-center">
                    <Button onClick={() => removeFromCart(item)} className="bg-background hover:bg-card text-foreground">Remover do Carrinho</Button>
                </div>
            </div>
        </div>
    )
}