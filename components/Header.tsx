import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Quem somos", href: "#manifesto" },
        { name: "Eventos", href: "#events" },
        { name: "Depoimentos", href: "#testimonials" },
    ];

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-js-sky/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
            }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center space-x-2 z-50">
                    <div className="w-10 h-10 bg-js-youth rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
                        JS
                    </div>
                    <span className={`font-display font-bold text-xl tracking-tight ${scrolled ? 'text-white' : 'text-white'}`}>
                        JOVENS SARADOS
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            className="text-white/90 hover:text-js-joy font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a 
                        href="#join"
                        className="px-5 py-2 bg-white text-js-sky rounded-full font-display font-bold hover:bg-js-joy hover:text-js-mystery transition-all shadow-md transform hover:scale-105"
                    >
                        Participe
                    </a>
                </nav>

                {/* Mobile Toggle */}
                <button 
                    className="md:hidden text-white z-50"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>

                {/* Mobile Nav Overlay */}
                <div className={`fixed inset-0 bg-js-sky z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-white text-2xl font-display font-bold hover:text-js-joy"
                        >
                            {link.name}
                        </a>
                    ))}
                     <a 
                        href="#join"
                        onClick={() => setMobileOpen(false)}
                        className="px-8 py-3 bg-js-youth text-white rounded-full font-display font-bold text-xl"
                    >
                        Quero participar
                    </a>
                </div>
            </div>
        </header>
    );
};