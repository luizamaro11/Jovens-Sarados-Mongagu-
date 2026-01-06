import React from 'react';
import { Instagram, Facebook, Youtube, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-js-mystery text-white pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center space-x-2 mb-6">
                            <div className="w-10 h-10 bg-js-youth rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                                JS
                            </div>
                            <span className="font-display font-bold text-2xl tracking-tight">
                                JOVENS SARADOS
                            </span>
                        </div>
                        <p className="text-gray-400 max-w-sm text-lg leading-relaxed mb-6">
                            Um movimento de jovens para jovens. Acreditamos que é possível ser de Deus sem deixar de ser jovem. Vem com a gente nessa missão!
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-js-youth transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-js-sky transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-red-600 transition-colors">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-xl mb-6 text-js-joy">Links Rápidos</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li><a href="#manifesto" className="hover:text-white transition-colors">Quem somos</a></li>
                            <li><a href="#events" className="hover:text-white transition-colors">Próximos Eventos</a></li>
                            <li><a href="#join" className="hover:text-white transition-colors">Vem participar com a gente</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-display font-bold text-xl mb-6 text-js-joy">Contato</h4>
                        <ul className="space-y-4 text-gray-300">
                            <li>contato@jsmongagua.com.br</li>
                            <li>(13) 99157-0440</li>
                            <li>Mongagua, SP</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                    <p>&copy; 2026 Jovens Sarados Mongaguá. Todos os direitos reservados.</p>
                    <p className="flex items-center mt-4 md:mt-0">
                        Feito com <Heart className="w-4 h-4 text-js-youth mx-1 fill-current" /> para a evangelização
                    </p>
                </div>
            </div>
        </footer>
    );
};