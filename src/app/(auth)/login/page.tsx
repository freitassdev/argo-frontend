'use client';

import ReturnButton from "@/components/shared/return-button/return-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useUserStore } from "@/hooks/useUserStore";
import axios from "@/services/axios.service";
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const { setUser } = useUserStore((state) => state)
    const handleLogin = async () => {
        if (!email || !password) return toast.error('Preencha todos os campos!');
        setLoading(true)
        try {
            const response = await axios.post('auth/login.php', { txtEmail: email, txtSenha: password })
            if(response.status !== 200) return toast.error('Erro ao fazer login!');
            if(response.data.error) return toast.error(response.data.error);
            if(response.data.autenticado) {
                toast.success('Login efetuado com sucesso!')
                setUser({
                    id: response.data.userDados.USRID,
                    name: response.data.userDados.USRNOME,
                    email: response.data.userDados.USREMAIL,
                    cpf: response.data.userDados.USRCPF,
                    dateOfBirth: response.data.userDados.USRDTNASC,
                    accessNivel: response.data.userDados.USRNIVELACESSO,
                    blocked: response.data.userDados.USRBLOQUEADO,
                    sessionId: response.data.sessionId
                })
                setTimeout(() => {
                    router.push('/')
                }, 2000)
            } else {
                toast.error('Email ou senha incorretos!')
            }
            console.log(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }
    return (
        <div className="flex flex-row gap-2 items-center justify-center h-[100dvh]">
            <div className="flex flex-col justify-between gap-3 p-6 bg-card border border-border rounded-2xl w-[400px] max-sm:w-[90%] h-[70%]">
                <div className="flex flex-col w-full gap-2">
                    <div className="flex flex-row justify-between w-full">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <Link href="/">
                            <ReturnButton />
                        </Link>
                    </div>
                    <Separator className="mt-5" />
                    <div className="flex flex-col gap-3 mt-5">
                        <label htmlFor="email">E-mail</label>
                        <Input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="password">Senha</label>
                        <Input id="password" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Digite sua senha" />
                    </div>
                    <Link href="/cadastro">
                        <p className="text-sm text-primary underline underline-offset-2">Não tem uma conta? Cadastre-se!</p>
                    </Link>
                </div>
                <Button onClick={handleLogin}>{loading ? "Carregando..." : "Entrar"}</Button>
            </div>
            <div className="absolute w-full bottom-0 left-0 -z-10 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
    )
}