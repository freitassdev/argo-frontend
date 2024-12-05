import GradientTitle from "@/components/shared/gradient-title/gradient-title"
import Navbar from "@/components/shared/navbar/navbar"
import Link from "next/link"
export default function AdminPage() {
    return (
        <div className="flex flex-col items-center w-full h-dvh ">
            <Navbar />
            <div className="flex flex-col gap-2 mt-24 w-full ">
                <GradientTitle className="text-5xl">Área do Funcionário</GradientTitle>
                <div className="shadow-xl flex flex-col gap-3 w-full h-96 rounded-2xl bg-background border border-border p-5">
                    <Link href="/restrict/worker/createProduct"
                        className="cursor-pointer flex flex-row items-center justify-center p-2 bg-card dark:bg-border dark:hover:bg-border/90 hover:bg-card/90 transition-colors w-full h-14 rounded-xl">
                        <h1 className="font-black text-xl">
                            Cadastrar Produto
                        </h1>
                    </Link>
                    <Link href="/restrict/worker/finance"
                        className="cursor-pointer flex flex-row items-center justify-center p-2 bg-card dark:bg-border dark:hover:bg-border/90 hover:bg-card/90 transition-colors w-full h-14 rounded-xl">
                        <h1 className="font-black text-xl">
                            Financeiro
                        </h1>
                    </Link>
                    <Link href="/restrict/worker/updateProduct"
                        className="cursor-pointer flex flex-row items-center justify-center p-2 bg-card dark:bg-border dark:hover:bg-border/90 hover:bg-card/90 transition-colors w-full h-14 rounded-xl">
                        <h1 className="font-black text-xl">
                            Atualizar Produto
                        </h1>
                    </Link>
                    <Link href="/restrict/worker/createProduct"
                        className="cursor-pointer flex flex-row items-center justify-center p-2 bg-card dark:bg-border dark:hover:bg-border/90 hover:bg-card/90 transition-colors w-full h-14 rounded-xl">
                        <h1 className="font-black text-xl">
                            Estoque
                        </h1>
                    </Link>
                </div>
            </div>

        </div>
    )
}