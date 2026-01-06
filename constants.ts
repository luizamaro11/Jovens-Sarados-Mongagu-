import { EventData, TestimonialData } from './types';

// NOTA: Substitua estas URLs pelas fotos reais que você enviou
export const HERO_IMAGES = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
    "/images/slider4.jpg"
];

export const EVENTS: EventData[] = [
    {
        id: 1,
        title: "Maranathá 2026",
        date: "13 a 17 de Fevereiro",
        location: "Local: em breve",
        image: "https://picsum.photos/seed/worship/600/400",
        description: "Um carnaval diferente. Uma experiência profunda de oração, alegria e encontro com Deus.",
        price: "R$ 280,00"
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

export const PEDRINHAS = [
    { title: "Eucaristia", icon: "sun", desc: "O pão que nos sustenta e dá vida eterna." },
    { title: "Confissão", icon: "heart", desc: "O abraço de misericórdia que restaura nossa alma." },
    { title: "Bíblia", icon: "book", desc: "A bússola segura para nossos passos diários." },
    { title: "Rosário", icon: "circle", desc: "A escola de oração na companhia de Maria." },
    { title: "Jejum", icon: "ban", desc: "O treino espiritual que fortalece nossa vontade." }
];

export const TESOUROS = [
    {
        title: "Vida de Oração",
        icon: "prayer",
        desc: "A oração é o fundamento da nossa vida cristã, o diálogo íntimo com Deus que nos fortalece e orienta."
    },
    {
        title: "Acolhida",
        icon: "welcome",
        desc: "Recebemos a todos de braços abertos, criando um ambiente de amor e aceitação sem julgamentos."
    },
    {
        title: "Sadia Convivência",
        icon: "community",
        desc: "Promovemos relacionamentos saudáveis, baseados no respeito, na amizade verdadeira e no crescimento mútuo."
    },
    {
        title: "Viver Reconciliado",
        icon: "reconcile",
        desc: "Buscamos a paz e o perdão, vivendo em harmonia com Deus, conosco e com os irmãos."
    },
    {
        title: "Radicalidade do Evangelho",
        icon: "gospel",
        desc: "Vivemos o Evangelho de forma autêntica e corajosa, sendo testemunhas vivas do amor de Cristo."
    },
    {
        title: "Servir",
        icon: "serve",
        desc: "Colocamos nossas vidas a serviço dos outros, especialmente dos mais necessitados e vulneráveis."
    },
    {
        title: "Tau",
        icon: "tau",
        desc: "O tau é um sinal externo do nosso compromisso com Deus, que nos propõe a viver como Jesus: castos, pobres e obedientes."
    }
];