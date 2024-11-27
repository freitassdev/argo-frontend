"use client"
import GradientTitle from "@/components/shared/gradient-title/gradient-title";
import Navbar from "@/components/shared/navbar/navbar";
import ReturnButton from "@/components/shared/return-button/return-button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useUserStore } from "@/hooks/useUserStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie } from "cookies-next";

export default function Profile() {
    const { name, resetUser } = useUserStore((state) => state);
    const router = useRouter()
    const handleLogout = () => {
        resetUser()
        deleteCookie('userAccessNivel')
        router.push('/')
    }
    return (
        <div className="w-full h-dvh max-h-dvh overflow-y-hidden">
            <Navbar />
            <div className="mt-24 flex flex-col gap-3 pb-28 h-full">
                <GradientTitle className="mx-auto text-center text-5xl py-0">
                    Minha Conta
                </GradientTitle>
                <ReturnButton />
                <div className="shadow-xl flex items-center flex-col gap-2 w-full h-full rounded-2xl bg-background border border-border p-5">
                    <div className="flex flex-col gap-2 items-center">
                        <Avatar className="border border-primary dark:border-border size-20 text-2xl uppercase">
                            <AvatarFallback>
                                {(name.split('')[0] || 'U') + (name.split('')[1] || 'N')}
                            </AvatarFallback>
                        </Avatar>
                        <p className="text-2xl text-foreground">{name}</p>
                    </div>
                    <Separator className="max-w-lg my-3" />
                    <div className="flex flex-col gap-3 items-center w-full max-w-lg">
                        <Link href="profile/updateProfile" className="w-full">
                            <div className="transition-colors rounded-xl flex flex-row items-center justify-center p-4 bg-primary hover:bg-primary/80 w-full">
                                <p className="text-background ">Atualizar Informações</p>
                            </div>
                        </Link>
                        <Link href="profile/address" className="w-full">
                            <div className="transition-colors rounded-xl flex flex-row items-center justify-center p-4 bg-primary hover:bg-primary/80 w-full">
                                <p className="text-background ">Endereços</p>
                            </div>
                        </Link>
                        <Link href="profile/orders" className="w-full">
                            <div className="transition-colors rounded-xl flex flex-row items-center justify-center p-4 bg-primary hover:bg-primary/80 w-full">
                                <p className="text-background ">Pedidos</p>
                            </div>
                        </Link>
                        <div className="cursor-pointer transition-colors rounded-xl flex flex-row items-center justify-center p-4 bg-destructive hover:bg-destructive/80 w-full" onClick={handleLogout}>
                            <p className="text-white ">Sair</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}