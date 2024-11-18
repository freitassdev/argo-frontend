"use client"

import GradientTitle from "@/components/shared/gradient-title/gradient-title"
import Navbar from "@/components/shared/navbar/navbar"
import ReturnButton from "@/components/shared/return-button/return-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function EditAddress() {
  return (
    <div className="flex flex-col gap-4 pb-8 mt-24">
      <Navbar />
      <div className="flex flex-col gap-2">
        <ReturnButton />
        <GradientTitle>Edite seu endereço</GradientTitle>
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-center bg-primary text-foreground p-4 rounded-xl">
        <div className="max-w-xl w-full">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">País:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Nome completo:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Telefone:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Endereço:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Número:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Bairro:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Cidade:</label>
            <Input className="bg-white" />
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Estado:</label>
            <Input className="bg-white" />
          </div>
          <div className="w-full flex flex-row justify-start py-2">
            <Button className="bg-transparent px-14 text-white dark:text-primary" variant={"outline"}>Salvar</Button>
          </div>
        </div>
      </div>
    </div>
  )
}