import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginPage() {
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
                    <div className="flex flex-col gap-3">
                        <label htmlFor="email">E-mail</label>
                        <Input id="email" type="email" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <label htmlFor="password">Senha</label>
                        <Input id="password" type="password" placeholder="Digite sua senha" />
                    </div>

                </div>
                <Button>Entrar</Button>
            </div>
            <div className="absolute w-full bottom-0 left-0 -z-10 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
    )
}