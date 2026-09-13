import React from 'react';
import { Play, ArrowRight, ShieldCheck, Star, Zap, Flame, Award, Clock } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onOpenBooking: (topic?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToSection }) => {
  return (
    <section className="relative overflow-hidden pt-10 pb-20 lg:pt-16 lg:pb-28" id="inicio">
      {/* Dynamic Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none opacity-25">
        <div className="absolute top-10 left-10 w-96 h-96 bg-lime-500/20 rounded-full blur-3xl" />
        <div className="absolute top-32 right-10 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800/90 text-zinc-300 text-xs font-semibold shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
              </span>
              <span className="text-zinc-200">Matrículas abertas para novos alunos</span>
              <span className="text-zinc-500">•</span>
              <span className="text-lime-400 font-bold">Matrícula Isenta</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase font-['Outfit'] leading-[1.08]">
              Construa a sua <br />
              <span className="bg-gradient-to-r from-lime-400 via-emerald-300 to-lime-300 bg-clip-text text-transparent">
                melhor versão
              </span>{' '}
              com precisão biomecânica.
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-2xl font-normal">
              A academia em São Paulo que une maquinário importado de ponta, metodologia individualizada,
              recovery completo e um ambiente pensado para você nunca mais abandonar a rotina de treinos.
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm text-zinc-300 pt-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span>Bioimpedância 3D InBody Mensal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <span>Aberto de Segunda a Domingo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <span>Treinadores com CREF e Pós-graduação</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 shrink-0">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <span>Estacionamento Grátis c/ Manobrista</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <button
                onClick={() => onOpenBooking('Hero CTA')}
                id="hero-book-trial-cta"
                className="px-7 py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-base shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 transition-all duration-200 flex items-center justify-center gap-2.5 group cursor-pointer"
              >
                <span>Agendar Aula Grátis</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onScrollToSection('planos')}
                id="hero-view-plans-cta"
                className="px-6 py-4 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 font-bold text-base transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Conhecer Planos & Valores</span>
              </button>
            </div>

            {/* Social Proof Stats Bar */}
            <div className="pt-4 border-t border-zinc-900 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                    alt="Aluna FORGE"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                    alt="Aluno FORGE"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-zinc-950 object-cover"
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=120&auto=format&fit=crop"
                    alt="Aluna FORGE"
                  />
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-zinc-950 font-bold text-xs ring-2 ring-zinc-950">
                    +3k
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="font-bold text-zinc-200 ml-1">4.9 / 5.0</span>
                  </div>
                  <p className="text-xs text-zinc-400">Mais de 650 avaliações verificadas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Border Container */}
              <div className="relative rounded-3xl p-2 bg-gradient-to-b from-zinc-800 via-zinc-800/40 to-zinc-900/80 shadow-2xl">
                {/* Main Hero Gym Image */}
                <div className="relative h-[480px] sm:h-[520px] rounded-2xl overflow-hidden bg-zinc-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
                    alt="Salão de musculação e performance da FORGE Academia"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />

                  {/* Floating Metric 1: Live Pulse */}
                  <div className="absolute top-4 left-4 p-3 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 border border-red-500/40 flex items-center justify-center text-red-400">
                      <Flame className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Gasto Médio</p>
                      <p className="text-base font-extrabold text-white">650 kcal / aula</p>
                    </div>
                  </div>

                  {/* Floating Metric 2: Technology Badge */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-zinc-950/85 backdrop-blur-md border border-zinc-800 shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-200">100% Climatizado</span>
                  </div>

                  {/* Bottom Card Inside Image: Schedule / Quick Action */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-zinc-950/90 backdrop-blur-md border border-zinc-800">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">Unidade Paulista</span>
                      <span className="text-xs text-zinc-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-500" /> Aberto até 23h30
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-white">
                      1.800m² com pesos livres, esteiras curvas e estúdio de bike.
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
                      <span>Próxima aula: <strong className="text-zinc-200">Spinning 19h</strong></span>
                      <button
                        onClick={() => onOpenBooking('Aula de Spinning')}
                        className="text-lime-400 hover:text-lime-300 font-bold underline cursor-pointer"
                      >
                        Garantir vaga
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Numbers & Stats Grid Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6" id="stats-banner">
          {GYM_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/70 hover:border-zinc-700 transition-all text-center group"
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-['Outfit'] group-hover:text-lime-400 transition-colors">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-zinc-400 font-medium mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
