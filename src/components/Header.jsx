import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, Menu, X } from 'lucide-react';

const navLinks = [
  { title: 'Home', id: 'hero' },
  { title: 'Sobre', id: 'about' },
  { title: 'Especialidades', id: 'specialties' },
  { title: 'Médicos', id: 'doctors' },
  { title: 'Convênios', id: 'insurance' },
  { title: 'Contato', id: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScheduleClick = () => {
    setIsMenuOpen(false);
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container py-4 flex justify-between items-center">
        <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="flex items-center gap-2 text-2xl font-bold text-primary-dark">
          <HeartPulse className="text-primary" size={28} />
          Vida Plena
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="font-semibold text-text-primary-dark hover:text-primary transition-colors duration-300">
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
            <button onClick={handleScheduleClick} className="cta-button">
                Agende sua Consulta
            </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary-dark">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col items-center p-4 gap-4">
            {navLinks.map(link => (
              <a key={link.id} href={`#${link.id}`} onClick={(e) => handleNavClick(e, link.id)} className="font-semibold text-text-primary-dark hover:text-primary transition-colors duration-300 w-full text-center py-2">
                {link.title}
              </a>
            ))}
            <button onClick={handleScheduleClick} className="cta-button w-full mt-2">
                Agende sua Consulta
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;