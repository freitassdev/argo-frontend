"use client";
import React, { useState } from 'react';
import Navbar from './navbarPags';

export default function CheckoutPage() {
    const [quantity, setQuantity] = useState(1);
    const productPrice = 320.00;
    const deliveryFee = 20.00;

    const handleDecrease = () => {
        setQuantity((prev) => Math.max(prev - 1, 1));
    };

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const subtotal = productPrice * quantity;
    const total = subtotal + deliveryFee;

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-900 p-6 flex flex-col items-center mt-32">
            
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-4xl">
                {/* Seção de itens */}
                <div className="flex-1 bg-primary text-white p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Seus itens</h1>
                    
                    <div className="flex items-center justify-between bg-white text-[#262626] p-4 rounded mb-4">
                        <div className="flex items-center gap-4">
                            <img src="/path/to/glasses.jpg" alt="Produto" className="w-20 h-20 rounded" />
                            <div>
                                <h2 className="text-lg font-semibold">Produto</h2>
                                <p className="text-sm mt-1">R$ {productPrice.toFixed(2)}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <button onClick={handleDecrease} className="px-2 py-1 bg-primary rounded">-</button>
                            <span>{quantity}</span>
                            <button onClick={handleIncrease} className="px-2 py-1 bg-primary rounded">+</button>
                        </div>
                    </div>
                    
                    <button className="bg-primary text-white w-full py-2 rounded">remover</button>
                </div>
                
                {/* Seção de resumo do pedido */}
                <div className="flex-1 bg-primary text-white p-4 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">Resumo do pedido</h1>
                    
                    <div className="mb-4">
                        <p>Entrega: <span className="ml-2">R$ {deliveryFee.toFixed(2)}</span></p>
                        <button className="bg-primary text-white px-4 py-1 rounded mt-2">Opções</button>
                    </div>

                    <div className="mb-4">
                        <p>Cupom:</p>
                        <div className="flex gap-2">
                            <input type="text" placeholder="código" className="flex-1 p-2 rounded bg-white text-[#262626] placeholder-gray-400" />
                            <button className="bg-primary text-white px-4 py-1 rounded">Adicionar</button>
                        </div>
                    </div>

                    <p className="mt-2">Subtotal: <span className="float-right">R$ {subtotal.toFixed(2)}</span></p>
                    <p className="font-bold text-lg mt-2">Total: <span className="float-right">R$ {total.toFixed(2)}</span></p>
                </div>
            </div>

            {/* Botão de pagamento */}
            <button className="mt-6 bg-primary text-white w-full max-w-md py-3 rounded">Pagamento</button>
        </div>
    </>
    );
}
