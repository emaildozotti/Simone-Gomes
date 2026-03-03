/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import {
  CheckCircle2,
  ChevronDown,
  Play,
  Calendar,
  Target,
  ShieldCheck,
  Clock,
  Globe,
  MessageSquare,
  ArrowRight,
  XCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-moss/10 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-moss group-hover:text-gold transition-colors">{question}</span>
        <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-gold' : 'text-moss/40'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-4 text-moss/70 leading-relaxed pb-4">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const scrollToCTA = () => {
    const phone = '553199266092';
    const message = encodeURIComponent('Olá Simone, vim através do seu site e gostaria de agendar uma sessão.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <div className="relative overflow-x-hidden selection:bg-gold/20 selection:text-gold">

      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden bg-moss">
        {/* Left Column: Text Content */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-20 md:py-0 md:px-12 lg:px-24 xl:px-32 z-10">
          <div className="max-w-xl w-full">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block text-gold uppercase tracking-[0.4em] text-[10px] md:text-xs font-bold mb-8"
            >
              Abordagem Terapêutica Direta
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white leading-[1.1] mb-10"
            >
              A verdade que liberta do peso de ter que ser forte o tempo todo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-lg"
            >
              Chega de sustentar o mundo nas costas enquanto você desmorona em silêncio. Uma abordagem terapêutica direta, sem rodeios, para quem precisa de resultados reais e não apenas de desabafos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-start gap-5"
            >
              <button
                onClick={scrollToCTA}
                className="bg-gold hover:bg-gold-dark text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-base md:text-lg font-bold tracking-wider transition-all hover:shadow-[0_20px_40px_rgba(197,160,89,0.25)] active:scale-[0.98] group flex items-center gap-4 uppercase"
              >
                [ QUERO AGENDAR MINHA SESSÃO DE DIAGNÓSTICO ]
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-white/40 text-xs tracking-widest uppercase font-medium">
                Agenda restrita a candidatas comprometidas
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Column: Imagery */}
        <div className="w-full md:w-1/2 h-[70vh] md:h-screen relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full"
          >
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1920&auto=format&fit=crop"
              alt="Simone Gomes"
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Gradient overlays for polish */}
            <div className="absolute inset-0 bg-gradient-to-r from-moss via-transparent to-transparent md:block hidden opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-moss via-transparent to-transparent md:hidden block opacity-60"></div>
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10"></div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-12 hidden md:block">
          <div className="h-24 w-px bg-gold/30"></div>
        </div>
      </section>

      {/* 2. Pain Points Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-moss mb-12 leading-tight">
                Você se reconhece neste cenário?
              </h2>
              <div className="space-y-10">
                {[
                  { icon: <XCircle className="text-gold shrink-0 w-6 h-6" />, title: "A Solidão do Pilar", desc: "Todo mundo te procura para resolver problemas, mas quando você precisa, sente que não tem a quem recorrer." },
                  { icon: <XCircle className="text-gold shrink-0 w-6 h-6" />, title: "O Cansaço da Máscara", desc: "Você sorri e diz \"eu dou conta\" em público, mas chora escondida no banheiro ou no carro para não \"preocupar\" ninguém." },
                  { icon: <XCircle className="text-gold shrink-0 w-6 h-6" />, title: "A Exaustão Emocional", desc: "Você sente que sua bateria viciou. Mesmo dormindo, você acorda cansada, carregando uma carga mental que não deveria ser só sua." },
                  { icon: <XCircle className="text-gold shrink-0 w-6 h-6" />, title: "A Dificuldade de Receber", desc: "Você é ótima em dar suporte, mas péssima em pedir ajuda, pois aprendeu que \"incomodar\" é errado." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="mt-1 transition-transform group-hover:scale-110 duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-moss mb-2">{item.title}</h4>
                      <p className="text-moss/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-16 p-8 bg-beige rounded-2xl border-l-4 border-gold shadow-sm">
                <p className="text-moss italic text-xl leading-relaxed">
                  "Se você marcou 'sim' em pelo menos dois pontos, você não precisa de mais 'força'. Você precisa de estratégia para soltar o peso."
                </p>
              </div>
            </div>
            <div data-aos="fade-left" className="relative">
              <div className="absolute -inset-4 border border-gold/10 rounded-[3rem] -z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop"
                alt="Escuta Ativa"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-10 -left-10 bg-moss p-10 rounded-3xl hidden lg:block shadow-2xl max-w-xs">
                <p className="text-white font-serif text-2xl leading-snug">Escuta Ativa e Estratégica para Mulheres de Alto Impacto</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Video Section */}
      <section className="py-24 bg-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="container mx-auto px-6 max-w-5xl text-center relative z-10">
          <h2 data-aos="fade-up" className="text-3xl md:text-4xl lg:text-5xl text-moss mb-16 leading-tight">
            Entenda como funciona o processo de libertação emocional
          </h2>
          <div data-aos="zoom-in" className="relative aspect-video bg-moss rounded-[2rem] overflow-hidden shadow-2xl group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                <Play fill="currentColor" size={36} className="ml-1" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 text-white text-left">
              <p className="text-xs uppercase tracking-[0.4em] opacity-60 mb-2">Assista agora</p>
              <p className="text-2xl font-serif">O Método Musculatura Emocional</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Methodology Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">O Diferencial</span>
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl lg:text-6xl text-moss mb-6">O que é o "Confronto Colaborativo"?</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="text-2xl text-gold italic font-serif">Não é sobre passar a mão na cabeça. É sobre te levantar.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: <Target className="w-12 h-12 text-gold mb-8" />,
                title: "A Verdade como Ferramenta",
                desc: "Ao contrário de terapias que ficam anos apenas ouvindo suas queixas, eu intervenho. Eu serei o espelho que reflete o que você está evitando ver, para que você possa finalmente mudar."
              },
              {
                icon: <ShieldCheck className="w-12 h-12 text-gold mb-8" />,
                title: "Racionalidade & Autonomia",
                desc: "Vamos sair do drama emocional e ir para a análise dos fatos. Meu objetivo não é que você dependa de mim, mas que crie a \"musculatura emocional\" para caminhar com as próprias pernas."
              },
              {
                icon: <MessageSquare className="w-12 h-12 text-gold mb-8" />,
                title: "Acolhimento sem Paternalismo",
                desc: "Eu entendo sua dor porque a respeito, não porque tenho pena de você. Aqui, seu choro é validado, mas logo em seguida, perguntaremos: \"E o que faremos com isso agora?\""
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 150}
                className="p-12 bg-beige rounded-[2.5rem] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border border-transparent hover:border-gold/10"
              >
                <div className="transition-transform group-hover:scale-110 duration-500">
                  {pillar.icon}
                </div>
                <h3 className="text-2xl mb-6 font-serif">{pillar.title}</h3>
                <p className="text-moss/70 leading-relaxed text-lg">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. About the Expert Section */}
      <section className="py-32 bg-moss text-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-6 border border-gold/20 rounded-[3rem] transition-all group-hover:inset-0 duration-700"></div>
              <img
                src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop"
                alt="Especialista"
                className="rounded-[2rem] relative z-10 grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div data-aos="fade-left">
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-6 block">Autoridade & História</span>
              <h2 className="text-4xl md:text-5xl font-serif mb-10 leading-tight">Olá, eu sou a Simone Gomes.</h2>
              <div className="space-y-8 text-white/70 leading-relaxed text-lg font-light">
                <p>Eu não aprendi sobre resiliência apenas nos livros de psicologia. Eu fui moldada por ela.</p>
                <p>Minha história é marcada pela superação real da rejeição e do isolamento. Eu sei o que é ter que se reconstruir sozinha quando o mundo parece virar as costas.</p>
                <p>Essa vivência me deu o que chamo de <span className="text-white font-medium">"Musculatura Emocional"</span>.</p>
                <p>Hoje, minha missão é garantir que ninguém precise enfrentar seus abismos sem uma mão estendida. Eu sou a profissional que terá a coragem de te dizer exatamente o que ninguém mais teve, para que você possa, enfim, se libertar da ilusão da autossuficiência.</p>
              </div>
              <div className="mt-12 pt-12 border-t border-white/10">
                <p className="text-gold text-2xl md:text-3xl font-serif italic leading-relaxed">
                  "Minha força não vem da negação da dor, mas da decisão de não ser refém dela."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. How it Works Section */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-24">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Passo a Passo</span>
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl text-moss font-serif">Seu caminho de volta para si mesma</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16 relative">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gold/10 -z-0"></div>

            {[
              { icon: <Calendar className="w-10 h-10" />, title: "1. Agendamento", desc: "Como você já preencheu seu formulário, o próximo passo é escolher o melhor dia e horário para iniciarmos." },
              { icon: <Globe className="w-10 h-10" />, title: "2. Primeira Conversa", desc: "Um encontro online de alto nível para mapearmos as raízes da sua sobrecarga e desenharmos seu plano de ação." },
              { icon: <Clock className="w-10 h-10" />, title: "3. Início do Tratamento", desc: "Sessões focadas em construir sua musculatura emocional e resgatar sua autonomia e leveza." }
            ].map((step, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 200} className="relative z-10 text-center flex flex-col items-center group">
                <div className="w-24 h-24 bg-beige rounded-full flex items-center justify-center text-gold mb-8 border border-gold/10 shadow-xl transition-all duration-500 group-hover:bg-gold group-hover:text-white group-hover:scale-110">
                  {step.icon}
                </div>
                <h4 className="text-2xl font-serif mb-6 text-moss">{step.title}</h4>
                <p className="text-moss/60 leading-relaxed text-lg">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <button
              onClick={scrollToCTA}
              className="bg-moss hover:bg-moss/90 text-white px-12 py-6 rounded-full text-lg font-semibold transition-all hover:shadow-2xl active:scale-95 flex items-center gap-3 mx-auto"
            >
              [ AGENDAR MINHA SESSÃO AGORA ]
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <section className="py-32 bg-beige relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { text: "Eu achava que terapia era para gente fraca. Com ela, entendi que fraco é quem foge da verdade. Hoje me sinto leve pela primeira vez em 10 anos.", author: "Mariana, Empresária" },
              { text: "Ela falou o que meu marido e meus amigos nunca tiveram coragem. Doeu na hora, mas foi o que salvou meu casamento e minha sanidade.", author: "Cláudia, Médica" },
              { text: "O confronto colaborativo mudou minha vida. Parei de ser a 'mãezona' de todo mundo e voltei a ser protagonista da minha história.", author: "Patrícia, Advogada" }
            ].map((test, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
                className="p-12 bg-white rounded-[2.5rem] shadow-xl border border-moss/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => <CheckCircle2 key={i} className="w-5 h-5 text-gold fill-gold" />)}
                  </div>
                  <p className="text-xl text-moss/80 italic mb-10 leading-relaxed font-serif">"{test.text}"</p>
                </div>
                <p className="font-bold text-moss tracking-wider uppercase text-sm">— {test.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-20">
            <span className="text-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4 block">Dúvidas</span>
            <h2 data-aos="fade-up" className="text-4xl md:text-5xl text-moss font-serif">Perguntas Frequentes</h2>
          </div>
          <div data-aos="fade-up" className="space-y-4">
            <FAQItem
              question="O atendimento é online? Funciona mesmo?"
              answer="Sim. A distância física garante a sua privacidade e o conforto do seu ambiente seguro. A conexão humana e técnica independe da tela."
            />
            <FAQItem
              question="Eu não tenho muito tempo..."
              answer="Exatamente por isso você precisa de terapia. Quem não tem tempo para cuidar da mente, eventualmente terá que arrumar tempo para cuidar da doença."
            />
            <FAQItem
              question="Tenho medo de ser julgada..."
              answer="Meu consultório é uma zona livre de julgamento moral. Aqui tratamos fatos e emoções com ética absoluta. Sua verdade está segura comigo."
            />
            <FAQItem
              question="Aceita convênio?"
              answer="Trabalho exclusivamente com atendimentos particulares para garantir a liberdade e a profundidade que o método exige, sem as limitações dos planos."
            />
          </div>
        </div>
      </section>

      {/* 9. Final Footer Section */}
      <footer className="py-32 bg-moss text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <h2 data-aos="fade-up" className="text-4xl md:text-6xl font-serif mb-10 leading-tight">A única coisa que você vai perder aqui é o peso que não é seu.</h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-xl md:text-2xl text-white/60 mb-16 font-light leading-relaxed">
            As vagas para acompanhamento individual são limitadas para manter a qualidade da entrega. Se você sente que chegou a hora de se priorizar, não deixe para depois.
          </p>
          <button
            onClick={scrollToCTA}
            data-aos="zoom-in"
            className="bg-gold hover:bg-gold-dark text-white px-12 py-7 rounded-full text-xl font-semibold transition-all hover:shadow-[0_20px_50px_rgba(197,160,89,0.3)] active:scale-95 mb-24 group flex items-center gap-4 mx-auto"
          >
            [ AGENDAR SESSÃO AGORA ]
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-white/30 text-sm tracking-widest uppercase">
            <p>© {new Date().getFullYear()} Musculatura Emocional. Todos os direitos reservados.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-gold transition-colors">Termos</a>
              <a href="#" className="hover:text-gold transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
