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
    const [street, setStreet] = useState<string>('')
    const [number, setNumber] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [complement, setComplement] = useState<string>('')
    const [cep, setCep] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [toEditId, setToEditId] = useState<number | null>(null);
    const [address, setAddress] = useState<IAddress[] | null>(null);
    const [isEditing, setIsEditing] = useState<boolean>(false);


    const { id } = useUserStore((state) => state);

    const handleEditClick = (id: string | number) => {
        resetAddress()
        const addressToEdit = address?.find((item) => item.id === id);
        if (!addressToEdit) return toast.error("Endereço não encontrado! Recarregue a página e tente novamente");
        setStreet(addressToEdit.street);
        setNumber(addressToEdit.number);
        setCity(addressToEdit.city);
        setComplement(addressToEdit.complement);
        setCep(addressToEdit.cep);
        setToEditId(parseInt(id.toString()));
    }

    const resetAddress = () => {
        setStreet('');
        setNumber('');
        setCity('');
        setComplement('');
        setCep('');
        setToEditId(null);
    }

    const handleAdd = async () => {
        if (!street || !number || !city || !complement || !cep) {
            toast.error('Preencha todos os campos!')
            return
        }
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('TABELA', 'enderecos');
            formData.append('ENDCLIENTE', id.toString());
            formData.append('ENDRUA', street);
            formData.append('ENDNUMERO', number);
            formData.append('ENDCIDADE', city);
            formData.append('ENDCEP', cep);
            formData.append('ENDCOMPLEMENTO', complement);
            const { data } = await axios.post('insert-and-routes/insert.php', formData)
            if (!data) return toast.error("Ocorreu um erro ao cadastrar seu endereço!");

            if (data.status && data.status.toLowerCase().includes('erro'))
                return toast.error(data.message || "Ocorreu um erro ao cadastrar seu endereço!");

            if (data.status && data.status.toLowerCase().includes('sucesso') || data.status.toLowerCase().includes('success')) {
                toast.success("Endereço cadastrado com sucesso!")
                setAddress(null);
                resetAddress()
                return;
            };
            return toast.error("Ocorreu um erro ao cadastrar seu endereço!");
        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro ao cadastrar seu endereço!");
        } finally { //apos passar pelo try ou catch
            setIsLoading(false);
        }
    }

    const handleEdit = async () => {
        if (!toEditId) return toast.error('Erro ao editar endereço! Recarregue a página e tente novamente');
        if (!street || !number || !city || !complement || !cep) {
            toast.error('Preencha todos os campos!')
            return
        }
        setIsLoading(true);
        try {
            const formData = {
                'TABELA': 'enderecos',
                'CODIGO': parseInt(toEditId.toString()),
                'ENDCLIENTE': id.toString(),
                'ENDRUA': street,
                'ENDNUMERO': number,
                'ENDCIDADE': city,
                'ENDCEP': cep,
                'ENDCOMPLEMENTO': complement
            }
            const { data } = await axios.post('insert-and-routes/update.php', formData)
            if (!data) return toast.error("Ocorreu um erro ao editar seu endereço!");

            if (data.status && data.status.toLowerCase().includes('erro'))
                return toast.error(data.message || "Ocorreu um erro ao editar seu endereço!");

            if (data.status && data.status.toLowerCase().includes('sucesso') || data.status.toLowerCase().includes('success')) {
                toast.success("Endereço editado com sucesso!")
                setAddress(null);
                resetAddress()
                return;
            };
            return toast.error("Ocorreu um erro ao editar seu endereço!");
        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro ao editar seu endereço!");
        } finally { //apos passar pelo try ou catch
            setIsLoading(false);
            setIsEditing(false);
        }
    }

    useEffect(() => {
        if (!address) {
            const fetchAddress = async () => {
                const { data } = await axios.post('consulta/consulta.php', {
                    tipo: "endereco",
                    consulta: id
                })
                const formatedData = data.map((item: any) => ({
                    id: item.ENDID,
                    street: item.ENDRUA,
                    number: item.ENDNUMERO,
                    city: item.ENDCIDADE,
                    complement: item.ENDCOMPLEMENTO,
                    cep: item.ENDCEP
                }))
                setAddress(formatedData);
            }
            fetchAddress();
        }
    }, [id, address])


    return (
        <div className="flex flex-col w-full pb-8 gap-4 mt-24">
            <Navbar />
            <div className="flex flex-col items-center">
                <GradientTitle>Seus endereços</GradientTitle>
            </div>
            <ReturnButton />
            <Separator />
            <div className="w-full grid grid-cols-2 gap-3">
                {address && address.map((item, index) => (
                    <div key={index} className="flex flex-col bg-primary text-white dark:text-foreground p-4 gap-3 rounded-xl">
                        <h3 className="text-lg font-semibold">Endereço {index + 1}</h3>
                        <Input disabled className="bg-white disabled:opacity-100 text-black" placeholder={`${Object.values(item).join(', ').substring(3, 50)}...`} />
                        <Button onClick={() => {
                            handleEditClick(item.id);
                            setIsEditing(true);
                        }} variant={'secondary'}>Editar</Button>
                    </div>
                ))}
            </div>
            <div className="flex flex-row gap-2 mt-4">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button onClick={resetAddress} size={"lg"}>Adicionar</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Adicionar Endereço</DialogTitle>
                            <DialogDescription>
                                Certifique-se de preencher todos os campos corretamente.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="">
                                    Rua*
                                </Label>
                                <Input
                                    value={street}
                                    onChange={(e) => setStreet(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="number">
                                    Número*
                                </Label>
                                <Input
                                    id="number"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="city">
                                    Cidade e Estado*
                                </Label>
                                <Input
                                    id="city"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="complement">
                                    Complemento*
                                </Label>
                                <Input
                                    id="complement"
                                    value={complement}
                                    onChange={(e) => setComplement(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="cep">
                                    CEP*
                                </Label>
                                <Input
                                    id="cep"
                                    value={cep}
                                    onChange={(e) => setCep(e.target.value)}
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button onClick={handleAdd} disabled={isLoading}>{isLoading ? "Carregando..." : "Salvar"}</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <Dialog open={isEditing} onOpenChange={setIsEditing}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar Endereço</DialogTitle>
                        <DialogDescription>
                            Certifique-se de preencher todos os campos corretamente.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="">
                                Rua*
                            </Label>
                            <Input
                                value={street}
                                onChange={(e) => setStreet(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="number">
                                Número*
                            </Label>
                            <Input
                                id="number"
                                value={number}
                                onChange={(e) => setNumber(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="city">
                                Cidade e Estado*
                            </Label>
                            <Input
                                id="city"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="complement">
                                Complemento*
                            </Label>
                            <Input
                                id="complement"
                                value={complement}
                                onChange={(e) => setComplement(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="cep">
                                CEP*
                            </Label>
                            <Input
                                id="cep"
                                value={cep}
                                onChange={(e) => setCep(e.target.value)}
                                className="col-span-3"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button onClick={handleEdit} disabled={isLoading}>{isLoading ? "Carregando..." : "Salvar"}</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}