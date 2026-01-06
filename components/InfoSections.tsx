import React from 'react';
import {
    BookOpen,
    HeartHandshake,
    CircleDashed,
    Ban,
    Sun,
    Star,
    MessageCircleHeart,
    Users,
    Handshake,
    Flame,
    HelpingHand,
    Cross
} from 'lucide-react';
import { PEDRINHAS, TESOUROS } from '../constants';

// --- 5 PEDRINHAS COMPONENT ---
export const FiveStonesSection: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'sun': return <Sun className="w-8 h-8" />;
            case 'heart': return <HeartHandshake className="w-8 h-8" />;
            case 'book': return <BookOpen className="w-8 h-8" />;
            case 'circle': return <CircleDashed className="w-8 h-8" />;
            case 'ban': return <Ban className="w-8 h-8" />;
            default: return <Star className="w-8 h-8" />;
        }
    };

    return (
        <section id="five-stones" className="py-20 bg-js-sky text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-js-joy font-bold uppercase tracking-widest text-sm mb-2 block">Nossas Armas Espirituais</span>
                    <h2 className="text-4xl font-display font-bold mb-6">As 5 Pedrinhas</h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                        Assim como Davi venceu Golias com 5 pedras, nós vencemos os gigantes da vida com estas armas espirituais.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {PEDRINHAS.map((item, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-js-joy group-hover:text-js-mystery transition-all duration-300 shadow-lg border border-white/20">
                                {getIcon(item.icon)}
                            </div>
                            <h3 className="text-xl font-display font-bold mb-2 text-js-joy group-hover:text-white transition-colors">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- 7 TESOUROS COMPONENT ---
export const SevenTreasuresSection: React.FC = () => {
    const getTreasureIcon = (iconName: string, className: string) => {
        switch (iconName) {
            case 'prayer': return <MessageCircleHeart className={className} />;
            case 'welcome': return <HeartHandshake className={className} />;
            case 'community': return <Users className={className} />;
            case 'reconcile': return <Handshake className={className} />;
            case 'gospel': return <Flame className={className} />;
            case 'serve': return <HelpingHand className={className} />;
            case 'tau': return <Cross className={className} />;
            default: return <Star className={className} />;
        }
    };

    return (
        <section id="seven-treasures" className="py-24 bg-js-light">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-js-youth font-bold uppercase tracking-widest text-sm mb-2 block">Nosso Jeito de Ser</span>
                    <h2 className="text-4xl font-display font-bold text-js-sky mb-6">Os 7 Tesouros</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                        Valores inegociáveis que carregamos em nosso coração e que moldam quem somos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {TESOUROS.map((item, idx) => (
                        <div key={idx} className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border-b-4 ${idx % 2 === 0 ? 'border-js-youth' : 'border-js-joy'} group`}>
                            <div className="mb-4">
                                {getTreasureIcon(
                                    item.icon || 'star',
                                    `w-8 h-8 ${idx % 2 === 0 ? 'text-js-youth' : 'text-js-joy'} group-hover:scale-110 transition-transform`
                                )}
                            </div>
                            <h3 className="text-xl font-display font-bold text-js-mystery mb-3">{item.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                    {/* Empty div for layout balance - visual filler since 7 items leave a gap in a 4-col grid */}
                    <div className="hidden lg:flex items-center justify-center bg-js-mystery text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                        <div className="relative z-10 text-center">
                            <h3 className="text-2xl font-display font-bold mb-2">E você?</h3>
                            <p className="text-sm text-gray-400">Qual tesouro falta encontrar?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- OUR HISTORY COMPONENT ---
export const HistorySection: React.FC = () => {
    return (
        <section id="history" className="py-24 bg-white relative">
            {/* Decorative Background Element */}
            <div className="absolute right-0 top-1/4 w-64 h-64 bg-js-joy/10 rounded-l-full z-0" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-js-youth rounded-full mix-blend-multiply opacity-20 z-0"></div>
                            <img
                                src="/images/history.jpg"
                                alt="Grupo reunido no início"
                                className="rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl shadow-2xl relative z-10 w-full object-cover h-[500px]"
                            />
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-js-sky rounded-full mix-blend-multiply opacity-20 z-0"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2">
                        <div className="flex items-center mb-6">
                            <div className="h-1 w-12 bg-js-youth mr-4"></div>
                            <span className="text-js-mystery font-bold uppercase tracking-widest text-sm">Desde o início</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-js-sky mb-8 leading-tight">
                            Nossa História:<br />
                            <span className="text-js-youth">Um chamado de amor.</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Tudo começou com uma inquietude. Olhávamos para o lado e víamos tantos jovens perdidos, buscando sentido em lugares que só ofereciam vazio. Deus colocou em nosso coração o desejo de fazer algo diferente.
                            </p>
                            <p>
                                Nossa missão não nasceu pronta em um escritório. Ela nasceu de joelhos no chão, em noites de vigília e em dias de muita entrega. Somos fruto da ousadia de acreditar que o jovem pode sim ser santo!
                            </p>
                            <p>
                                Hoje, nossa missão continua a mesma: resgatar aqueles que o mundo esqueceu e apresentar a eles um Amor que não passa. Cada rosto que chega aqui não é um número, é uma história sagrada que Deus nos confia.
                            </p>
                        </div>

                        <div className="mt-10 p-6 bg-js-light border-l-4 border-js-sky rounded-r-xl">
                            <p className="italic text-js-mystery font-medium">
                                "Não tenhas medo, eu estou contigo." - Essa é a promessa que nos sustenta desde o primeiro dia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};