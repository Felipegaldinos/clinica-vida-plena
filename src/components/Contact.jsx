import React from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');

    if (!name || !formData.get('email') || !formData.get('phone')) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome, e-mail e telefone.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Mensagem Enviada! ✅",
      description: `Obrigado, ${name}! Recebemos sua mensagem e entraremos em contato em breve.`,
    });

    e.target.reset();
  };

  return (
    <section id="contact" className="section bg-light-gray">
      <div className="container">
        <div className="section-title">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary-dark">Agende sua <span className="highlight">Consulta</span></h2>
          <p>Entre em contato conosco ou preencha o formulário para agendar sua consulta.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-text-primary-dark mb-6">Informações de Contato</h3>
            <div className="space-y-4 text-text-secondary">
              <div className="flex items-center gap-4"><MapPin className="text-primary" />Rua da Saúde, 123 - Centro, Cidade/UF</div>
              <div className="flex items-center gap-4"><Phone className="text-primary" />(11) 1234-5678</div>
              <div className="flex items-center gap-4"><Mail className="text-primary" />contato@vidaplena.com.br</div>
              <div className="flex items-center gap-4"><Clock className="text-primary" />Seg - Sex: 08:00 - 19:00</div>
            </div>
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975!2d-46.6333824!3d-23.5505199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAxLjkiUyA0NsKwMzgnMDAuMiJX!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Localização da Clínica Vida Plena"
              ></iframe>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleFormSubmit} className="bg-white p-8 rounded-lg shadow-lg space-y-4">
              <input type="text" name="name" placeholder="Nome completo" className="input-field" required />
              <input type="email" name="email" placeholder="Seu melhor e-mail" className="input-field" required />
              <input type="tel" name="phone" placeholder="Telefone (com DDD)" className="input-field" required />
              <select name="specialty" className="input-field">
                <option>Selecione a especialidade</option>
                <option>Clínica Geral</option>
                <option>Cardiologia</option>
                <option>Pediatria</option>
              </select>
              <textarea name="message" placeholder="Sua mensagem (opcional)" rows="4" className="input-field"></textarea>
              <button type="submit" className="cta-button w-full">Enviar Mensagem</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;