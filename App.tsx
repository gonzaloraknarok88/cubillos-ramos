import React from 'react';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="w-full h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600">Cubillos & Ramos</h1>
        <p className="text-xl text-slate-300 mb-8">Abogados especializados | Defensa y Confianza</p>
        <a
          href="https://wa.me/56999235381"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition transform hover:scale-105"
        >
          <MessageCircle size={24} />
          Contactar por WhatsApp
        </a>
      </div>
      
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/56999235381"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition transform flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
};

export default App;
