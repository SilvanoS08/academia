import React from 'react';
import { Dumbbell, Activity, Smartphone, Sparkles, Car, Utensils, CheckCircle2, ArrowRight } from 'lucide-react';
import { DIFFERENTIALS } from '../data/gymData';

interface DiferenciaisProps {
  onOpenBooking: (topic?: string) => void;
}

export const Diferenciais: React.FC<DiferenciaisProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dumbbell':
        return <Dumbbell className="w-6 h-6 text-lime-400" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-emerald-400" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 text-sky-400" />;
      case 'sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'car':
        return <Car className="w-6 h-6 text-violet-400" />;
      case 'utensils':
        return <Utensils className="w-6 h-6 text-rose-400" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-lime-400" />;
    }
  };

  return (
    <section className="py-20 bg-zinc-950/70 border-t border-b border-zinc-900" id="diferenciais">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
            A Experiência FORGE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Não é só puxar peso. É evolução estruturada com ciência.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Combinamos engenharia biomecânica, dados fisiológicos precisos e recuperação ativa
            para que cada minuto dentro da academia valha o dobro.
          </p>
        </div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((diff) => (
            <div
              key={diff.id}
              className="p-6 sm:p-7 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-xl hover:shadow-black/50"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-zinc-800/90 border border-zinc-700/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    {getIcon(diff.icon)}
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700/50">
                    {diff.highlight}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 font-['Outfit'] group-hover:text-lime-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800/60 flex items-center justify-between text-xs font-semibold text-zinc-400 group-hover:text-lime-400 transition-colors">
                <span>Incluso na experiência</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-850 to-zinc-900 border border-zinc-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-['Outfit']">
              Quer sentir essa diferença na prática antes de decidir?
            </h4>
            <p className="text-sm text-zinc-400">
              Agende 1 treino experimental com acesso a todas as salas e acompanhamento do professor. Sem pegadinhas.
            </p>
          </div>
          <button
            onClick={() => onOpenBooking('Diferenciais Banner')}
            className="px-6 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-sm shrink-0 shadow-md shadow-lime-500/20 hover:shadow-lime-500/30 transition-all cursor-pointer"
          >
            Quero Minha Aula Cortesia
          </button>
        </div>
      </div>
    </section>
  );
};
