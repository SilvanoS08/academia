import React, { useState, useEffect, useId } from 'react';
import { X, CheckCircle, ArrowRight, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface AgendamentoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}

export const AgendamentoModal: React.FC<AgendamentoModalProps> = ({
  isOpen,
  onClose,
  initialTopic = '',
}) => {
  const modalNameId = useId();
  const modalPhoneId = useId();
  const modalEmailId = useId();
  const modalModalityId = useId();
  const modalShiftId = useId();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [modality, setModality] = useState(initialTopic || 'Musculação & Hipertrofia');
  const [preferredShift, setPreferredShift] = useState('Manhã (06h às 12h)');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketCode, setTicketCode] = useState('');

  useEffect(() => {
    if (initialTopic) {
      setModality(initialTopic);
    }
  }, [initialTopic]);

  if (!isOpen) return null;

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

    const code = 'FORGE-' + Math.floor(100000 + Math.random() * 900000);
    setTicketCode(code);
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá FORGE Academia! Acabei de solicitar meu acesso no site.\n\n*Voucher:* ${ticketCode}\n*Nome:* ${name}\n*Interesse:* ${modality}\n*Período:* ${preferredShift}\n\nGostaria de ativar meu passe!`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-zinc-800 p-6 sm:p-8 shadow-2xl overflow-hidden text-left">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/80 text-zinc-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 text-xs font-bold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Passe VIP Cortesia</span>
              </div>
              <h3 className="text-2xl font-black text-white font-['Outfit']">
                Agendar na FORGE
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Acesso gratuito para experimentar os aparelhos, vestiários e suporte dos treinadores.
              </p>
            </div>

            <div>
              <label htmlFor={modalNameId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                Nome Completo *
              </label>
              <input
                type="text"
                id={modalNameId}
                required
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-lime-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor={modalPhoneId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id={modalPhoneId}
                  required
                  placeholder="(11) 99999-9999"
                  value={phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-lime-400 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor={modalEmailId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  id={modalEmailId}
                  required
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white text-sm focus:border-lime-400 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor={modalModalityId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                Interesse / Modalidade
              </label>
              <input
                type="text"
                id={modalModalityId}
                value={modality}
                onChange={(e) => setModality(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor={modalShiftId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                Período Preferido
              </label>
              <select
                id={modalShiftId}
                value={preferredShift}
                onChange={(e) => setPreferredShift(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none cursor-pointer"
              >
                <option value="Manhã (06h às 12h)">Manhã (06h às 12h)</option>
                <option value="Horário de Almoço (12h às 14h)">Horário de Almoço (12h às 14h)</option>
                <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                <option value="Noite (18h às 22h)">Noite (18h às 22h)</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20 cursor-pointer"
              >
                <span>Confirmar Agendamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Sem cobranças. Sem cartão de crédito.</span>
            </div>
          </form>
        ) : (
          <div className="text-center py-4 space-y-5 animate-in zoom-in-95">
            <div className="w-14 h-14 rounded-full bg-lime-400/20 text-lime-400 border border-lime-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-7 h-7" />
            </div>

            <div>
              <h3 className="text-2xl font-black text-white font-['Outfit']">Voucher Gerado!</h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tudo pronto para você conhecer a FORGE. Apresente este código na recepção ou chame no WhatsApp.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 text-center">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider block">Código do Passe VIP</span>
              <span className="text-xl font-mono font-black text-lime-400">{ticketCode}</span>
            </div>

            <div className="space-y-2">
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Conversar no WhatsApp agora</span>
              </a>

              <button
                onClick={onClose}
                className="w-full py-2.5 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
