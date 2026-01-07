import React from 'react';
import { Calendar, MapPin, Ticket } from 'lucide-react';
import { EventData } from '../types';
import { Button } from './Button';

interface EventCardProps {
    event: EventData;
    onClick?: () => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onClick }) => {
    return (
        <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full">
            <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-js-sky/20 group-hover:bg-transparent transition-colors z-10" />
                <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-js-joy text-js-mystery text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Inscrições Abertas
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl text-js-sky font-display font-bold mb-2 group-hover:text-js-youth transition-colors">
                    {event.title}
                </h3>

                <div className="space-y-3 mb-4 text-js-mystery/80 text-sm font-medium">
                    <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-js-youth mr-2" />
                        <span>{event.date}</span>
                    </div>
                    <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-js-youth mr-2" />
                        <span>{event.location}</span>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 flex-grow leading-relaxed">
                    {event.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="flex items-center text-js-sky font-bold">
                        <Ticket className="w-4 h-4 mr-2" />
                        {event.price}
                    </span>
                    <Button variant="outline" className="!px-4 !py-2 !text-sm" onClick={onClick}>
                        Quero ir
                    </Button>
                </div>
            </div>
        </div>
    );
};