
import React from 'react';
import { Scale, Briefcase, Users, Mail, MapPin, Phone } from 'lucide-react';
import { Service, Lawyer } from './types';

export const PHONE_NUMBER = "+56 9 9923 581";
export const WHATSAPP_URL = `https://wa.me/5699923581`;
export const ADDRESS = "Calle Miraflores 222, Piso 15, Santiago, Chile";

export const SERVICES: Service[] = [
  {
    id: 'penal',
    title: 'Derecho Penal',
    description: 'Defensa técnica especializada en litigación penal compleja, delitos económicos y representación ante el Ministerio Público.',
    icon: 'scale'
  },
  {
    id: 'laboral',
    title: 'Derecho Laboral',
    description: 'Asesoría integral para trabajadores y empresas en despidos injustificados, tutela laboral y negociaciones colectivas.',
    icon: 'briefcase'
  },
  {
    id: 'familia',
    title: 'Derecho de Familia',
    description: 'Acompañamiento empático en procesos de divorcio, pensiones de alimentos, relación directa y regular y cuidado personal.',
    icon: 'users'
  }
];

export const TEAM: Lawyer[] = [
  {
    id: 'cubillos',
    name: 'Andrés Cubillos',
    role: 'Socio Fundador - Derecho Penal',
    bio: 'Abogado de la Universidad de Chile con más de 15 años de experiencia en litigación de alta complejidad.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400'
  },
  {
    id: 'ramos',
    name: 'Carolina Ramos',
    role: 'Socia Fundadora - Derecho Laboral',
    bio: 'Especialista en relaciones laborales y cumplimiento normativo, con Magíster en Derecho del Trabajo.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400'
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  scale: <Scale className="w-8 h-8" />,
  briefcase: <Briefcase className="w-8 h-8" />,
  users: <Users className="w-8 h-8" />,
  mail: <Mail className="w-5 h-5" />,
  map: <MapPin className="w-5 h-5" />,
  phone: <Phone className="w-5 h-5" />
};
