'use client';

import ReturnButton from "@/components/shared/return-button/return-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import axios from "@/services/axios.service";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react";
export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('')
    const [date, setDate] = useState<Date>();

    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const handleLogin = async () => {
        if (!email || !password || !cpf || !name || !date) return toast.error('Preencha todos os campos!');
        setLoading(true)
        try {
            const response = await axios.post('auth/cadastro.php', {
                txtEmail: email,
                txtSenha: password,
                txtNome: name,
                txtCPF: cpf,
                dtNasc: date
            })
            if (response.status !== 200) return toast.error('Erro ao fazer login!');
            if (response.data.error) return toast.error(response.data.error);
            if (response.data.status === "sucesso") {
                toast.success('Conta criada com sucesso!')
                setTimeout(() => {
                    router.push('/login')
                }, 2000)
            } else {
                toast.error('Ocorreu um erro ao cadastrar seu usuário!')
            }
        } catch (error) {
            toast.error('Ocorreu um erro ao cadastrar seu usuário!')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const formatCpf = (value: string) => {
        const cleanedValue = value.replace(/\D/g, ''); // remove caracteres não numéricos

        if (cleanedValue.length <= 11) {
            // CPF
            return cleanedValue
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d)/, '$1.$2')
                .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                .replace(/(-\d{2})\d+?$/, '$1');
        } 
        return value.substring(0, 14);
    };
    return (
        <div className="flex flex-row gap-2 items-center justify-center h-[100dvh]">
            <div className="flex flex-col justify-between gap-3 p-6 bg-card border border-border rounded-2xl w-[400px] max-sm:w-[90%] min-h-[80%]">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row justify-between w-full">
                        <h1 className="text-3xl font-bold text-center">Cadastro</h1>
                        <Link href="/">
                            <ReturnButton />
                        </Link>
                    </div>
                    <Separator className="mt-2" />
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name">Nome</label>
                        <Input id="name" type="text" onChange={(e) => setName(e.target.value)} placeholder="Digite seu Nome" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="cpf">CPF</label>
                        <Input id="cpf" type="text" onChange={(e) => {
                            const { value } = e.target;
                            const formatedCpf = formatCpf(value);
                            e.target.value = formatedCpf as string;
                            setCpf(formatedCpf as string)
                        }} placeholder="Digite seu CPF" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="name">Data de Nascimento</label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full bg-transparent justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Selecione uma data</span>}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">E-mail</label>
                        <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="password">Senha</label>
                        <Input id="password" className="!bg-transparent" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                    </div>
                    <Link href="/login">
                        <p className="text-sm text-primary underline underline-offset-2">Já possui uma conta? Faça login!</p>
                    </Link>
                </div>
                <Button onClick={handleLogin}>{loading ? "Carregando..." : "Criar Conta"}</Button>
            </div>
            <div className="absolute w-full bottom-0 left-0 -z-10 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
    )
}