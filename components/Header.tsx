
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Misión', href: '#mision' },
    { name: 'Equipo', href: '#equipo' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-brand-deep/95 backdrop-blur-md py-4 shadow-xl border-b border-brand-gold/10' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Section */}
        <motion.a 
          href="#inicio"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 flex items-center justify-center border border-brand-gold rounded-full transition-colors group-hover:bg-brand-gold">
             <span className="text-brand-gold font-serif font-bold group-hover:text-brand-deep transition-colors">CR</span>
          </div>
          <div className="flex flex-col">
            <span className={`font-serif text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-brand-white' : 'text-brand-white md:text-brand-deep'
            } ${!isScrolled && 'text-white'}`}>
              Cubillos & Ramos
            </span>
            <span className="text-[10px] tracking-[0.2em] text-brand-gold uppercase font-medium">Abogados</span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`text-sm font-medium tracking-wide hover:text-brand-gold transition-colors ${
                isScrolled ? 'text-brand-white' : 'text-white drop-shadow-md'
              }`}
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-gold text-brand-deep px-6 py-2 rounded-full text-sm font-bold transition-all hover:bg-white hover:shadow-lg"
          >
            Consulta Legal
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            isScrolled ? 'text-brand-white' : 'text-white'
          }`}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-deep border-b border-brand-gold/20"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-brand-white text-lg font-medium hover:text-brand-gold py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
