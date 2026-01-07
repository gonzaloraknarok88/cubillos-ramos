
import React from 'react';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { ADDRESS, PHONE_NUMBER } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deep text-brand-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center border border-brand-gold rounded-full">
                <span className="text-brand-gold font-serif font-bold text-lg">CR</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight">Cubillos & Ramos</span>
                <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase font-medium">Abogados</span>
              </div>
            </div>
            <p className="text-brand-white/50 leading-relaxed max-w-sm mb-8">
              Comprometidos con la excelencia y la ética profesional desde Santiago para todo Chile. Brindamos asesoría jurídica de alto nivel en materias complejas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-deep transition-all"><Instagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-deep transition-all"><Facebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-deep transition-all"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl text-brand-gold mb-6 italic">Navegación</h4>
            <ul className="space-y-4 text-brand-white/60">
              <li><a href="#inicio" className="hover:text-brand-gold transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-brand-gold transition-colors">Servicios Legales</a></li>
              <li><a href="#equipo" className="hover:text-brand-gold transition-colors">Nuestro Equipo</a></li>
              <li><a href="#mision" className="hover:text-brand-gold transition-colors">Misión y Visión</a></li>
              <li><a href="#contacto" className="hover:text-brand-gold transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="font-serif text-xl text-brand-gold mb-6 italic">Soporte</h4>
            <ul className="space-y-4 text-brand-white/60">
              <li><a href="#" className="hover:text-brand-gold transition-colors">Preguntas Frecuentes</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Políticas de Privacidad</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Términos de Servicio</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Trabaja con Nosotros</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-brand-white/40">
          <p>© {new Date().getFullYear()} Cubillos & Ramos Abogados. Todos los derechos reservados.</p>
          <p>Desarrollado con Excelencia en Chile</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
