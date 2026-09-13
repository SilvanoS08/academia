import React, { useState, useEffect } from 'react';
import { Dumbbell, Menu, X, Phone, Calendar, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenBooking: (planOrModality?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Modalidades', href: '#modalidades' },
    { label: 'Calculadora IMC', href: '#calculadora' },
    { label: 'Horários', href: '#horarios' },
    { label: 'Planos', href: '#planos' },
    { label: 'Treinadores', href: '#treinadores' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner */}
      <div id="top-announcement-bar" className="bg-gradient-to-r from-lime-500 via-emerald-500 to-lime-400 text-zinc-950 px-4 py-1.5 text-xs font-semibold tracking-wide text-center flex items-center justify-center gap-2 shadow-sm">
        <Sparkles className="w-3.5 h-3.5 fill-current animate-pulse" />
        <span>Matrícula Zero + 1º Mês com 25% OFF no Plano Anual!</span>
        <button
          onClick={() => onOpenBooking('Promoção Matrícula Zero')}
          className="underline hover:opacity-80 transition-opacity font-bold ml-1 cursor-pointer"
        >
          Agendar Aula Grátis &rarr;
        </button>
      </div>

      {/* Main Sticky Navbar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 shadow-xl shadow-black/40 py-3'
            : 'bg-zinc-950/60 backdrop-blur-sm border-b border-zinc-800/40 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            id="brand-logo"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-zinc-950 font-black shadow-lg shadow-lime-500/20 group-hover:scale-105 transition-transform duration-200">
              <Dumbbell className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">FORGE</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/30 font-bold uppercase tracking-wider">PRO</span>
              </div>
              <p className="text-[10px] text-zinc-400 tracking-wider uppercase font-medium -mt-1">Performance & Saúde</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300" id="desktop-navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-lime-400 transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-lime-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de tirar uma dúvida sobre os planos da FORGE Academia.')}`}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 bg-zinc-900/60 hover:bg-emerald-950/20 transition-all text-xs font-semibold flex items-center gap-1.5"
              title="Fale no WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBooking()}
              id="header-cta-button"
              className="px-4 py-2.5 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-sm shadow-md shadow-lime-500/20 hover:shadow-lime-500/40 transition-all duration-200 flex items-center gap-2 cursor-pointer group"
            >
              <Calendar className="w-4 h-4 text-zinc-950" />
              <span>Aula Experimental Grátis</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-lg bg-lime-400 text-zinc-950 font-bold text-xs sm:hidden"
            >
              Aula Grátis
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-zinc-800/80 bg-zinc-950/98 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-zinc-800">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-zinc-900 hover:text-lime-400"
                >
                  {link.label}
                </button>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Aula Experimental Grátis</span>
              </button>
              <a
                href={`https://wa.me/${GYM_INFO.whatsappRaw}?text=${encodeURIComponent('Olá! Gostaria de informações sobre os planos da FORGE Academia.')}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl border border-zinc-800 bg-zinc-900 text-zinc-200 font-semibold text-sm flex items-center justify-center gap-2 hover:bg-zinc-800"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Chamar no WhatsApp: {GYM_INFO.whatsapp}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
