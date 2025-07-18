import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const handleScheduleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-secondary-blue">
      <div className="absolute inset-0 opacity-20">
        <img  class="w-full h-full object-cover" alt="Fundo com formas geométricas azuis suaves" src="https://images.unsplash.com/photo-1502759596063-ece5f0e162c8" />
      </div>
      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary-dark leading-tight">
              Cuidando da sua <span className="text-primary">saúde</span> com excelência e humanidade
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-lg mx-auto md:mx-0">
              Na Clínica Vida Plena, unimos tecnologia de ponta e atendimento acolhedor para oferecer o melhor cuidado para você e sua família.
            </p>
            <div className="mt-8">
              <button onClick={handleScheduleClick} className="cta-button">
                Agende sua Consulta
              </button>
            </div>
          </motion.div>
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img  class="rounded-lg shadow-2xl" alt="Médica sorrindo em um ambiente de clínica moderno e acolhedor" src="https://images.unsplash.com/photo-1643297654416-05795d62e39c" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;