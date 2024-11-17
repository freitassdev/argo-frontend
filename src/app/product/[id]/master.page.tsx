'use client';
import { useEffect, useState } from "react";
import axios from "@/services/axios.service";
import { EColorsNames, EMarcas, IAvaliation, IProduct } from "@/types";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import ReturnButton from "@/components/shared/return-button/return-button";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientTitle from "@/components/shared/gradient-title/gradient-title";
import AvaliationItem from "@/components/shared/avaliation-item/avaliation-item";

export default function MasterProductPage({ id }: { id: string }) {
    const [product, setProduct] = useState<IProduct | null>(null);
    const [avaliations, setAvaliations] = useState<IAvaliation[]>([]);
    const router = useRouter();
    useEffect(() => {
        const fetchProduct = async () => {

            if (product) return;
            try {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "produto-id",
                    consulta: id
                })
                if (!data || data.error) {
                    toast.error(data?.message || 'Erro ao buscar produto!')
                    setTimeout(() => {
                        router.push('/');
                    }, 2000)
                    return;
                }
                setProduct(data[0]);
            } catch {
                toast.error('Erro ao buscar produto!');
                setTimeout(() => {
                    router.push('/');
                }, 2000)
            }

        }
        fetchProduct();
    }, [id, router, product])

    useEffect(() => {
        if (product && product.ID) {
            const fetchAvaliations = async () => {
                try {
                    const { data } = await axios.post('avaliation/consultar_avaliacoes.php', {
                        produtoId: product.ID
                    })
                    if (!data || data.error) {
                        toast.error(data?.message || 'Erro ao buscar avaliações!');
                        return;
                    }

                    setAvaliations(data.avaliacoes);
                } catch {
                    toast.error('Erro ao buscar avaliações!');
                }
            }
            fetchAvaliations();
        }
    }, [product])

    function addToCart() {
        toast.success('Produto adicionado ao carrinho!');
    }

    return (
        <>
            {product && (
                <div className="mt-24 flex flex-col gap-3 pb-4">
                    <GradientTitle className="mx-auto text-center text-5xl py-0">
                        Detalhes do Produto
                    </GradientTitle>
                    <ReturnButton />
                    <div className="w-full flex flex-row max-md:flex-col gap-5">
                        <div className="w-[40%] max-md:w-full flex flex-col gap-2">
                            <Image width={300} height={300} className="w-full border border-border h-auto rounded-2xl" alt="Imagem do Produto" src={(process.env.NEXT_PUBLIC_BASE_UPLOADS_FOLDER || '') + (product?.IMGPATH)} />
                            <Button onClick={addToCart} className="rounded-xl">
                                Adicionar ao Carrinho
                            </Button>
                        </div>
                        <div className="bg-primary text-primary-foreground w-full rounded-2xl p-5 flex flex-col items-center gap-3">
                            <div className="max-w-lg flex flex-col gap-3  w-full">
                                <h1 className="font-black text-2xl">{product.NOME}</h1>
                                <div className="flex flex-col gap-2">
                                    <p className="text-lg">
                                        <span className="font-bold">Descrição: </span>
                                        {product.DESCRICAO}
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">Valor: </span>
                                        {product.DESCONTO ? (
                                            <>
                                                <span className="text-red-500 line-through">R$ {product.VALOR}</span>
                                                <span> por R$ {product.DESCONTO}</span>
                                            </>
                                        ) : `R$ ${product.VALOR}`}
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">Marca: </span>
                                        {EMarcas[product.MARCA]}
                                    </p>
                                    <p className="text-lg">
                                        <span className="font-bold">Cor disponível: </span>
                                        {EColorsNames[product.COR]}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <GradientTitle className="mx-auto text-center text-5xl ">
                        Avaliações do Produto
                    </GradientTitle>
                    <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
                        {avaliations.map((avaliation, i) => (
                            <AvaliationItem key={i} avaliation={avaliation} />
                        ))}
                    </div>
                </div>
            )}
        </>
    )
}