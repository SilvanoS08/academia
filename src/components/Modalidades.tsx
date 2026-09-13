import React, { useState } from 'react';
import { Flame, Clock, Zap, Check, ArrowRight, X } from 'lucide-react';
import { MODALITIES } from '../data/gymData';
import { Modality } from '../types';

interface ModalidadesProps {
  onOpenBooking: (modalityName?: string) => void;
}

export const Modalidades: React.FC<ModalidadesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todas');
  const [activeModalModality, setActiveModalModality] = useState<Modality | null>(null);

  const categories = [
    { id: 'todas', label: 'Todas as Aulas' },
    { id: 'musculacao', label: 'Musculação' },
    { id: 'cardio', label: 'Cardio & Queima' },
    { id: 'lutas', label: 'Lutas & Marcial' },
    { id: 'coletivas', label: 'Dança & Coletivas' },
    { id: 'bem-estar', label: 'Yoga & Mobilidade' },
  ];

  const filteredModalities = selectedCategory === 'todas'
    ? MODALITIES
    : MODALITIES.filter(m => m.category === selectedCategory);

  const getIntensityBadgeColor = (intensity: string) => {
    switch (intensity) {
      case 'Muito Alta':
        return 'bg-red-500/10 text-red-400 border-red-500/30';
      case 'Alta':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Moderada':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
      default:
        return 'bg-sky-500/10 text-sky-400 border-sky-500/30';
    }
  };

  return (
    <section className="py-20 bg-zinc-950 relative" id="modalidades">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
              Grade de Modalidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Treinos variados para você nunca cair no platô.
            </h2>
            <p className="text-zinc-400 text-base">
              Da musculação clássica pesada aos ritmos contagiantes e artes marciais.
              Escolha a energia que combina com seu dia.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-500/20 font-bold'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Modalities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredModalities.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl bg-zinc-900/60 border border-zinc-800/90 overflow-hidden hover:border-zinc-700 transition-all duration-300 flex flex-col group shadow-lg"
            >
              {/* Card Image Header */}
              <div className="relative h-56 overflow-hidden bg-zinc-950">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

                {/* Intensity Tag */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full border font-bold ${getIntensityBadgeColor(item.intensity)} backdrop-blur-md`}>
                    Intensidade {item.intensity}
                  </span>
                </div>

                {/* Duration & Calories Chips */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-zinc-200">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800">
                    <Clock className="w-3.5 h-3.5 text-zinc-400" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 font-semibold text-lime-400">
                    <Flame className="w-3.5 h-3.5 text-red-400" />
                    {item.calories}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-xs font-semibold text-lime-400 uppercase tracking-wider">
                    {item.categoryLabel}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-2 font-['Outfit'] group-hover:text-lime-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* Key Benefits List */}
                <ul className="space-y-1.5 border-t border-zinc-800/80 pt-3 text-xs text-zinc-300">
                  {item.benefits.slice(0, 2).map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-lime-400 mt-0.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalModality(item)}
                    className="flex-1 py-2.5 rounded-xl border border-zinc-800 hover:border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-xs font-bold text-zinc-200 transition-colors cursor-pointer"
                  >
                    Ver Detalhes
                  </button>
                  <button
                    onClick={() => onOpenBooking(item.name)}
                    className="py-2.5 px-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
                    title={`Agendar aula experimental de ${item.name}`}
                  >
                    <span>Agendar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Detail for Selected Modality */}
      {activeModalModality && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-7 shadow-2xl overflow-hidden text-left">
            <button
              onClick={() => setActiveModalModality(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="relative h-44 rounded-2xl overflow-hidden">
                <img
                  src={activeModalModality.image}
                  alt={activeModalModality.name}
                  className="w-full h-full object-cover brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs font-bold text-lime-400 uppercase tracking-wider">{activeModalModality.categoryLabel}</span>
                  <h3 className="text-2xl font-black text-white font-['Outfit']">{activeModalModality.name}</h3>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeModalModality.description}
              </p>

              <div className="grid grid-cols-3 gap-2 py-3 border-y border-zinc-800 text-center">
                <div className="p-2 rounded-xl bg-zinc-950/60">
                  <p className="text-[11px] text-zinc-400">Duração</p>
                  <p className="text-sm font-bold text-white">{activeModalModality.duration}</p>
                </div>
                <div className="p-2 rounded-xl bg-zinc-950/60">
                  <p className="text-[11px] text-zinc-400">Intensidade</p>
                  <p className="text-sm font-bold text-lime-400">{activeModalModality.intensity}</p>
                </div>
                <div className="p-2 rounded-xl bg-zinc-950/60">
                  <p className="text-[11px] text-zinc-400">Queima Média</p>
                  <p className="text-sm font-bold text-white">{activeModalModality.calories}</p>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">Principais Benefícios:</h4>
                <ul className="space-y-1.5 text-xs text-zinc-300">
                  {activeModalModality.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-lime-400 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400">
                <strong className="text-zinc-200">Recomendado para: </strong> {activeModalModality.popularFor}
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => setActiveModalModality(null)}
                  className="w-1/3 py-3 rounded-xl border border-zinc-800 text-zinc-300 font-semibold text-sm hover:bg-zinc-800"
                >
                  Fechar
                </button>
                <button
                  onClick={() => {
                    const modName = activeModalModality.name;
                    setActiveModalModality(null);
                    onOpenBooking(modName);
                  }}
                  className="w-2/3 py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20"
                >
                  <span>Agendar Aula Grátis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
