'use client';
import { useState } from "react";
import axios from "@/services/axios.service";
import { toast } from "sonner";
import ReturnButton from "@/components/shared/return-button/return-button";
import { Button } from "@/components/ui/button";
import GradientTitle from "@/components/shared/gradient-title/gradient-title";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUserStore } from "@/hooks/useUserStore";

enum ESubjects {
    ATRASO = 'Pedido atrasado',
    DEFEITO = 'Pedido chegou com defeito',
    CANCELAMENTO = 'Cancelar pedido'
}

export default function MasterSACPage() {
    const [subject, setSubject] = useState<ESubjects | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useUserStore((state) => state);
    const handleSendTicket = async () => {
        if (!subject || !description) {
            toast.error('Preencha todos os campos!');
            return;
        }
        setIsLoading(true);
        try {
            const formData = new FormData();
            formData.append('TABELA', 'suporte');
            formData.append('SUPCLIENTE', id.toString());
            formData.append('SUPDESCR', description);
            formData.append('SUPASSUNTO', subject.toString());
            formData.append('SUPDTABERTURA', Date.now().toString());
            const { data } = await axios.post('insert-and-routes/insert.php', formData)
            if (!data) return toast.error("Ocorreu um erro ao cadastrar seu ticket!");

            if (data.status && data.status.toLowerCase().includes('erro'))
                return toast.error(data.message || "Ocorreu um erro ao cadastrar seu ticket!");

            if (data.status && data.status.toLowerCase().includes('sucesso') || data.status.toLowerCase().includes('success')) {
                toast.success("Ticket enviado com sucesso! Enviaremos atualizações no seu email.")
                setDescription('');
                setSubject(undefined);
                return;
            };
            return toast.error("Ocorreu um erro ao cadastrar seu ticket!");
        } catch (error) {
            console.log(error)
            toast.error("Ocorreu um erro ao cadastrar seu ticket!");
        } finally { //apos passar pelo try ou catch
            setIsLoading(false);
        }
    }

    return (
        <>
            <div className="mt-24 flex flex-col gap-3 pb-28 h-full">
                <GradientTitle className="mx-auto text-center text-4xl py-0">
                    Serviço de Atendimento ao Consumidor
                </GradientTitle>
                <ReturnButton />
                <div className="w-full h-full flex flex-row max-md:flex-col gap-5">
                    <div className=" h-full bg-background border border-border w-full rounded-2xl p-2 py-10 flex flex-col items-center gap-3">
                        <div className="max-w-lg flex flex-col gap-3 h-full w-full">
                            <div className="flex flex-col gap-1 w-full h-fit">
                                <Label className="text-lg">Assunto*</Label>
                                <select className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" defaultValue={undefined} onChange={(e) => setSubject(e.target.value as ESubjects)} name="subject" id="subject">
                                    {Object.values(ESubjects).map((subject) => (
                                        <option key={subject} value={subject}>{subject}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex flex-col gap-1 w-full h-fit">
                                <Label className="text-lg">Descrição (max. 400 caractéres)*</Label>
                                <Textarea value={description} onChange={(e) => setDescription(e.target.value.substring(0, 399))} style={{ height: '150px' }} />
                            </div>
                            <Button onClick={handleSendTicket} disabled={isLoading}>{isLoading ? "Carregando..." : "Enviar"}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}