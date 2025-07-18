import React from 'react';
import { motion } from 'framer-motion';

const CtaSection = () => {
    const handleScheduleClick = () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section bg-primary">
            <motion.div 
                className="container text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white">Pronto para cuidar da sua saúde?</h2>
                <p className="text-primary-foreground/80 mt-4 mb-8 text-lg max-w-2xl mx-auto">Nossa equipe está pronta para te receber. Agende sua consulta hoje mesmo.</p>
                <button 
                    onClick={handleScheduleClick}
                    className="bg-white text-primary font-bold py-4 px-10 rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl"
                >
                    Agendar Consulta Agora
                </button>
            </motion.div>
        </section>
    );
};

export default CtaSection;