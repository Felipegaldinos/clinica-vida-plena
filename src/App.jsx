import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Specialties from '@/components/Specialties';
import Doctors from '@/components/Doctors';
import Insurance from '@/components/Insurance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Clínica Vida Plena - Cuidando da sua saúde com excelência e humanidade</title>
        <meta
          name="description"
          content="A Clínica Vida Plena oferece atendimento médico de excelência com uma equipe qualificada e estrutura moderna. Agende sua consulta e cuide da sua saúde conosco."
        />
      </Helmet>
      <div className="bg-background text-text-primary font-sans">
        <Header />
        <main>
          <Hero />
          <About />
          <Specialties />
          <Doctors />
          <Insurance />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;