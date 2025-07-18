import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  { name: 'Amil', alt: 'Logo da Amil' },
  { name: 'Bradesco Saúde', alt: 'Logo da Bradesco Saúde' },
  { name: 'SulAmérica', alt: 'Logo da SulAmérica' },
  { name: 'Unimed', alt: 'Logo da Unimed' },
  { name: 'Porto Seguro', alt: 'Logo da Porto Seguro Saúde' },
  { name: 'Allianz', alt: 'Logo da Allianz Saúde' },
];

const Insurance = () => {
  return (
    <section id="insurance" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark">Convênios <span className="highlight">Aceitos</span></h2>
          <p>Atendemos uma vasta rede de convênios para sua maior comodidade.</p>
        </div>
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
        >
          {logos.map((logo, i) => (
            <div key={i} className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img  class="h-12" alt={logo.alt} src="https://images.unsplash.com/photo-1485531865381-286666aa80a9" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Insurance;