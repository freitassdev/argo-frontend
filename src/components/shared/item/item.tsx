import Image from "next/image"
import Link from "next/link";
interface IItemProps {
    title?: string;
    price?: string;
    pricePromo?: string;
    id?: number;
    imagePath?: string;
}
export default function Item({ title = "Óculos rosa de coração", price = '100', pricePromo = '80', id = 1, imagePath = "/uploads/example.png" }: IItemProps) {
    return (
        <Link href={'/product/' + id}>
            <div className="w-full h-[380px] cursor-pointer text-white dark:text-foreground bg-primary rounded-2xl p-3 flex flex-col gap-2 items-center">
                <Image width={300} height={300} className="w-full h-auto rounded-xl" alt="Imagem do Produto" src={process.env.NEXT_PUBLIC_BASE_UPLOADS_FOLDER + imagePath} />
                <div className="flex flex-col items-center text-center justify-between gap-1 h-full">
                    <h1 className="font-bold text-white dark:text-foreground">{title.length > 28 ? title.substring(0, 28) : title}</h1>
                    <div className="flex flex-col gap-0 items-center">
                        <h2>De <span className="font-semibold text-destructive line-through">R$ {price}</span></h2>
                        <h2>Por apenas <span className="font-semibold">R$ {pricePromo}</span></h2>
                    </div>
                </div>
            </div>
        </Link>
    )
}