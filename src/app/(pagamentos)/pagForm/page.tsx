"use client";
import Navbar from "@/app/(pagamentos)/pags/navbarPags";
import React, { useState } from 'react';
import Image from "next/image";
import pix from "@/assets/images/pix.png";
import barras from "@/assets/images/barras.png";

export default function PaymentPage() {
    const [selectedPayment, setSelectedPayment] = useState('');

    const handleSelectPayment = (method: React.SetStateAction<string>) => {
        setSelectedPayment(method);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center p-6 mt-32">
            {/* Botão Voltar */}
          

            {/* Título */}
            <h1 className="text-3xl font-bold mb-4">Formas de pagamento</h1>

            {/* Seção de pagamento */}
            <div className="shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg w-full max-w-xl ">
                {/* Pix */}
                <div className="mb-6 flex flex-wrap items-center dark:text-white bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100 gap-x-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 flex-1 sm:w-auto">
                    <Image alt="pix logo" src={pix} className="w-20 h-20 rounded " /> PIX
                    </h2>
                    <div className="flex items-center gap-4 sm:w-auto">
                        <input
                            type="radio"
                            name="payment"
                            value="pix"
                            checked={selectedPayment === 'pix'}
                            onChange={() => handleSelectPayment('pix')}
                            className="accent-blue-600"
                        />
                        <p className="text-sm max-w-xs">Copie o código PIX para identificar seu pagamento ou leia o QR code no aplicativo do seu Banco.</p>
                    </div>
                </div>

                {/* Boleto */}
                <div className="mb-6 flex flex-wrap items-center dark:text-white bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100 gap-x-4">
                    <h2 className="text-xl font-bold flex items-center gap-2 flex-1 sm:w-auto">
                    <Image alt="codigo de barras logo" src={barras} className="w-20 h-20 rounded" /> Boleto
                    </h2>
                    <div className="flex items-center gap-4 sm:w-auto">
                        <input
                            type="radio"
                            name="payment"
                            value="boleto"
                            checked={selectedPayment === 'boleto'}
                            onChange={() => handleSelectPayment('boleto')}
                            className="accent-blue-600"
                        />
                        <p className="text-sm max-w-xs">Efetue o pagamento no Banco mais próximo, ou pelo internet banking copiando o número do boleto e utilizando-o no aplicativo do seu Banco.</p>
                    </div>
                </div>
            </div>

            {/* Botão de finalizar compra */}
            <button className="mt-6 bg-primary text-white dark:text-black w-full max-w-md py-3 rounded">
                Finalizar compra
            </button>
        </div>
        </>
    );
}
