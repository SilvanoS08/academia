import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/gymData';

export const Depoimentos: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950/60 border-t border-b border-zinc-900" id="depoimentos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
            Histórias de Superação
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Quem treina na FORGE não troca.
          </h2>
          <p className="text-zinc-400 text-base">
            Veja como alunos reais alcançaram saúde, autoestima e força sem dietas malucas nem treinos desmotivantes.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="p-6 sm:p-7 rounded-3xl bg-zinc-900/60 border border-zinc-800 flex flex-col justify-between space-y-6 relative hover:border-zinc-700 transition-all"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-700" />
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.achievement}</span>
                </div>

                {/* Quote Body */}
                <p className="text-sm text-zinc-300 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Student Info Footer */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center gap-3.5">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-zinc-800"
                />
                <div>
                  <h3 className="text-sm font-bold text-white font-['Outfit']">{t.name}</h3>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                  <p className="text-[11px] text-zinc-500">{t.monthsAtGym} de FORGE</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
