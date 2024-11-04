import Image from "next/image"
import example from "@/assets/images/product-example.png"
interface IItemProps {
    title: string;
    price: number;
    pricePromo: number;
    units: number;
}
export default function Item({ title = "Óculos rosa de coração", price = 100, pricePromo = 80, units = 10 }: IItemProps) {
    return (
        <div className="w-full h-[380px] bg-primary rounded-2xl p-3 flex flex-col gap-2 items-center">
            <Image className="rounded-xl" alt="Imagem do Produto" src={example} />
            <div className="flex flex-col items-center text-center justify-between gap-1 h-full">
                <h1 className="font-bold text-foreground">{title.length > 28 ? title.substring(0, 28) : title}</h1>
                <div className="flex flex-col gap-0 items-center">
                    <h2>De <span className="font-semibold text-destructive line-through">R$ {price}</span></h2>
                    <h2>Por apenas <span className="font-semibold">R$ {pricePromo}</span></h2>
                </div>
                <p className="text-sm">Unidades restantes: {units}</p>
            </div>
        </div>
    )
}