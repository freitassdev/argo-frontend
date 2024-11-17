"use client";
import Navbar from '@/components/shared/navbar/navbar';

export default function AvaliationPage() {
    return (
        <div className="flex flex-col items-center py-8">
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold py-20">Avaliações</h2>
            <hr className="border-t border-gray-400h-full max-h-2xl" />
            <div className="h-full max-w-2x1  flex flex-row gap-5">
                <div style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded">
                    <h3 className="text-lg font-semibold">Cliente 1</h3>
                    <h5 className="text-lg ">EstrelaPlaceholder</h5>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Tempo de entrega:</h3>
                    <h4 className="text-lg font-bold">Data</h4>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Qualidade do Produto:</h3>
                    <h4 className="text-lg font-bold">Opinião</h4>
                    <div style={{ backgroundColor: "#37406e" }} className="p-2 rounded text-white mt-2">
                        <h4 className="text-1g font-semibold">Avaliação</h4>
                        <div className="flex flex-row items-center py-4">
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded">
                    <h3 className="text-lg font-semibold">Cliente 2</h3>
                    <h5 className="text-lg ">EstrelaPlaceholder</h5>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Tempo de entrega:</h3>
                    <h4 className="text-lg font-bold">Data</h4>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Qualidade do Produto:</h3>
                    <h4 className="text-lg font-bold">Opinião</h4>
                    <div style={{ backgroundColor: "#37406e" }} className="p-2 rounded text-white mt-2">
                        <h4 className="text-1g font-semibold">Avaliação</h4>
                        <div className="flex flex-row items-center py-4">
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded">
                    <h3 className="text-lg font-semibold">Cliente 3</h3>
                    <h5 className="text-lg ">EstrelaPlaceholder</h5>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Tempo de entrega:</h3>
                    <h4 className="text-lg font-bold">Data</h4>
                    <h3 style={{ color: "#91A3B6" }} className="text-lg font-bold">Qualidade do Produto:</h3>
                    <h4 className="text-lg font-bold">Opinião</h4>
                    <div style={{ backgroundColor: "#37406e" }} className="p-2 rounded text-white mt-2">
                        <h4 className="text-1g font-semibold">Avaliação</h4>
                        <div className="flex flex-row items-center py-4">
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                            <div style={{ backgroundColor: "#ffffff" }} className="p-10 rounded text-white mt-2 max-w-2x1 w-1/3 m-2">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}