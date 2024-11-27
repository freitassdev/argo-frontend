"use client"
import GradientTitle from '@/components/shared/gradient-title/gradient-title';
import Navbar from '@/components/shared/navbar/navbar';
import ReturnButton from '@/components/shared/return-button/return-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default function Address() {
    return (
        <div className="flex flex-col w-full pb-8 gap-4 mt-24">
            <Navbar />
            <div className="flex flex-col items-center">
                <GradientTitle>Seus endereços</GradientTitle>
            </div>
                <ReturnButton />
            <Separator />
            <div className="w-full grid grid-cols-2 gap-3">
                <div className="flex flex-col bg-primary text-white dark:text-foreground p-4 gap-3 rounded-xl">
                    <h3 className="text-lg font-semibold">Endereço 1</h3>
                    <Input disabled className="bg-white disabled:opacity-100     text-black" placeholder='Rua, Bairro, Cidade, Estado, CEP' />
                </div>
                <div className="flex flex-col bg-primary text-white dark:text-foreground p-4 gap-3 rounded-xl">
                    <h3 className="text-lg font-semibold">Endereço 2</h3>
                    <Input disabled className="bg-white disabled:opacity-100     text-black" placeholder='Rua, Bairro, Cidade, Estado, CEP' />
                </div>
                <div className="flex flex-row gap-2 mt-4">
                    <Button size={"lg"}>Editar</Button>
                    <Button size={"lg"}>Adicionar</Button>
                </div>
            </div>
        </div>
    )
}