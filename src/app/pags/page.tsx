"use client";
import React from 'react';
import Navbar from "@/app/pags/navbarPags";

export default function AddressSelection() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-900 flex flex-col items-center p-6">
                
                {/* Título */}
                <h1 className="text-2xl font-bold mb-4">Escolha um endereço para entrega</h1>
                
                {/* Container de endereços */}
                <div className="w-full max-w-md bg-blue-800 text-white p-4 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Seus endereços</h2>
                    
                    {/* Endereço existente */}
                    <div className="flex items-center justify-between bg-blue-700 p-2 rounded mb-4">
                        <label className="flex items-center gap-2">
                            <input type="radio" name="address" className="form-radio text-blue-500" />
                            <span className="font-medium">Fulano</span>
                        </label>
                        <span className="text-sm">Rua, Bairro, Cidade, Estado, CEP</span>
                    </div>
                    
                    {/* Botão para adicionar novo endereço */}
                    <button className="flex items-center gap-2 text-blue-300 hover:text-blue-400 w-full mb-4">
                        <span className="text-xl">+</span>
                        <span>Adicionar novo endereço</span>
                    </button>

                    {/* Botão Editar */}
                    <button className="bg-black text-white w-full py-2 rounded">Editar</button>
                </div>
            </div>
        </>
    );
}
