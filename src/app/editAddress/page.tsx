"use client"
export default function editAddresss() {
    return (
        <div className="flex flex-col py-8">
        <button style={{backgroundColor: "#37406e"}} className="text-white px-4 py-2 rounded-lg mb-4 w-20 font-semibold">Voltar</button>
        <h2 className="text-2xl font-semibold mb-4">Edite seu endereço</h2>
        <hr className="border-t border-gray-400 mb-6 w-full max-w-2xl" />
        <div style={{backgroundColor: "#1a1a4a"}} className="w-full max-w-2xl p-6 rounded-lg">
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">País:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Nome completo:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Telefone:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Endereço:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Número:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Bairro:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Cidade:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex flex-col py-2">
            <label className="font-semibold text-white mb-2">Estado:</label>
            <input style={{backgroundColor: "#37406e"}} className="h-12 rounded-lg text-white" type="text"/>
          </div>
          <div className="flex justify-center py-2">
            <button style={{backgroundColor: "#37406e"}} className="text-white px-4 py-2 rounded-lg font-semibold itens-center">Salvar</button>
          </div>
        </div>
      </div>
    )
}