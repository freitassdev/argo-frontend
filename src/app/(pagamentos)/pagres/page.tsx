"use client";
import React, { useState } from 'react';
import Navbar from './navbarPags';
import Image from "next/image";
import glasses from "@/assets/images/product-example.png";
import correio from "@/assets/images/correio.webp";
import correio2 from "@/assets/images/correio2.webp";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";


export default function CheckoutPage() {
    const [quantity, setQuantity] = useState(1);
    const [deliveryFee, setDeliveryFee] = useState(20.00); // Estado para o valor da entrega
    const [selectedDelivery, setSelectedDelivery] = useState<string>("standard"); // Opção de entrega selecionada
    const productPrice = 320.00;

    const handleDecrease = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    };

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const subtotal = productPrice * quantity;
    const total = subtotal + deliveryFee;

    const handleDeliveryChange = (value: string, fee: number) => {
        setSelectedDelivery(value);
        setDeliveryFee(fee); // Atualiza o valor de entrega conforme a seleção
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-900 p-6 flex flex-col items-center mt-32">
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                    {/* Seção de itens */}
                    <div className="flex-1 shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg">
                        <h1 className="text-2xl font-bold mb-4">Seus itens</h1>

                        <div className="flex items-center justify-between bg-background/50 backdrop-blur-md border saturate-100 p-4 rounded-lg p-4 rounded mb-4">
                            <div className="flex items-center gap-4">
                                <Image  src={glasses} className="w-20 h-20 rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">Produto</h2>
                                    <p className="text-sm mt-1">R$ {productPrice.toFixed(2)}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button onClick={handleDecrease} className="px-2 py-1 bg-primary rounded text-white dark:text-black">-</button>
                                <span>{quantity}</span>
                                <button onClick={handleIncrease} className="px-2 py-1 bg-primary rounded text-white dark:text-black">+</button>
                            </div>
                        </div>

                        <button className="bg-primary text-white dark:text-black w-full py-2 rounded">Remover</button>
                    </div>

                    {/* Seção de resumo do pedido */}
                    <div className="flex-1 shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg">
                        <h1 className="text-2xl font-bold mb-4">Resumo do pedido</h1>

                        <div className="mb-4">
                            <div className="flex gap-2 gap-x-4">
                                <p className="pt-1">Entrega: <span>R$ {deliveryFee.toFixed(2)}</span></p>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <button className="bg-primary text-white dark:text-black px-4 py-1 rounded">Opções de Entrega</button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Escolha a opção de entrega</DialogTitle>
                                            <DialogDescription>Selecione o tipo de entrega que deseja.</DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            <div className="flex items-center dark:text-white bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100 gap-x-4">
                                            <Image src={correio} className="w-11 h-11 rounded" />
                                                <input
                                                    type="radio"
                                                    id="standard"
                                                    name="deliveryOption"
                                                    value="standard"
                                                    checked={selectedDelivery === "standard"}
                                                    onChange={() => handleDeliveryChange("standard", 20.00)}
                                                    className="mr-2"
                                                />
                                                <Label htmlFor="standard">Correios - Frete: R$ 20,00</Label>
                                            </div>
                                            <div className="flex items-center dark:text-white bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100 gap-x-4">
                                            <Image src={correio2} className="w-11 h-11 rounded" />
                                                <input
                                                    type="radio"
                                                    id="express"
                                                    name="deliveryOption"
                                                    value="express"
                                                    checked={selectedDelivery === "express"}
                                                    onChange={() => handleDeliveryChange("express", 40.00)}
                                                    className="mr-2"
                                                />
                                                <Label htmlFor="express">Lalamove - Frete: R$ 40,00</Label>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <DialogClose asChild>
                                                <button className="bg-primary text-white dark:text-black px-4 py-1 rounded">
                                                    Salvar
                                                </button>
                                            </DialogClose>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                        </div>

                        <div className="mb-4">
                            <p>Cupom:</p>
                            <div className="flex gap-2">
                                <input type="text" placeholder="Código" className="flex-1 p-1 rounded bg-background/50 backdrop-blur-md border px-2 saturate-100 rounded-lg" />
                                <button className="bg-primary text-white dark:text-black px-4 py-1 rounded">Adicionar</button>
                            </div>
                        </div>

                        <p className="mt-2">Subtotal: <span className="float-right">R$ {subtotal.toFixed(2)}</span></p>
                        <p className="font-bold text-lg mt-2">Total: <span className="float-right">R$ {total.toFixed(2)}</span></p>
                    </div>
                </div>

                {/* Botão de pagamento */}
                <button className="mt-6 bg-primary text-white dark:text-black w-full max-w-md py-3 rounded">Pagamento</button>
            </div>
        </>
    );
}
