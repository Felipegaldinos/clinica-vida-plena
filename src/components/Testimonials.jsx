import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    text: "Atendimento impecável desde a recepção até a consulta. O Dr. Carlos foi extremamente atencioso e esclareceu todas as minhas dúvidas. Recomendo!",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
  },
  {
    name: "João Pereira",
    text: "A estrutura da clínica é fantástica e a equipe é muito profissional. Me senti seguro e bem cuidado durante todo o processo. Nota 10!",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Fernanda Lima",
    text: "Levei meu filho para uma consulta com a Dra. Ana e fiquei encantada com o carinho e a paciência dela. A clínica é um exemplo de cuidado humanizado.",
    image: "https://images.unsplash.com/photo-1594744800847-f6083af37413"
  }
];

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([(page + newDirection + testimonials.length) % testimonials.length, newDirection]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [page]);


  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark">Depoimentos de <span className="highlight">Pacientes</span></h2>
          <p>A satisfação de quem confia em nosso trabalho é nossa maior recompensa.</p>
        </div>
        <div className="relative h-80 md:h-64 max-w-3xl mx-auto flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={page}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    className="absolute w-full h-full bg-white p-8 rounded-lg shadow-xl border border-border flex flex-col md:flex-row items-center gap-8"
                >
                    <img  alt={`Foto de ${testimonials[page].name}`} class="w-24 h-24 rounded-full object-cover flex-shrink-0 border-4 border-primary"  src="https://images.unsplash.com/photo-1688227940707-90e59bdb4747" />
                    <div className="text-center md:text-left">
                        <p className="text-text-secondary italic">"{testimonials[page].text}"</p>
                        <h4 className="mt-4 font-bold text-text-primary-dark text-lg">{testimonials[page].name}</h4>
                        <div className="flex justify-center md:justify-start mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-yellow-400 fill-current" />)}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <button onClick={() => paginate(-1)} className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:scale-110 transition-transform">
                <ChevronLeft size={24} />
            </button>
            <button onClick={() => paginate(1)} className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-primary text-white p-2 rounded-full z-10 hover:scale-110 transition-transform">
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;