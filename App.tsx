import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/Button';
import { EventCard } from './components/EventCard';
import { LeadForm } from './components/LeadForm';
import { EVENTS, TESTIMONIALS } from './constants';
import { Flame, Quote, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-js-light">
      <Header />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/youthgroup/1920/1080" 
            alt="Jovens em missão" 
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay based on official palette */}
          <div className="absolute inset-0 bg-gradient-to-b from-js-sky/90 via-js-sky/70 to-js-mystery/90 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center pt-20">
          <div className="inline-block mb-6 px-4 py-1 border border-js-joy/50 rounded-full bg-js-sky/30 backdrop-blur-sm">
            <span className="text-js-joy font-bold uppercase tracking-widest text-xs">O Movimento que transforma vidas</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
            Jovem, eu te digo:<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-js-joy to-js-youth">
              LEVANTA-TE!
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Não fomos feitos para o chão. Existe um céu esperando por você. 
            Vem viver uma alegria que não passa.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button variant="primary" icon onClick={() => document.getElementById('events')?.scrollIntoView({behavior: 'smooth'})}>
              Ver Próximos Eventos
            </Button>
            <Button variant="outline">
              Conheça nossa missão
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* MANIFESTO / ABOUT */}
      <section id="manifesto" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-js-joy/20 rounded-full z-0" />
              <img 
                src="https://picsum.photos/seed/prayer/800/800" 
                alt="Jovem rezando" 
                className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-js-sky rounded-full z-0 opacity-10" />
            </div>
            
            <div>
              <div className="flex items-center mb-4 text-js-youth font-bold">
                <Flame className="w-5 h-5 mr-2" />
                <span>Nossa Identidade</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-js-sky mb-6">
                Mais que um grupo.<br/>Um estilo de vida.
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                A gente sabe que ser jovem hoje é um desafio. Muita pressão, muita dúvida, muita barulho. O Jovens Sarados nasceu pra ser o seu refúgio e sua rampa de lançamento.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nossa missão é simples: levar a força do Evangelho com a cara da juventude. Sem fingimento, sem máscaras. Apenas a verdade de quem encontrou um Amor maior.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-js-joy pl-4">
                  <h4 className="font-display font-bold text-xl text-js-mystery">Oração</h4>
                  <p className="text-sm text-gray-500">O combustível da alma.</p>
                </div>
                <div className="border-l-4 border-js-youth pl-4">
                  <h4 className="font-display font-bold text-xl text-js-mystery">Missão</h4>
                  <p className="text-sm text-gray-500">Sair de si e ir ao outro.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
      <section id="events" className="py-24 bg-js-light">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-display font-bold text-js-sky mb-4">
              Vem viver o <span className="text-js-youth">novo</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Nossos encontros são o lugar onde a mágica acontece. Escolha onde você quer começar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-js-mystery text-js-mystery hover:bg-js-mystery hover:text-white">
              Ver agenda completa
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 bg-js-sky relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-js-joy rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-js-youth rounded-full mix-blend-multiply filter blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white text-center mb-16">
            Histórias Reais de Transformação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => (
              <div key={testimonial.id} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <Quote className="w-8 h-8 text-js-joy mb-4 opacity-50" />
                <p className="text-gray-200 text-lg italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full border-2 border-js-joy mr-4"
                  />
                  <div>
                    <h5 className="text-white font-bold font-display">{testimonial.name}</h5>
                    <span className="text-js-joy text-sm">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAD CONVERSION SECTION */}
      <section id="join" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
                <LeadForm />
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;