import { IAvaliation } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

export default function AvaliationItem({ avaliation }: { avaliation: IAvaliation }) {
    return (
        <div className="flex flex-col justify-between gap-3 w-full bg-primary text-primary-foreground p-5 rounded-xl">
            <div className="flex flex-col gap-2">
                <h1 className="font-black text-xl">{avaliation.usuario}</h1>
                <div className="flex flex-row gap-2 items-center">
                    {Array.from({ length: avaliation.nota }).map((_, i) => (
                        <Star key={i} className="w-4 h-4" fill="yellow" color="yellow" />
                    ))}
                    {Array.from({ length: 5 - avaliation.nota }).map((_, i) => (
                        <Star key={i} className="w-4 h-4" />
                    ))}
                </div>
                <p className="text-lg">
                    <span className="font-bold">Qualidade do Produto: </span>
                    {avaliation.qualidade_produto}
                </p>
                <p className="text-lg">
                    <span className="font-bold">Comentário: </span>
                    {avaliation.comentario}
                </p>
            </div>
            <div className="w-full">
                <Image
                    src={process.env.NEXT_PUBLIC_BASE_API_URL + 'avaliation/' + avaliation.imagem}
                    alt="Foto da Avaliação (enviada pelo clinte)"
                    width={300}
                    height={300}
                    className="w-full h-auto rounded-lg" />
            </div>
        </div>
    )
}