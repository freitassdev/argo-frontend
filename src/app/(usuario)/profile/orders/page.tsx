"use client"
import Navbar from '@/components/shared/navbar/navbar';

export default function Orders() {
    return (
        <div className="flex flex-col items-center">
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold mb-6 py-40">Meu perfil</h2>
            <div className='flex flex-row gap-10'>
                <div style={{backgroundColor: "#1a1a4a"}}  className=" text-white p-6 rounded-lg w-80">
                    <h3 className="text-center text-lg font-semibold mb-4">Pedidos Finalizados</h3>
                    <hr className="border-gray-400 mb-4" />
                    <div className="">
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: "#1a1a4a"}}  className=" text-white p-6 rounded-lg w-80">
                    <h3 className="text-center text-lg font-semibold mb-4">Pedidos Em Andamento</h3>
                    <hr className="border-gray-400 mb-4" />
                    <div className="">
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <div style={{height:"80px"}} className="bg-gray-500 w-28 mb-4 py-4 rounded-lg"></div>
                            <div style={{backgroundColor: "#37406e", height:"80px"}} className="flex flex-col space-x-4 p-4 w-60 rounded-lg">
                                <p>Código:</p>
                                <p>Data:</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}