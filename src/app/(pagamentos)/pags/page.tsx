"use client";
import React, { useState } from 'react';
import Navbar from "@/app/(pagamentos)/pags/navbarPags";
import ReturnButton from '@/components/shared/return-button/return-button';
import { AnimatePresence, motion } from 'framer-motion';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

export default function AddressSelection() {
    // Estado que armazena os endereços
    const [addresses, setAddresses] = useState([
        { id: 1, name: "Fulano", details: "Rua, Bairro, Cidade, Estado, CEP" }
    ]);
    const [dialogCEP, setDialogCEP] = useState<string>("");
    const [dialogRua, setDialogRua] = useState<string>("")
    const [dialogCidade, setDialogCidade] = useState<string>("")
    const [dialogEstado, setDialogEstado] = useState<string>("")
    const [dialogApelido, setDialogApelido] = useState<string>("")



    // Função para adicionar um novo endereço
    const handleAddAddress = () => {
        const newAddress = {
            id: addresses.length + 1,
            name: dialogApelido,
            details: dialogRua + dialogCidade + dialogEstado,
        };
        setAddresses([...addresses, newAddress]);
        setDialogApelido('')
        setDialogCEP('');
        setDialogCidade('')
        setDialogRua('')
        setDialogEstado('')
    };

    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center p-6 mt-32 ">
                {/* Título */}
                <h1 className="text-2xl font-bold mb-4">Escolha um endereço para entrega</h1>

                {/* Container de endereços */}
                <div className="w-full max-w-md shadow-lg bg-background/50 backdrop-blur-md border px-2 saturate-100 p-4 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-4">Seus endereços</h2>

                    {/* Renderizando endereços dinamicamente */}
                    <AnimatePresence >
                        {addresses.map((address) => (
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

                    {/* Botão para adicionar novo endereço */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>
                                <span className="text-xl">+</span>
                                <span>Adicionar novo endereço</span>
                            </Button>
                        </DialogTrigger>

                        <DialogContent className="sm:max-w-[700px]">
                            <DialogHeader>
                                <DialogTitle>Adicionar Endereço</DialogTitle>
                                <DialogDescription>
                                    Adicione um novo endereço.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid grid-cols-2 gap-4 py-4">
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="apelido" className="text-right">
                                        Apelido
                                    </Label>
                                    <Input
                                        id="apelido"
                                        placeholder='Casa'
                                        className="col-span-3"
                                        onChange={(e) => setDialogApelido(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="rua" className="text-right">
                                        Rua e bairro
                                    </Label>
                                    <Input
                                        id="rua"
                                        placeholder='Rua Corinthians - Pirituba'
                                        className="col-span-3"
                                        onChange={(e) => setDialogRua(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="cidade" className="text-right">
                                        Cidade
                                    </Label>
                                    <Input
                                        id="cidade"
                                        placeholder='Rua Corinthians - Pirituba'
                                        className="col-span-3"
                                        onChange={(e) => setDialogCidade(e.target.value)}

                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="rua" className="text-right">
                                        Estado
                                    </Label>
                                    <Input
                                        id="rua"
                                        placeholder='Rua Corinthians - Pirituba'
                                        className="col-span-3"
                                        onChange={(e) => setDialogEstado(e.target.value)}
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-4">
                                    <Label htmlFor="rua" className="text-right">
                                        CEP
                                    </Label>
                                    <Input
                                        id="rua"
                                        placeholder='Rua Corinthians - Pirituba'
                                        className="col-span-3"
                                        onChange={(e) => setDialogCEP(e.target.value)}
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant={"destructive"}>Cancelar</Button>
                                </DialogClose>
                                <DialogClose asChild>
                                    <div><Button type='submit' onClick={handleAddAddress}>Salvar</Button></div>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </>
    );
}
