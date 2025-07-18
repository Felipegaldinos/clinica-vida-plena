import React from 'react';
import { motion } from 'framer-motion';
import { Award, Building, Users } from 'lucide-react';

const features = [
  {
    icon: <Award size={32} className="text-primary" />,
    title: 'Missão e Valores',
    description: 'Nossa missão é promover saúde e bem-estar com ética, empatia e excelência, colocando o paciente sempre em primeiro lugar.'
  },
  {
    icon: <Building size={32} className="text-primary" />,
    title: 'Estrutura Moderna',
    description: 'Contamos com equipamentos de última geração e um ambiente projetado para o seu conforto e segurança.'
  },
  {
    icon: <Users size={32} className="text-primary" />,
    title: 'Atendimento Humanizado',
    description: 'Acreditamos em uma abordagem que valoriza a escuta atenta e o cuidado individualizado para cada paciente.'
  }
];

const About = () => {
  return (
    <section id="about" className="section bg-light-gray">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark mb-4">Sobre a Clínica Vida Plena</h2>
            <p className="text-text-secondary mb-6">
              Fundada com o propósito de oferecer um cuidado integral à saúde, a Clínica Vida Plena é um centro de referência em diversas especialidades médicas. Nossa história é marcada pelo compromisso com a inovação e a qualidade no atendimento.
            </p>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 bg-secondary-blue p-3 rounded-full">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary-dark">{feature.title}</h3>
                    <p className="text-text-secondary mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <img  class="rounded-lg shadow-lg w-full h-auto object-cover" alt="Recepção moderna e iluminada da clínica" src="https://images.unsplash.com/photo-1666056445151-57949bacdd60" />
            <img  class="rounded-lg shadow-lg w-full h-auto object-cover mt-8" alt="Consultório médico bem equipado e organizado" src="https://images.unsplash.com/photo-1565647946321-a146ac24a220" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;