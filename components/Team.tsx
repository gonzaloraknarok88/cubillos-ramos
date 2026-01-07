
import React from 'react';
import { motion } from 'framer-motion';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <section id="equipo" className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-brand-deep mb-4"
          >
            Liderazgo y Experiencia
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-deep/60 max-w-2xl mx-auto">
            Nuestros socios fundadores lideran cada estrategia legal, garantizando que su causa reciba la atención y expertise que merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {TEAM.map((lawyer, index) => (
            <motion.div
              key={lawyer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group flex flex-col items-center text-center md:text-left md:flex-row gap-8 bg-brand-gray/50 p-8 rounded-2xl transition-all hover:bg-white hover:shadow-xl border border-transparent hover:border-brand-gold/20"
            >
              <div className="w-48 h-48 rounded-2xl overflow-hidden flex-shrink-0 shadow-lg grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={lawyer.image} alt={lawyer.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-brand-deep mb-1">{lawyer.name}</h3>
                <p className="text-brand-gold font-bold text-sm tracking-wider uppercase mb-4">{lawyer.role}</p>
                <p className="text-brand-deep/70 text-sm leading-relaxed mb-4 italic">"{lawyer.bio}"</p>
                <div className="flex gap-4 justify-center md:justify-start">
                   <span className="w-8 h-px bg-brand-gold"></span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
