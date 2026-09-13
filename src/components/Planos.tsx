import React, { useState } from 'react';
import { Check, X, ShieldCheck, Zap, Sparkles, ArrowRight } from 'lucide-react';
import { PRICING_PLANS } from '../data/gymData';
import { PricingPlan } from '../types';

interface PlanosProps {
  onSelectPlan: (plan: PricingPlan, billingCycle: 'anual' | 'mensal') => void;
}

export const Planos: React.FC<PlanosProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'anual' | 'mensal'>('anual');

  const formatBRL = (val: number) => {
    return val.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <section className="py-24 bg-zinc-950/80 border-t border-b border-zinc-900 relative" id="planos">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-lime-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-bold uppercase tracking-wider">
            Investimento na Sua Saúde
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Planos claros, sem letras miúdas.
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Sem taxa de adesão nesta promoção. Escolha o plano que combina com seus objetivos
            e treine em uma estrutura de primeiro mundo.
          </p>

          {/* Monthly vs Annual Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-1 shadow-inner">
              <button
                type="button"
                onClick={() => setBillingCycle('anual')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                  billingCycle === 'anual'
                    ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-500/20'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <span>Plano Anual</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-950/30 text-zinc-950 font-black uppercase">
                  Economize 25%
                </span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('mensal')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  billingCycle === 'mensal'
                    ? 'bg-lime-400 text-zinc-950 shadow-md shadow-lime-500/20'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Plano Mensal (Sem Fidelidade)
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'anual' ? plan.annualMonthlyPrice : plan.monthlyPrice;
            const savings = billingCycle === 'anual' ? Math.round((plan.monthlyPrice - plan.annualMonthlyPrice) * 12) : 0;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-zinc-900 to-zinc-950 border-2 border-lime-400/80 shadow-2xl shadow-lime-500/10 scale-100 lg:-translate-y-2'
                    : 'bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {/* Popular / VIP Badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-lime-400 text-zinc-950 text-xs font-black uppercase tracking-wider shadow-md shadow-lime-500/30 flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 fill-current" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-black text-white font-['Outfit']">{plan.name}</h3>
                    <p className="text-xs text-zinc-400 mt-1 min-h-[32px]">{plan.description}</p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 p-4 rounded-2xl bg-zinc-950/70 border border-zinc-800/80">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-zinc-400 font-bold">R$</span>
                      <span className="text-4xl font-black text-white font-['Outfit']">
                        {formatBRL(price).split(',')[0]}
                      </span>
                      <span className="text-sm font-extrabold text-white">
                        ,{formatBRL(price).split(',')[1]}
                      </span>
                      <span className="text-xs text-zinc-400 font-medium">/ mês</span>
                    </div>

                    <div className="mt-1.5 flex items-center justify-between text-[11px]">
                      {billingCycle === 'anual' ? (
                        <span className="text-emerald-400 font-semibold">
                          Economia de R$ {savings}/ano
                        </span>
                      ) : (
                        <span className="text-zinc-400">Cobrança mensal recorrente</span>
                      )}
                      <span className="text-zinc-500 font-medium">Sem taxa adesão</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 pb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                      O que está incluso:
                    </p>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                          {feature.included ? (
                            <div className="w-4 h-4 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-zinc-800 text-zinc-600 flex items-center justify-center shrink-0 mt-0.5">
                              <X className="w-3 h-3" />
                            </div>
                          )}
                          <span className={feature.included ? 'text-zinc-200' : 'text-zinc-500 line-through'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="pt-4 border-t border-zinc-800/80">
                  <button
                    onClick={() => onSelectPlan(plan, billingCycle)}
                    className={`w-full py-3.5 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-lime-400 hover:bg-lime-300 text-zinc-950 shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-center text-zinc-500 mt-2">
                    7 dias de garantia incondicional
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Seal Box */}
        <div className="mt-14 p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 max-w-2xl mx-auto flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-lime-400/10 border border-lime-400/30 flex items-center justify-center text-lime-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white font-['Outfit']">
              Garantia de Adaptação FORGE: 7 Dias Sem Risco
            </h4>
            <p className="text-xs text-zinc-400 mt-0.5">
              Comece a treinar hoje. Se dentro dos primeiros 7 dias você sentir que a estrutura ou atendimento
              não superaram suas expectativas, devolvemos 100% do seu investimento. Sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
