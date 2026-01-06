export interface EventData {
    id: number;
    title: string;
    date: string;
    location: string;
    image: string;
    description: string;
    price: string;
}

export interface TestimonialData {
    id: number;
    name: string;
    role: string;
    quote: string;
    avatar: string;
}

export interface LeadFormData {
    name: string;
    email: string;
    whatsapp: string;
    city: string;
}