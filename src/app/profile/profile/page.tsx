"use client"
import Navbar from "@/components/shared/navbar/navbar";
import { Avatar } from "@radix-ui/react-avatar";

export default function Profile(){
    return(
        <div>
            <Navbar></Navbar>
            <div className="flex flex-row items-center py-40 gap-6">
                <div style={{backgroundColor: "#0c0726"}} className="p-20 rounded-lg w-1/2 flex flex-col items-center">
                    <Avatar className="bg-gray-500 w-24 h-24 rounded-full mb-4 py-4" />
                    <h2  style={{color: "#fff"}} className="text-lg mb-4">Fulano de tal da silva</h2>
                </div> 

                <div className="space-y-4 w-100 w-96">
                        <button style={{backgroundColor: "#1a1a4a", color: "#fff"}}  className=" w-80 py-4 rounded">Meus pedidos</button>
                        <button style={{backgroundColor: "#1a1a4a", color: "#fff"}}  className=" w-80 py-4 rounded">Atualizar meus dados</button>
                        <button style={{backgroundColor: "#1a1a4a", color: "#fff"}}  className=" w-80 py-4 rounded">Meus endereços</button>
                        <button style={{backgroundColor: "#1a1a4a", color: "#fff"}}  className="w-80 py-4 rounded">Sair da conta</button>
                </div>
            </div>
        </div>
        
    )
}