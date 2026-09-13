import React from 'react';
import { Award, CheckCircle2, Shield } from 'lucide-react';
import { COACHES } from '../data/gymData';

export const Treinadores: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-950" id="treinadores">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Corpo Técnico de Elite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Treinadores que corrigem cada repetição sua.
          </h2>
          <p className="text-zinc-400 text-base">
            Chega de ficar perdido sem saber se o exercício está certo. Nossa equipe é graduada,
            atenta e está no salão o tempo todo para orientar sua execução com precisão biomecânica.
          </p>
        </div>

        {/* Coaches Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COACHES.map((coach) => (
            <div
              key={coach.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/80 overflow-hidden hover:border-zinc-700 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo with Overlay */}
                <div className="relative h-64 overflow-hidden bg-zinc-950">
                  <img
                    src={coach.image}
                    alt={`Treinador ${coach.name}`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* CREF Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-[10px] font-mono font-bold text-zinc-300">
                      {coach.cref}
                    </span>
                  </div>

                  {/* Experience Tag */}
                  <div className="absolute bottom-3 right-3">
                    <span className="px-2.5 py-1 rounded-lg bg-lime-400/90 text-zinc-950 text-[10px] font-extrabold">
                      {coach.experience}
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-white font-['Outfit'] group-hover:text-lime-300 transition-colors">
                    {coach.name}
                  </h3>
                  <p className="text-xs font-semibold text-lime-400">
                    {coach.role}
                  </p>
                  <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-zinc-800">
                    {coach.bio}
                  </p>
                </div>
              </div>

              {/* Specialty Footer */}
              <div className="p-4 bg-zinc-950/60 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-400 shrink-0" />
                <span className="truncate">{coach.specialty}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Credential Guarantee Bar */}
        <div className="mt-12 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400 text-center">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-lime-400" />
            <span>Todos os profissionais registrados no CREF-SP</span>
          </div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <div>Certificação em Primeiros Socorros & DEA</div>
          <span className="hidden sm:inline text-zinc-600">•</span>
          <div>Treinamento contínuo em Biomecânica Funcional</div>
        </div>
      </div>
    </section>
  );
};
