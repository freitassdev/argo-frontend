'use client';

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { LogOut, User, UserPen, Package, MapPinHouse, ShieldQuestion, Shield } from "lucide-react";
import { Label } from '@/components/ui/label';
import { Badge } from "@/components/ui/badge";
import { useUserStore } from "@/hooks/useUserStore";
import { EUserAccessNivel } from "@/types";

export default function UserMenu({ className }: {
    className?: string,
}) {
    const router = useRouter();
    const { accessNivel, id, name, resetUser } = useUserStore((state) => state);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <div className={cn("flex flex-row items-center gap-3", className)}>
                    <Avatar className="cursor-pointer p-1 border border-primary dark:border-muted text-white">
                        <AvatarFallback className="bg-primary dark:bg-muted">{name[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                </div>
            </PopoverTrigger>
            <PopoverContent className="w-80 border border-primary dark:border-border">
                <div className="grid gap-4">
                    <div className="flex flex-row gap-3 items-center ">
                        <Avatar className="cursor-pointer w-12 h-12 border-[3px] border-primary">
                            <AvatarFallback>{name[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col justify-center gap-0 h-full">
                            <h4 className="text-foreground font-medium leading-none flex flex-row items-center">{name}
                                {accessNivel !== EUserAccessNivel.USER && (
                                    <Badge className="rounded-full text-primary-foreground text-xs px-2 ml-2">
                                        {accessNivel === EUserAccessNivel.ADMIN ? 'Admin' : 'Funcionário'}
                                    </Badge>
                                )}
                            </h4>
                            <p className="text-sm text-foreground">
                                ID de usuário: {id}
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-4 w-full">
                        <Separator />
                        <div className="flex flex-col gap-2 w-full">
                            <Label>Sua conta</Label>
                            <Button className="border border-primary text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => router.push(`/profile`)}>
                                Meu Perfil
                                <User className="h-5" />
                            </Button>
                            <Button className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => router.push(`/profile/updateProfile`)}>
                                Atualizar Dados
                                <UserPen className="h-5" />
                            </Button>
                            <Button className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => router.push(`/profile/address`)}>
                                Meus Endereços
                                <MapPinHouse className="h-5" />
                            </Button>
                            <Button className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => router.push(`/profile/orders`)}>
                                Meus Pedidos
                                <Package className="h-5" />
                            </Button>
                        </div>
                        {accessNivel === EUserAccessNivel.WORKER && (
                            <div className="flex flex-col gap-2 w-full">
                                <Label>Painel Funcionário</Label>
                                <Button
                                    className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                    onClick={() => router.push('/restrict/worker')}>
                                    Acessar Painel de Funcionário
                                    <Shield className="h-5" />
                                </Button>
                            </div>
                        )}
                        <div className="flex flex-col gap-2 w-full">
                            <Label>Outros</Label>

                            <Button
                                className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => router.push('/sac')}>
                                Acessar SAC
                                <ShieldQuestion className="h-5" />
                            </Button>
                            <Button
                                className="border border-primary dark:border-none text-sm w-full bg-transparent dark:bg-primary hover:bg-muted-foreground/40 dark:hover:brightness-75  text-foreground dark:text-primary-foreground justify-between gap-2"
                                onClick={() => {
                                    resetUser();
                                    router.push('/');
                                }}>
                                Sair
                                <LogOut className="h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    )
}