import React, { useState, useEffect } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show gentle balloon tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Speech Balloon Tooltip */}
      {showTooltip && (
        <div className="relative p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-xs shadow-2xl max-w-[220px] text-zinc-200 animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-1.5 -left-1.5 p-0.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white"
            aria-label="Fechar dica"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-semibold text-white">Dúvidas sobre os treinos?</p>
          <p className="text-[11px] text-zinc-400 mt-0.5">Nossa equipe de recepção responde na hora no WhatsApp!</p>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre as aulas e planos da FORGE Academia.')}`}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:scale-110 transition-all duration-200 group relative"
        aria-label="Fale conosco no WhatsApp"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-20 group-hover:opacity-40" />
        <MessageSquare className="w-7 h-7 fill-current stroke-none" />
      </a>
    </div>
  );
};
