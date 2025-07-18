import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Heart, Baby, Brain, Bone } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const specialties = [
  { icon: <Stethoscope />, name: 'Clínica Geral' },
  { icon: <Heart />, name: 'Cardiologia' },
  { icon: <Baby />, name: 'Pediatria' },
  { icon: <Brain />, name: 'Neurologia' },
  { icon: <Bone />, name: 'Ortopedia' },
];

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: (i) => ({
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }
  })
};

const Specialties = () => {
  const { toast } = useToast();

  const handleScheduleClick = (specialty) => {
    toast({
      title: "Agendamento em Breve!",
      description: `🚧 O agendamento para ${specialty} ainda não está disponível online. Você pode solicitar no próximo prompt! 🚀`,
    });
  };

  return (
    <section id="specialties" className="section">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark">Nossas <span className="highlight">Especialidades</span></h2>
          <p>Oferecemos uma ampla gama de especialidades para cuidar de você de forma completa.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {specialties.map((specialty, i) => (
            <motion.div
              key={specialty.name}
              className="group text-center"
              custom={i}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={cardVariants}
            >
              <div className="flex justify-center items-center w-24 h-24 mx-auto bg-secondary-blue rounded-full transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <div className="text-primary transition-colors duration-300 group-hover:text-white scale-150">
                  {specialty.icon}
                </div>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-text-primary-dark">{specialty.name}</h3>
              <button onClick={() => handleScheduleClick(specialty.name)} className="mt-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Agendar
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;