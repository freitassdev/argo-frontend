"use client"
import Navbar from '@/components/shared/navbar/navbar';

export default function address() {
    return (
        <div className="flex flex-col items-center py-8">
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold py-20">Meus Endereços</h2>
            <hr className="border-t border-gray-400 mb-4 w-full max-w-2xl" />
            <div className="w-full max-w-2xl space-y-4">
                <div style={{backgroundColor: "#1a1a4a"}} className="text-white p-4 rounded">
                    <h3 className="text-lg font-semibold">Endereço 1</h3>
                    <p style={{backgroundColor: "#37406e"}} className="p-2 rounded text-white mt-2">
                        Rua, Bairro, Cidade, Estado, CEP
                    </p>
                </div>
                <div style={{backgroundColor: "#1a1a4a"}} className="text-white p-4 rounded">
                    <h3 className="text-lg font-semibold">Endereço 2</h3>
                    <p style={{backgroundColor: "#37406e"}} className="p-2 rounded text-white mt-2">
                        Rua, Bairro, Cidade, Estado, CEP
                    </p>
                </div>
                <div className="flex flex-row space-x-4 mt-4">
                    <button style={{backgroundColor: "#0c0726"}} className="text-white px-4 py-2 rounded-lg">Editar</button>
                    <button style={{backgroundColor: "#0c0726"}} className="text-white px-4 py-2 rounded-lg">Adicionar</button>
                </div>
            </div>
        </div>
    )
}