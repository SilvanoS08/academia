import React, { useState, useId } from 'react';
import { Calendar, Clock, CheckCircle, ArrowRight, Sparkles, MessageSquare, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface AgendamentoSectionProps {
  initialModality?: string;
}

export const AgendamentoSection: React.FC<AgendamentoSectionProps> = ({ initialModality = '' }) => {
  const nameId = useId();
  const phoneId = useId();
  const emailId = useId();
  const modalityId = useId();
  const shiftId = useId();
  const dateId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState(initialModality || 'Musculação & Hipertrofia');
  const [preferredShift, setPreferredShift] = useState('Manhã (06h às 12h)');
  const [preferredDate, setPreferredDate] = useState('');
  const [goal, setGoal] = useState('Ganhar massa muscular (Hipertrofia)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  // Format phone number mask (XX) XXXXX-XXXX
  const handlePhoneChange = (val: string) => {
    const raw = val.replace(/\D/g, '').slice(0, 11);
    if (raw.length <= 2) {
      setPhone(raw);
    } else if (raw.length <= 7) {
      setPhone(`(${raw.slice(0, 2)}) ${raw.slice(2)}`);
    } else {
      setPhone(`(${raw.slice(0, 2)}) ${raw.slice(2, 7)}-${raw.slice(7, 11)}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    const generatedCode = 'FORGE-' + Math.floor(100000 + Math.random() * 900000);
    setTicketCode(generatedCode);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá FORGE Academia! Acabei de agendar minha aula experimental no site.\n\n*Código:* ${ticketCode}\n*Nome:* ${name}\n*Modalidade:* ${modality}\n*Turno:* ${preferredShift}\n*Data:* ${preferredDate || 'A combinar'}\n*Objetivo:* ${goal}\n\nGostaria de confirmar minha vaga!`
  );

  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden" id="agendar-aula">
      {/* Background accents */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Convincing Copy */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              100% Grátis & Sem Compromisso
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Outfit'] tracking-tight leading-tight">
              Agende sua Aula Experimental Gratuita
            </h2>

            <p className="text-zinc-400 text-base leading-relaxed">
              Venha treinar com a gente por um dia, testar nossas máquinas importadas,
              participar de uma aula coletiva e receber orientações do treinador responsável.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Acesso livre a toda a área de musculação e pesos livres</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Acompanhamento individual de um treinador durante o treino</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs sm:text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-lime-400 shrink-0" />
                <span>Estacionamento coberto com 2 horas gratuitas</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-zinc-400" />
              <span>Seus dados estão protegidos. Não enviamos spam.</span>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-zinc-900/90 border border-zinc-800 p-6 sm:p-10 shadow-2xl relative">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-zinc-800 pb-4 mb-2">
                    <h3 className="text-xl font-black text-white font-['Outfit']">
                      Preencha para liberar seu passe VIP
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      Leva menos de 1 minuto. Você receberá a confirmação no WhatsApp.
                    </p>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={nameId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Seu Nome Completo *
                      </label>
                      <input
                        type="text"
                        id={nameId}
                        required
                        placeholder="Ex: João da Silva"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:border-lime-400 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor={phoneId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        WhatsApp / Celular *
                      </label>
                      <input
                        type="tel"
                        id={phoneId}
                        required
                        placeholder="(11) 99999-9999"
                        value={phone}
                        onChange={(e) => handlePhoneChange(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:border-lime-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor={emailId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      Seu Melhor E-mail *
                    </label>
                    <input
                      type="email"
                      id={emailId}
                      required
                      placeholder="seuemail@exemplo.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:border-lime-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Modality & Turno */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={modalityId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Modalidade Desejada
                      </label>
                      <select
                        id={modalityId}
                        value={modality}
                        onChange={(e) => setModality(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Musculação & Hipertrofia">Musculação & Hipertrofia</option>
                        <option value="Pulse Spin (Indoor Cycling)">Pulse Spin (Indoor Cycling)</option>
                        <option value="FORGE WOD (Cross Training)">FORGE WOD (Cross Training)</option>
                        <option value="Lutas (Muay Thai & Boxe)">Lutas (Muay Thai & Boxe)</option>
                        <option value="Yoga & Mobilidade">Yoga & Mobilidade</option>
                        <option value="FitDance & Ritmos">FitDance & Ritmos</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor={shiftId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Melhor Período
                      </label>
                      <select
                        id={shiftId}
                        value={preferredShift}
                        onChange={(e) => setPreferredShift(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Manhã (06h às 12h)">Manhã (06h às 12h)</option>
                        <option value="Almoço (12h às 14h)">Horário de Almoço (12h às 14h)</option>
                        <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                        <option value="Noite (18h às 22h)">Noite (18h às 22h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Preferred Date & Goal */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor={dateId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Data de Preferência (Opcional)
                      </label>
                      <input
                        type="date"
                        id={dateId}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                        Seu Objetivo Principal
                      </label>
                      <select
                        value={goal}
                        onChange={(e) => setGoal(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none cursor-pointer"
                      >
                        <option value="Ganhar massa muscular (Hipertrofia)">Ganhar massa muscular (Hipertrofia)</option>
                        <option value="Emagrecimento & Definição">Emagrecimento & Definição</option>
                        <option value="Condicionamento físico & Saúde">Condicionamento físico & Saúde</option>
                        <option value="Alívio do estresse & Mobilidade">Alívio do estresse & Mobilidade</option>
                      </select>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      id="submit-trial-booking-button"
                      className="w-full py-4 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-base shadow-xl shadow-lime-500/25 hover:shadow-lime-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                    >
                      <span>Garantir Meu Passe Gratuito Agora</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-[11px] text-center text-zinc-500 mt-2">
                      Sem necessidade de cartão de crédito. Você não será cobrado por nada.
                    </p>
                  </div>
                </form>
              ) : (
                /* Success Confirmation State */
                <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-lime-400/20 border-2 border-lime-400 text-lime-400 flex items-center justify-center mx-auto shadow-lg shadow-lime-500/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-lime-400">Passe Confirmado!</span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-['Outfit']">
                      Parabéns, {name.split(' ')[0]}! Sua vaga está reservada.
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto">
                      Guardamos seu passe para a modalidade <strong className="text-white">{modality}</strong> no período <strong className="text-white">{preferredShift}</strong>.
                    </p>
                  </div>

                  {/* Ticket Voucher Card */}
                  <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800 max-w-sm mx-auto space-y-2 text-left">
                    <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/80 pb-2">
                      <span>Voucher Passe VIP:</span>
                      <span className="font-mono font-bold text-lime-400">{ticketCode}</span>
                    </div>
                    <div className="text-xs text-zinc-300 space-y-1">
                      <p><span className="text-zinc-500">Unidade:</span> {GYM_INFO.address}</p>
                      <p><span className="text-zinc-500">Horário livre:</span> Seg a Sex das 05h às 23h30</p>
                      <p><span className="text-zinc-500">Estacionamento:</span> 2h com manobrista grátis</p>
                    </div>
                  </div>

                  {/* WhatsApp Quick Link */}
                  <div className="space-y-3 max-w-sm mx-auto">
                    <a
                      href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Confirmar via WhatsApp Agora</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Fazer outro agendamento
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
