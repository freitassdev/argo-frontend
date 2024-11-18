import GradientTitle from "@/components/shared/gradient-title/gradient-title"
import Navbar from "@/components/shared/navbar/navbar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
export default function CreateProductPage() {
    return (
        <div className="flex flex-col items-center w-full h-dvh">
            <Navbar />
            <div className="flex flex-col gap-2 mt-24 w-full h-full pb-14 ">
                <GradientTitle className="text-5xl">Cadastrar Produto</GradientTitle>
                <div className="shadow-xl flex flex-row gap-2 w-full h-full rounded-2xl bg-background border border-border p-5">
                    <div className="grid grid-cols-2 gap-2 w-full">
                        <div className="flex flex-col gap-1 w-full">
                            <Label className="text-lg">Nome do Produto</Label>
                            <Input />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}