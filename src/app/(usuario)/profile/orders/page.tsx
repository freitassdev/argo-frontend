/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from 'react';
import GradientTitle from '@/components/shared/gradient-title/gradient-title';
import Navbar from '@/components/shared/navbar/navbar';
import ReturnButton from '@/components/shared/return-button/return-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Label } from "@/components/ui/label"
import axios from '@/services/axios.service';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from 'sonner';
import { useUserStore } from '@/hooks/useUserStore';
import { IAddress } from '@/types';

export default function Address() {
    const { id } = useUserStore((state) => state);

    

    useEffect(() => {
            const fetchAddress = async () => {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "pedidos",
                })
                console.log(data)
                // data.map((item: any) => ({
                //     id: item.ENDID,
                //     street: item.ENDRUA,
                //     number: item.ENDNUMERO,
                //     city: item.ENDCIDADE,
                //     complement: item.ENDCOMPLEMENTO,
                //     cep: item.ENDCEP
                // }))
            }
            fetchAddress();
    }, [])


    return (
        <div className="flex flex-col w-full pb-8 gap-4 mt-24">
            <Navbar />
            <div className="flex flex-col items-center">
                <GradientTitle>Seus Pedidos</GradientTitle>
            </div>
            <ReturnButton />
            <Separator />
            <div className="w-full grid grid-cols-2 gap-3">
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <h1 className='text-xl'>Finalizados</h1>
                    <div className='flex flex-col gap-2 items-center justify-center'>

                    </div>
                </div>
                <div className='flex flex-col gap-3 items-center justify-center'>
                    <h1 className='text-xl'>Em Andamento</h1>
                    <div className='flex flex-col gap-2 items-center justify-center'>

                    </div>
                </div>
            </div>
        </div>
    )
}