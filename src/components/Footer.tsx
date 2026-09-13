import React, { useState, useId } from 'react';
import { Dumbbell, MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Youtube, Music, Send, CheckCircle2 } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

export const Footer: React.FC = () => {
  const newsletterEmailId = useId();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-850 pt-16 pb-12 text-zinc-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Top Section: Location, Hours & Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-zinc-850">
          {/* Card 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-lime-400 flex items-center justify-center text-zinc-950 font-black shadow-md shadow-lime-500/20">
                <Dumbbell className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-xl text-white font-['Outfit']">FORGE</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Centro de Treinamento, Biomecânica & Alta Performance. Transformando a saúde e a capacidade física de milhares de pessoas todos os dias.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-lime-400 hover:border-lime-400/40 transition-colors"
                title="Instagram da FORGE"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-red-400 hover:border-red-400/40 transition-colors"
                title="Canal do YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                title="Playlist Oficial de Treino no Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Card 2: Location & Directions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-lime-400" />
              <span>Nossa Unidade</span>
            </h4>
            <p className="text-xs text-zinc-300 font-medium">
              {GYM_INFO.address}
            </p>
            <p className="text-xs text-zinc-400">
              Próximo à estação Consolação e Trianon-MASP do Metrô. Estacionamento subterrâneo próprio com 2h cortesia.
            </p>
            <a
              href={GYM_INFO.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block text-xs font-bold text-lime-400 hover:text-lime-300 underline pt-1"
            >
              Abrir no Google Maps &rarr;
            </a>
          </div>

          {/* Card 3: Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit'] flex items-center gap-2">
              <Clock className="w-4 h-4 text-lime-400" />
              <span>Horários de Treino</span>
            </h4>
            <ul className="text-xs space-y-1.5 text-zinc-300">
              <li className="flex justify-between">
                <span className="text-zinc-400">Segunda a Sexta:</span>
                <span className="font-semibold text-white">{GYM_INFO.hours.weekdays}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-zinc-400">Sábados:</span>
                <span className="font-semibold text-white">{GYM_INFO.hours.saturday}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-zinc-400">Domingos:</span>
                <span className="font-semibold text-white">{GYM_INFO.hours.sunday}</span>
              </li>
              <li className="flex justify-between">
                <span className="text-zinc-400">Feriados:</span>
                <span className="font-semibold text-white">{GYM_INFO.hours.holidays}</span>
              </li>
            </ul>
          </div>

          {/* Card 4: Newsletter & Direct Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-['Outfit']">
              Dicas de Treino & Promoções
            </h4>
            <p className="text-xs text-zinc-400">
              Receba artigos sobre nutrição esportiva e eventos exclusivos da comunidade FORGE.
            </p>

            {!newsletterSuccess ? (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <label htmlFor={newsletterEmailId} className="sr-only">Seu e-mail</label>
                <input
                  type="email"
                  id={newsletterEmailId}
                  required
                  placeholder="Seu e-mail"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-100 placeholder-zinc-500 focus:border-lime-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-2 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold shrink-0 cursor-pointer"
                  title="Cadastrar"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            ) : (
              <div className="p-2 rounded-xl bg-lime-400/10 border border-lime-400/30 text-xs text-lime-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Inscrição confirmada com sucesso!</span>
              </div>
            )}

            <div className="pt-2 text-xs text-zinc-400 space-y-1">
              <p className="flex items-center gap-1.5">
                <Phone className="w-3 h-3 text-zinc-500" />
                <span>{GYM_INFO.phone}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3 h-3 text-zinc-500" />
                <span>{GYM_INFO.email}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 text-center sm:text-left">
          <div>
            <p>© {new Date().getFullYear()} {GYM_INFO.legalName} Todos os direitos reservados.</p>
            <p className="text-[11px] text-zinc-400 mt-0.5">CNPJ: 42.189.340/0001-92 • CREF Jurídico: 028491-J/SP</p>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#inicio" className="hover:text-zinc-200 transition-colors">Voltar ao topo ↑</a>
            <span>•</span>
            <a href="#planos" className="hover:text-zinc-200 transition-colors">Planos</a>
            <span>•</span>
            <a href="#modalidades" className="hover:text-zinc-200 transition-colors">Modalidades</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
