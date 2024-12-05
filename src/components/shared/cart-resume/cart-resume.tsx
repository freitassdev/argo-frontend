'use client';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";

export default function CartResume({ total, quantity }: { total: string, quantity: number }) { 
    const router = useRouter()
    return (
        <div className="w-full flex flex-col gap-3 items-center p-4 bg-primary text-white shadow-xl rounded-2xl border border-border ">
            <div className="contents gap-1">
                <h1 className="font-bold text-2xl">Resumo</h1>
                <Separator />
                <div className="flex flex-col gap-0 items-start w-full">
                    <Label className="text-sm font-normal">Subtotal:</Label>
                    <h1 className="font-semibold text-xl">R$ {total}</h1>
                </div>
                <div className="flex flex-col gap-0 items-start w-full">
                    <Label className="text-sm font-normal">Quantidade:</Label>
                    <h1 className="font-semibold text-xl">{quantity} itens.</h1>
                </div>
                <div className="flex flex-col gap-1 items-start w-full ">
                    <Label>Inserir cupom</Label>
                    <Input placeholder="Cupom de desconto" className="bg-background text-muted-foreground" />
                </div>
                <div className="h-28">

                </div>
            </div>
            <Separator />
            <Button className="w-full bg-background" variant={"secondary"} disabled={quantity === 0}>Continuar</Button>
            <Button className="w-full bg-transparent hover:text-white hover:bg-white/10" variant={"outline"} onClick={() => router.back()}>Voltar</Button>
        </div>
    )
}            