import React from 'react';
import { motion } from 'framer-motion';

const doctors = [
  {
    name: 'Dr. Carlos Andrade',
    specialty: 'Cardiologista',
    crm: 'CRM/SP 123456',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d'
  },
  {
    name: 'Dra. Ana Beatriz Costa',
    specialty: 'Pediatra',
    crm: 'CRM/SP 654321',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2'
  },
  {
    name: 'Dr. Ricardo Mendes',
    specialty: 'Ortopedista',
    crm: 'CRM/SP 789012',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7'
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="section bg-light-gray">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark">Nosso <span className="highlight">Corpo Clínico</span></h2>
          <p>Profissionais dedicados e experientes prontos para cuidar da sua saúde.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, i) => (
            <motion.div
              key={doctor.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden text-center group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="relative">
                <img  class="w-full h-72 object-cover" alt={`Foto do(a) médico(a) ${doctor.name}`} src="https://images.unsplash.com/photo-1659353885824-1199aeeebfc6" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{doctor.name}</h3>
                  <p className="text-sm">{doctor.specialty}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-text-secondary">{doctor.crm}</p>
                <p className="mt-2 text-sm text-text-secondary">
                  Com vasta experiência em sua área, {doctor.name.split(' ')[0]} se dedica a oferecer um atendimento completo e humanizado.
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;