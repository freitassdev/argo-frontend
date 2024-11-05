"use client"
export default function editAddresss() {
    return (
        <div className="flex flex-col items-center py-8 bg-gray-100 min-h-screen">
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg mb-4">Voltar</button>
        
        <h2 className="text-2xl font-semibold mb-4">Edite seu endereço</h2>
        
        {/* Linha divisória */}
        <hr className="border-t border-gray-400 mb-6 w-full max-w-2xl" />
        
        <div className="w-full max-w-2xl bg-blue-900 p-6 rounded-lg space-y-4 overflow-auto">
          
          {/* Campo País */}
          <div>
            <label className="block text-white font-semibold mb-2">País:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-blue-700 text-white"
              placeholder="Brasil"
            />
          </div>
          
          {/* Campo Nome completo */}
          <div>
            <label className="block text-white font-semibold mb-2">Nome completo:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-blue-700 text-white"
              placeholder="Seu nome completo"
            />
          </div>
          
          {/* Campo Telefone */}
          <div>
            <label className="block text-white font-semibold mb-2">Telefone:</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-blue-700 text-white"
              placeholder="(11) 12345-6789"
            />
          </div>
        </div>
      </div>
    )
}