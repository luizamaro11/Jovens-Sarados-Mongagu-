import { EventData, TestimonialData } from './types';

export const EVENTS: EventData[] = [
    {
        id: 1,
        title: "Maranathá 2024",
        date: "15 e 16 de Junho",
        location: "Ginásio Poliesportivo - Centro",
        image: "https://picsum.photos/seed/worship/600/400",
        description: "Um fim de semana para renovar suas forças e reencontrar o sentido. Música, oração e uma galera que te entende.",
        price: "R$ 30,00"
    },
    {
        id: 2,
        title: "Luau da Juventude",
        date: "05 de Julho - 20h",
        location: "Praça da Matriz",
        image: "https://picsum.photos/seed/campfire/600/400",
        description: "Vem curtir um som acústico, conversar e viver uma noite diferente sob as estrelas. Traga seus amigos!",
        price: "Gratuito"
    },
    {
        id: 3,
        title: "Retiro Metanoia",
        date: "2 a 4 de Agosto",
        location: "Sítio Monte Horebe",
        image: "https://picsum.photos/seed/friends/600/400",
        description: "Desconecte-se do barulho e conecte-se com o que realmente importa. Uma virada de chave na sua vida.",
        price: "R$ 150,00"
    }
];

export const TESTIMONIALS: TestimonialData[] = [
    {
        id: 1,
        name: "Gabriel Silva",
        role: "Participante há 1 ano",
        quote: "Eu achava que igreja era coisa chata. No Maranathá, descobri que ser santo sem deixar de ser jovem é a maior aventura que existe.",
        avatar: "https://picsum.photos/seed/gabriel/100/100"
    },
    {
        id: 2,
        name: "Mariana Costa",
        role: "Serva do Grupo de Oração",
        quote: "Cheguei aqui quebrada, sem saber pra onde ir. Encontrei uma família que me acolheu sem julgar. Hoje sou outra pessoa.",
        avatar: "https://picsum.photos/seed/mariana/100/100"
    },
    {
        id: 3,
        name: "Lucas Pereira",
        role: "Músico",
        quote: "O JS me ensinou que minha arte pode curar. Tocar aqui não é show, é missão. A alegria dessa galera contagia!",
        avatar: "https://picsum.photos/seed/lucas/100/100"
    }
];