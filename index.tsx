import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">Cubillos & Ramos</h1>
          <div className="flex gap-8">
            <a href="#servicios" className="hover:text-red-500 transition">Servicios</a>
            <a href="#equipo" className="hover:text-red-500 transition">Equipo</a>
            <a href="#contacto" className="hover:text-red-500 transition">Contacto</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center animate-fade-in">
        <h2 className="text-6xl font-bold mb-6 leading-tight">Defensa y Confianza</h2>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">Somos un equipo de abogados especializados en derecho civil, comercial y laboral con más de 20 años de experiencia.</p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition transform hover:scale-105">Agendar Consulta</button>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Nuestros Servicios</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Derecho Civil', icon: '⚖️', desc: 'Casos de familia, herencias y contratos' },
              { title: 'Derecho Laboral', icon: '👔', desc: 'Despidos, conflictos y negociaciones' },
              { title: 'Derecho Comercial', icon: '📊', desc: 'Empresas, sociedades y negocios' }
            ].map((service, i) => (
              <div key={i} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-red-500 transition transform hover:scale-105">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h4 className="text-xl font-bold mb-2">{service.title}</h4>
                <p className="text-slate-300">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipo" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Nuestro Equipo</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { name: 'Roberto Cubillos', title: 'Socio Fundador', exp: '25+ años' },
              { name: 'María Ramos', title: 'Socia Fundadora', exp: '22+ años' }
            ].map((member, i) => (
              <div key={i} className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
                <h4 className="text-2xl font-bold text-red-500">{member.name}</h4>
                <p className="text-slate-300 mt-1">{member.title}</p>
                <p className="text-sm text-slate-400 mt-2">{member.exp} de experiencia</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-8">Contáctanos</h3>
          <div className="space-y-4 text-lg text-slate-300">
            <p>📞 +56 9 1234 5678</p>
            <p>📧 contacto@cubillos-ramos.cl</p>
            <p>📍 Santiago, Chile</p>
          </div>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Tu nombre" className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-red-500 outline-none" />
            <input type="email" placeholder="Tu email" className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-red-500 outline-none" />
            <textarea placeholder="Tu mensaje" rows={5} className="w-full bg-slate-700 text-white px-4 py-2 rounded border border-slate-600 focus:border-red-500 outline-none"></textarea>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded transition">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-6 text-center text-slate-400">
        <p>&copy; 2026 Cubillos & Ramos. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
