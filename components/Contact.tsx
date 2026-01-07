
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ICONS, ADDRESS, PHONE_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    causa: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Formulario enviado con éxito. Nos contactaremos con usted a la brevedad.');
    setFormData({ nombre: '', telefono: '', causa: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="py-24 bg-brand-gray relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-white p-8 md:p-12 rounded-3xl shadow-xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-brand-deep mb-4">Inicie su Defensa</h2>
            <p className="text-brand-deep/60 mb-10">Complete el formulario y un especialista se pondrá en contacto dentro de las próximas 24 horas.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-deep uppercase tracking-widest mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    required
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-gold focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                    placeholder="Ej. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-deep uppercase tracking-widest mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    required
                    value={formData.telefono}
                    onChange={(e) => setFormData({...formData, telefono: e.target.value})}
                    className="w-full bg-brand-gray border border-transparent focus:border-brand-gold focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-deep uppercase tracking-widest mb-2">Tipo de Causa</label>
                <select 
                  className="w-full bg-brand-gray border border-transparent focus:border-brand-gold focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                  value={formData.causa}
                  onChange={(e) => setFormData({...formData, causa: e.target.value})}
                >
                  <option value="">Seleccione una materia...</option>
                  <option value="penal">Penal</option>
                  <option value="laboral">Laboral</option>
                  <option value="familia">Familia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-deep uppercase tracking-widest mb-2">Breve Descripción</label>
                <textarea 
                  rows={4}
                  value={formData.mensaje}
                  onChange={(e) => setFormData({...formData, mensaje: e.target.value})}
                  className="w-full bg-brand-gray border border-transparent focus:border-brand-gold focus:ring-0 rounded-xl px-4 py-3 outline-none transition-all"
                  placeholder="Explique brevemente su situación..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-deep text-brand-gold py-4 rounded-xl font-bold text-lg tracking-wide hover:bg-brand-gold hover:text-brand-deep transition-all shadow-lg"
              >
                Enviar Solicitud
              </motion.button>
            </form>
          </motion.div>

          {/* Info & Map Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-brand-deep mb-8">Nuestra Oficina</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-lg text-brand-gold">
                    {ICONS.map}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-deep uppercase text-xs tracking-widest mb-1">Dirección</h5>
                    <p className="text-brand-deep/70">{ADDRESS}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-brand-gold/10 p-3 rounded-lg text-brand-gold">
                    {ICONS.phone}
                  </div>
                  <div>
                    <h5 className="font-bold text-brand-deep uppercase text-xs tracking-widest mb-1">Contacto Directo</h5>
                    <p className="text-brand-deep/70">{PHONE_NUMBER}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl border-4 border-white grayscale hover:grayscale-0 transition-all duration-700 min-h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4215324545263!2d-70.64883442431057!3d-33.43831817339462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5980a30b507%3A0xf635832a58b22a0!2sMiraflores%20222%2C%20Santiago%2C%20Regi%C3%B3n%20Metropolitana!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Cubillos & Ramos"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
