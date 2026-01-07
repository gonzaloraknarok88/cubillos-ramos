
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES, ICONS } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-brand-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-5xl text-brand-deep mb-4"
          >
            Nuestras Áreas de Especialización
          </motion.h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto mb-6"></div>
          <p className="text-brand-deep/60 max-w-2xl mx-auto">
            Ofrecemos soluciones legales integrales con un enfoque humano y profesional en las materias más críticas para su seguridad y bienestar.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-brand-white p-10 rounded-2xl shadow-sm border border-brand-deep/5 transition-all hover:shadow-xl group"
            >
              <div className="bg-brand-deep text-brand-gold w-16 h-16 rounded-xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                {ICONS[service.icon]}
              </div>
              <h3 className="font-serif text-2xl text-brand-deep mb-4 group-hover:text-brand-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-deep/70 leading-relaxed mb-6">
                {service.description}
              </p>
              <a 
                href="#contacto" 
                className="text-brand-gold font-bold text-sm uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all"
              >
                Más información <span>→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
