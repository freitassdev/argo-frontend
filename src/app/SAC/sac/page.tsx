'use client';
import Navbar from '@/components/shared/navbar/navbar';

function Assuntoselect() {
    return (
        <label>
            <select style={{ backgroundColor: "#37406e" }} className="text-white p-4 rounded w-full mt-2" name="itemselecionado">
                <option value="apple" style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded w-4/5 ">Pedido atrasado</option>
                <option value="banana" style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded w-4/5 ">Pedido chegou com defeito</option>
                <option value="orange" style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded w-4/5 ">Cancelar pedido</option>
            </select>
        </label>
    );
}

function Descricaotextarea() {
    return (
        <textarea name="textdescricao" id="desc" style={{ backgroundColor: "#37406e" }} className="text-white p-4 rounded w-full mt-2 min-h-[150px]"></textarea>
    );
}

export default function SACPage() {
    return (
        <div className="flex flex-col items-center py-8">
            <div className="flex flex-row align-center py-4 w-full">
                <div className="flex flex-col items-start py-4 px-10 w-1/2">
                    <button style={{ backgroundColor: "#1a1a4a" }} className="text-white p-2 rounded w-20">Voltar</button>
                </div>
                <div className="flex flex-col items-end py-4 px-10 w-1/2">
                    <button style={{ backgroundColor: "#1a1a4a" }} className="text-white p-2 rounded w-20">Enviar</button>
                </div>
            </div>
            <h2 className="text-2xl font-semibold py-10 underline">Serviço de Atendimento ao Consumidor</h2>
            <div style={{ backgroundColor: "#1a1a4a" }} className="text-white p-4 rounded w-4/5">
                <h5 className='font-semibold'>Assunto:</h5>
                <Assuntoselect></Assuntoselect>
                <h5 className='font-semibold mt-2'>Descrição:</h5>
                <Descricaotextarea></Descricaotextarea>

            </div>

        </div >
    )
}