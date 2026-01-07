import React, { useState } from 'react';
import { Button } from './Button';
import { LeadFormData } from '../types';
import { CheckCircle2, Send } from 'lucide-react';

export const LeadForm: React.FC = () => {
    const [formData, setFormData] = useState<LeadFormData>({
        name: '',
        city: '',
        age: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // WhatsApp redirection logic
        const message = `Olá! Me chamo ${formData.name}, tenho ${formData.age} anos, sou de ${formData.city}. Gostaria de participar do Jovens Sarados!`;
        const whatsappUrl = `https://wa.me/5513991570440?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');

        // Simulate API call for UI feedback
        setTimeout(() => {
            setStatus('success');
            console.log("Lead Capturado e redirecionado:", formData);
        }, 1500);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    if (status === 'success') {
        return (
            <div className="bg-js-sky rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl animate-in fade-in zoom-in duration-500">
                <div className="flex justify-center mb-6">
                    <CheckCircle2 className="w-20 h-20 text-js-joy" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4">Tudo certo, {formData.name.split(' ')[0]}!</h3>
                <p className="text-lg text-gray-200 mb-8 max-w-md mx-auto">
                    Já te cadastramos na nossa lista. Fique de olho no seu WhatsApp, vamos te chamar em breve para contar as novidades!
                </p>
                <Button variant="secondary" onClick={() => setStatus('idle')}>
                    Cadastrar amigo
                </Button>
            </div>
        );
    }

    return (
        <div className="bg-js-sky rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-5/12 bg-js-youth p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 relative z-10">
                    Vem fazer parte!
                </h3>
                <p className="text-white/90 font-medium relative z-10 mb-6">
                    Não perca nenhum evento. Entre para nossa lista VIP e receba convites, reflexões e novidades direto no seu celular.
                </p>
                <div className="relative z-10 hidden md:block">
                    <div className="flex items-center text-white/80 text-sm mb-2">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Conteúdo exclusivo
                    </div>
                    <div className="flex items-center text-white/80 text-sm mb-2">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Prioridade na inscrição
                    </div>
                    <div className="flex items-center text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Comunidade ativa
                    </div>
                </div>
            </div>

            <div className="md:w-7/12 p-8 md:p-12 bg-white">
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-js-mystery mb-2">Como você se chama?</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Seu nome completo"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-js-sky focus:ring-2 focus:ring-js-sky/20 transition-all outline-none"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        <div>
                            <label htmlFor="age" className="block text-sm font-bold text-js-mystery mb-2">Idade</label>
                            <input
                                type="number"
                                id="age"
                                name="age"
                                required
                                placeholder="Sua idade"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-js-sky focus:ring-2 focus:ring-js-sky/20 transition-all outline-none"
                                value={formData.age}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label htmlFor="city" className="block text-sm font-bold text-js-mystery mb-2">Cidade</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                required
                                placeholder="Onde você mora?"
                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-js-sky focus:ring-2 focus:ring-js-sky/20 transition-all outline-none"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="pt-2">
                        <Button
                            type="submit"
                            fullWidth
                            variant="primary"
                            disabled={status === 'submitting'}
                            className="disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {status === 'submitting' ? (
                                <span className="flex items-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Enviando...
                                </span>
                            ) : (
                                <span className="flex items-center">
                                    Quero participar <Send className="ml-2 w-4 h-4" />
                                </span>
                            )}
                        </Button>
                    </div>
                    <p className="text-xs text-gray-400 text-center mt-4">
                        Nós respeitamos sua privacidade. Nada de spam, só benção.
                    </p>
                </form>
            </div>
        </div>
    );
};