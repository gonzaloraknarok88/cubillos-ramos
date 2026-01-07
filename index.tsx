import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#1a1a1a', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#ff6b6b' }}>Cubillos & Ramos</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#aaa' }}>Abogados Especializados | Defensa y Confianza</p>
      <a href="https://wa.me/56999235381" target="_blank" rel="noopener noreferrer" style={{ background: '#25D366', color: 'white', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontSize: '1.1rem', fontWeight: 'bold' }}>📱 Contactar por WhatsApp</a>
      <a href="https://wa.me/56999235381" target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '24px', right: '24px', width: '60px', height: '60px', background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', zIndex: 50, boxShadow: '0 4px 12px rgba(37,211,102,0.4)', textDecoration: 'none' }}>💬</a>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<React.StrictMode><App /></React.StrictMode>);
