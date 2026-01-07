
import React from 'react';
import { motion } from 'framer-motion';
import { WHATSAPP_URL } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-brand-deep/75 md:bg-brand-deep/60"></div>
      </div>

      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="h-full w-px bg-brand-gold absolute left-1/4"></div>
        <div className="h-full w-px bg-brand-gold absolute right-1/4"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block text-brand-gold tracking-[0.3em] uppercase text-sm mb-4 font-semibold">
            Boutique Jurídica de Excelencia
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-white leading-tight mb-8">
            Defensa y confianza <br />
            <span className="text-brand-gold italic">en cada paso.</span>
          </h1>
          <p className="text-brand-white/80 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Representación legal premium en el ámbito penal, laboral y familiar. <br className="hidden md:block" />
            Nuestra experiencia es su mayor tranquilidad.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-gold text-brand-deep px-10 py-4 rounded-full text-lg font-bold shadow-2xl hover:bg-white transition-all w-full sm:w-auto"
            >
              Contactar por WhatsApp
            </motion.a>
            <motion.a
              href="#servicios"
              whileHover={{ y: -5 }}
              className="text-brand-white border border-brand-white/30 hover:border-brand-gold px-10 py-4 rounded-full text-lg font-medium transition-all w-full sm:w-auto backdrop-blur-sm"
            >
              Ver Servicios
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-gold/50 flex flex-col items-center"
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-brand-gold"></div>
        <span className="text-[10px] uppercase tracking-widest mt-2">Scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
