"use client";
import Navbar from "@/app/(pagamentos)/pags/navbarPags";
import React, { useState } from 'react';
import Image from "next/image";
import pix from "@/assets/images/pix.png";
import barras from "@/assets/images/barras.png";

export default function PaymentPage() {
    const [selectedPayment, setSelectedPayment] = useState('');

    const handleSelectPayment = (method) => {
        setSelectedPayment(method);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen p-6 flex flex-col items-center mt-32">
            {/* Botão Voltar */}
          

            {/* Título */}
            <h1 className="text-3xl font-bold mb-4">Formas de pagamento</h1>
            <hr className="border-gray-300 w-full max-w-4xl mb-6" />

            {/* Seção de pagamento */}
            <div className="bg-blue-900 text-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
                {/* Pix */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold flex items-center gap-2">
                    <Image  src={pix} className="w-20 h-20 rounded" /> Pix
                    </h2>
                    <hr className="my-2 border-gray-500" />
                    <div className="flex items-center gap-4">
                        <input
                            type="radio"
                            name="payment"
                            value="pix"
                            checked={selectedPayment === 'pix'}
                            onChange={() => handleSelectPayment('pix')}
                            className="accent-blue-600"
                        />
                        <p>Copie o código pix para identificar seu pagamento ou leia o QR code no aplicativo do seu banco</p>
                    </div>
                </div>

                {/* Boleto */}
                <div>
                    <h2 className="text-xl font-bold flex items-center gap-2">
                    <Image  src={barras} className="w-20 h-20 rounded" /> Boleto
                    </h2>
                    <hr className="my-2 border-gray-500" />
                    <div className="flex items-center gap-4">
                        <input
                            type="radio"
                            name="payment"
                            value="boleto"
                            checked={selectedPayment === 'boleto'}
                            onChange={() => handleSelectPayment('boleto')}
                            className="accent-blue-600"
                        />
                        <p>Efetue o pagamento no Banco mais próximo, ou pelo internet banking copiando o número do boleto e utilizando-o no aplicativo do seu Banco.</p>
                    </div>
                </div>
            </div>

            {/* Botão de finalizar compra */}
            <button className="mt-6 bg-black text-white w-full max-w-md py-3 rounded">
                Finalizar compra
            </button>
        </div>
        </>
    );
}
