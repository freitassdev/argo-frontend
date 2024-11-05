"use client"
import Navbar from './../../components/shared/navbar/navbar';

export default function updateProfile(){
    return(
    <div className="flex flex-col items-center py-8 min-h-screen">
      <Navbar></Navbar>
      <h2 className="text-2xl font-semibold mb-6 py-20">Atualizar meus dados</h2>
      <div className="w-full max-w-4xl space-y-4">
        <hr className="border-gray-400 mb-4" />

        <div className="flex space-x-8">
          <div style={{backgroundColor: "#1a1a4a"}} className="text-white p-6 rounded-lg w-2/3">
            <h3 className="text-lg font-semibold mb-4">Informações pessoais</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Nome completo:</label>
                <input style={{backgroundColor: "#37406e"}} type="text" value="Fulano de tal da silva" className="w-full p-2 rounded text-white"/>
              </div>
              <div>
                <label className="block mb-1">Senha:</label>
                <input style={{backgroundColor: "#37406e"}} type="password" value="MRTETAS"
                className="w-full p-2 rounded text-white"/>
              </div>
              <div>
                <label className="block mb-1">Data de nascimento:</label>
                <input style={{backgroundColor: "#37406e"}} type="text" value="00/00/0000" className="w-full p-2 rounded text-white"/>
              </div>
              <div>
                <label className="block mb-1">CPF:</label>
                <input style={{backgroundColor: "#37406e"}} type="text" value="000.000.000-00" className="w-full p-2 rounded text-white"
                />
              </div>
            </div>
          </div>

          <div  style={{backgroundColor: "#1a1a4a"}} className="text-white p-6 rounded-lg w-1/3">
            <h3 className="text-lg font-semibold mb-4">Contatos</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Email pessoal</label>
                <input style={{backgroundColor: "#37406e"}} type="text" value="testedeemail@gmail.com" className="w-full p-2 rounded text-white"
                />
              </div>
              <div>
                <label className="block mb-1">Telefone Celular</label>
                <input style={{backgroundColor: "#37406e"}}type="text" value="(00) 00000-0000"  className="w-full p-2 rounded text-white"
                />
              </div>
              <div>
                <label className="block mb-1">Telefone Comercial</label>
                <input style={{backgroundColor: "#37406e"}} type="text" value="(00) 00000-0000" className="w-full p-2 rounded text-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}