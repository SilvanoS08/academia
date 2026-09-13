import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, ChevronRight, Filter } from 'lucide-react';
import { CLASS_SCHEDULE } from '../data/gymData';

interface HorariosProps {
  onOpenBooking: (classDetails?: string) => void;
}

export const Horarios: React.FC<HorariosProps> = ({ onOpenBooking }) => {
  const [selectedDay, setSelectedDay] = useState<number>(1); // 1 = Monday
  const [selectedFilter, setSelectedFilter] = useState<string>('todas');

  const days = [
    { dayNumber: 1, label: 'Segunda', short: 'SEG' },
    { dayNumber: 2, label: 'Terça', short: 'TER' },
    { dayNumber: 3, label: 'Quarta', short: 'QUA' },
    { dayNumber: 4, label: 'Quinta', short: 'QUI' },
    { dayNumber: 5, label: 'Sexta', short: 'SEX' },
    { dayNumber: 6, label: 'Sábado', short: 'SÁB' },
    { dayNumber: 0, label: 'Domingo', short: 'DOM' },
  ];

  const currentDayClasses = CLASS_SCHEDULE.filter((c) => c.dayOfWeek === selectedDay);

  const filteredClasses = selectedFilter === 'todas'
    ? currentDayClasses
    : currentDayClasses.filter((c) => c.modalityId === selectedFilter);

  const getIntensityBadge = (intensity: string) => {
    switch (intensity) {
      case 'Muito Alta':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Alta':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      default:
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
    }
  };

  return (
    <section className="py-20 bg-zinc-950" id="horarios">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Grade Semanal de Aulas
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
              Mais de 60 horários por semana. Encaixe na sua rotina.
            </h2>
            <p className="text-zinc-400 text-base">
              Aulas desde às 06h30 até às 20h30. Vagas dinâmicas reservadas pelo aplicativo ou na recepção.
            </p>
          </div>

          {/* Quick Modality Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-zinc-500" />
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs sm:text-sm font-semibold text-zinc-300 focus:border-lime-400 focus:outline-none cursor-pointer"
            >
              <option value="todas">Todas as Modalidades</option>
              <option value="indoor-cycling">Indoor Cycling (Spin)</option>
              <option value="cross-training">Cross Training / WOD</option>
              <option value="muay-thai-boxe">Lutas (Muay Thai / Boxe)</option>
              <option value="yoga-mobilidade">Yoga & Mobilidade</option>
              <option value="fitdance-ritmos">FitDance & Ritmos</option>
              <option value="musculacao">Musculação Guiada</option>
            </select>
          </div>
        </div>

        {/* Days of Week Tab Buttons */}
        <div className="grid grid-cols-7 gap-1.5 sm:gap-2 p-1.5 rounded-2xl bg-zinc-900/80 border border-zinc-800 mb-8">
          {days.map((d) => (
            <button
              key={d.dayNumber}
              onClick={() => setSelectedDay(d.dayNumber)}
              className={`py-3 px-1 sm:px-3 rounded-xl text-center transition-all cursor-pointer ${
                selectedDay === d.dayNumber
                  ? 'bg-lime-400 text-zinc-950 font-black shadow-md shadow-lime-500/20'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/60 font-medium'
              }`}
            >
              <span className="block text-[11px] sm:text-xs tracking-wider uppercase font-bold">{d.short}</span>
              <span className="hidden sm:block text-xs mt-0.5 opacity-80">{d.label}</span>
            </button>
          ))}
        </div>

        {/* Classes List */}
        {filteredClasses.length > 0 ? (
          <div className="space-y-3">
            {filteredClasses.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/90 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                {/* Time & Title */}
                <div className="flex items-start sm:items-center gap-4">
                  <div className="px-3 py-2 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-sm sm:text-base font-black text-lime-400 flex items-center gap-1.5 shrink-0">
                    <Clock className="w-4 h-4 text-zinc-500" />
                    <span>{item.time}</span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-['Outfit'] group-hover:text-lime-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 mt-1">
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        {item.instructor}
                      </span>
                      <span className="text-zinc-600">•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {item.room}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Badges & Reservation Button */}
                <div className="flex items-center justify-between sm:justify-end gap-3 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-800">
                  <span className={`text-[11px] px-2.5 py-1 rounded-full border font-bold ${getIntensityBadge(item.intensity)}`}>
                    {item.intensity}
                  </span>

                  <button
                    onClick={() => onOpenBooking(`Aula: ${item.title} às ${item.time}`)}
                    className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-lime-400 hover:text-zinc-950 text-zinc-200 text-xs font-bold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <span>Experimentar Esta Aula</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl bg-zinc-900/30 border border-zinc-800/60 text-zinc-400">
            <p className="text-base">Nenhuma aula encontrada para este filtro no dia selecionado.</p>
            <p className="text-xs text-zinc-500 mt-1">Nossa sala de musculação e pesos livres funciona normalmente durante todo o horário da academia.</p>
          </div>
        )}
      </div>
    </section>
  );
};
