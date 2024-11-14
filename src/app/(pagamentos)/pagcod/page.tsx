"use client";
import React, { useState } from 'react';
import Navbar from "@/app/(pagamentos)/pags/navbarPags";
import { AnimatePresence, motion } from 'framer-motion';

export default function PaymentSuccessPage() {
    const orderCode = "00001023BR";
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(orderCode);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center p-6 mt-32">
                <h1 className="text-3xl font-bold mb-4">Pagamento realizado!</h1>
                <div className="w-full max-w-md shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg">
                    <p className="text-xl font-semibold mb-4">Código do pedido:</p>
                    <div className="flex items-center justify-between bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100">
                        <span className="text-lg font-semibold mr-2 dark:text-white">{orderCode}</span>
                        <motion.button 
                            onClick={handleCopy}
                            className={`px-3 py-1 rounded text-white transition-colors duration-200 ${
                                isCopied ? 'bg-green-500 backdrop-blur-sm' : 'bg-primary text-white dark:text-black px-4 py-1 rounded'
                            }`}
                            whileTap={{ scale: 0.95 }} 
                        >
                            {/* Animando a troca de texto */}
                            <motion.span
                                key={isCopied ? "copied" : "copy"}
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}  // Sem alteração de opacidade do texto em si
                                exit={{ opacity: 0 }}    // Só a saída do "Copiar" com fade
                                transition={{ duration: 0.5 }}
                                className="text-sm"
                                
                            >
                                {isCopied ? "✓ Copiado" : "⇄ Copiar"}
                            </motion.span>
                        </motion.button>
                    </div>
                    <button 
                        className="bg-primary text-white dark:text-black px-4 py-1 rounded" 
                        onClick={() => window.location.href = '/'} // alterar para onde deve ir
                    >
                        <span className='text-xl mr-2'>&lt;</span>
                        Continuar navegando
                    </button>
                </div>
            </div>
        </>
    );
}
