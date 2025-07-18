import React from 'react';
import { HeartPulse, Instagram, Facebook, Linkedin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Footer = () => {
    const { toast } = useToast();

    const handleSocialClick = (e) => {
        e.preventDefault();
        toast({
            title: "Em breve!",
            description: "🚧 Nossas redes sociais serão lançadas em breve. Fique de olho!",
        });
    };

    return (
        <footer className="bg-text-primary-dark text-white">
            <div className="container py-12">
                <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                            <HeartPulse className="text-primary" size={28} />
                            <span className="font-bold text-xl">Clínica Vida Plena</span>
                        </div>
                        <p className="text-gray-400">Cuidando da sua saúde com excelência e humanidade.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Links Rápidos</h4>
                        <ul className="space-y-2">
                            <li><a href="#about" className="text-gray-400 hover:text-white">Sobre Nós</a></li>
                            <li><a href="#specialties" className="text-gray-400 hover:text-white">Especialidades</a></li>
                            <li><a href="#doctors" className="text-gray-400 hover:text-white">Corpo Clínico</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Siga-nos</h4>
                        <div className="flex justify-center md:justify-start gap-4">
                            <a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-white"><Instagram /></a>
                            <a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-white"><Facebook /></a>
                            <a href="#" onClick={handleSocialClick} className="text-gray-400 hover:text-white"><Linkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Clínica Vida Plena. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;