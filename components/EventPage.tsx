import React, { useState } from 'react';
import { EventData } from '../types';
import { Calendar, MapPin, Clock, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from './Button';

interface EventPageProps {
    event: EventData;
    onBack: () => void;
}

export const EventPage: React.FC<EventPageProps> = ({ event, onBack }) => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-20">
            {/* Header */}
            <div className="bg-[#C45500] text-white py-12 px-6 shadow-lg">
                <div className="container mx-auto">
                    <button
                        onClick={onBack}
                        className="flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Voltar para eventos
                    </button>

                    <div className="flex items-center space-x-2 mb-2">
                        <span className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></span>
                        <span className="text-sm font-medium uppercase tracking-wide opacity-90">Inscrições Abertas</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 uppercase leading-tight">
                        {event.title}
                    </h1>

                    <p className="text-white/90 text-lg mb-8 max-w-2xl">
                        {event.description}
                    </p>

                    <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium text-white/90 border-t border-white/20 pt-6">
                        <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2" />
                            {event.date}
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-5 h-5 mr-2" />
                            {event.time || "A definir"}
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-2" />
                            {event.location}
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Column: Form */}
                    <div className="lg:col-span-2">
                        <EventRegistrationForm event={event} />
                    </div>

                    {/* Sidebar Column: Info & Help */}
                    <div className="space-y-6">
                        {/* Info Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold font-display text-gray-900 mb-6 pb-4 border-b border-gray-100">
                                Informações
                            </h3>
                            <div className="space-y-4">
                                <InfoRow label="Data" value={event.date} />
                                <InfoRow label="Horário" value={event.time || "A definir"} />
                                <InfoRow label="Local" value={event.location} />
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-gray-500">Preço</span>
                                    <span className="text-green-600 font-bold text-lg">{event.price}</span>
                                </div>
                            </div>
                        </div>

                        {/* Doubts Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-xl font-bold font-display text-gray-900 mb-4">
                                Dúvidas?
                            </h3>
                            <p className="text-gray-600 text-sm mb-6">
                                Entre em contato conosco para mais informações sobre este evento.
                            </p>
                            <a
                                href="https://wa.me/5513991570440"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-center px-4 py-3 bg-white border-2 border-green-500 text-green-600 font-bold rounded-xl hover:bg-green-50 transition-colors"
                            >
                                <MessageCircle className="w-5 h-5 mr-2" />
                                Entrar em Contato
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InfoRow = ({ label, value }: { label: string, value: string }) => (
    <div className="flex justify-between items-start">
        <span className="text-gray-500 min-w-[80px]">{label}:</span>
        <span className="text-gray-900 font-medium text-right">{value}</span>
    </div>
);

const EventRegistrationForm = ({ event }: { event: EventData }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeW81iP469wyU8fE8c21fRcenbsqyC-MKDKizSlhvrPnBg5Xw/viewform?embedded=true"
                width="100%"
                height="1600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
            >
                Carregando…
            </iframe>
        </div>
    );
}
