
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="mision" className="py-24 bg-brand-deep text-brand-white relative overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -top-40 -right-40 w-96 h-96 border border-brand-gold/10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
            Excelencia Jurídica <br /> 
            <span className="text-brand-gold italic">con Propósito.</span>
          </h2>
          <p className="text-brand-white/70 text-lg leading-relaxed mb-10">
            En Cubillos & Ramos, entendemos que cada caso es único. Nuestra misión es proporcionar una defensa técnica de primer nivel que proteja no solo sus derechos, sino también su tranquilidad.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center text-brand-gold">01</div>
              <div>
                <h4 className="text-xl font-serif text-brand-gold mb-2">Misión</h4>
                <p className="text-brand-white/60">Defender con integridad y rigor jurídico los intereses de nuestros representados, buscando siempre la justicia y la equidad.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center text-brand-gold">02</div>
              <div>
                <h4 className="text-xl font-serif text-brand-gold mb-2">Visión</h4>
                <p className="text-brand-white/60">Ser la firma líder en el mercado legal chileno, reconocida por nuestra ética profesional y resultados sobresalientes.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1453948575854-357a4ad25f60?auto=format&fit=crop&q=80&w=1000" 
            alt="Oficina Cubillos & Ramos"
            className="object-cover w-full h-full opacity-80"
          />
          <div className="absolute inset-0 bg-brand-deep/20"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
