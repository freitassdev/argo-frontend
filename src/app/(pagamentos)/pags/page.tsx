"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "@/app/(pagamentos)/pags/navbarPags";
import { AnimatePresence, motion } from 'framer-motion';
import axios from '@/services/axios.service';
import { useUserStore } from '@/hooks/useUserStore';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface IAddressSelection {
    id: number;
    name: string;
    details: string;
}
export default function AddressSelection() {
    // Estado que armazena os endereços
    const [addresses, setAddresses] = useState<IAddressSelection[] | null>(null);
    const { id } = useUserStore((state) => state);
    useEffect(() => {
        if (!addresses) {
            const fetchAddress = async () => {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "endereco",
                    consulta: id
                })
                console.log(data)
                const formatedData = data.map((item: any, index: number) => ({
                    id: item.ENDID,
                    name: "Endereço " + (index + 1).toString(),
                    details: `${item.ENDRUA} ${item.ENDNUMERO} - ${item.ENDCIDADE}`.substring(0, 100) + "..."
                }))
                setAddresses(formatedData);
            }
            fetchAddress();
        }
    }, [id, addresses])

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center p-6 mt-32 ">
                {/* Título */}
                <h1 className="text-3xl font-bold mb-4">Escolha um endereço para entrega</h1>

                {/* Container de endereços */}
                <div className="w-full max-w-md shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg">
                    <h2 className="text-xl font-semibold mb-4">Seus endereços</h2>

                    {/* Renderizando endereços dinamicamente */}
                    <AnimatePresence >
                        {addresses && addresses.map((address) => (
                            <motion.div initial={{
                                opacity: 0, filter: "blur(10px)"
                            }}
                                animate={{
                                    opacity: 100,
                                    filter: "blur(0)"

                                }}

                                key={address.id} className="flex items-center justify-between bg-background/50 backdrop-blur-md text-[#262626] p-2 rounded mb-4 border px-2 saturate-100">
                                <label className="flex items-center gap-2">
                                    <input type="radio" name="address" className="form-radio text-blue-500" />
                                    <span className="font-medium dark:text-white">{address.name}</span>
                                </label>
                                <span className="text-sm dark:text-white">{address.details}</span>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                <Link href={"/pagForm"}>
                    <Button className='w-full mt-5 px-10'>
                        Continuar
                    </Button>
                </Link>
            </div>
        </>
    );
}
