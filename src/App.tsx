/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Diferenciais } from './components/Diferenciais';
import { Modalidades } from './components/Modalidades';
import { CalculadoraFitness } from './components/CalculadoraFitness';
import { Horarios } from './components/Horarios';
import { Planos } from './components/Planos';
import { Treinadores } from './components/Treinadores';
import { Depoimentos } from './components/Depoimentos';
import { AgendamentoSection } from './components/AgendamentoSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { AgendamentoModal } from './components/AgendamentoModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { PricingPlan } from './types';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');

  const handleOpenBooking = (topic?: string) => {
    setModalTopic(topic || 'Musculação & Hipertrofia');
    setIsModalOpen(true);
  };

  const handleSelectPlan = (plan: PricingPlan, billingCycle: 'anual' | 'mensal') => {
    setModalTopic(`${plan.name} (${billingCycle === 'anual' ? 'Plano Anual' : 'Plano Mensal'})`);
    setIsModalOpen(true);
  };

  const handleOpenBookingWithStats = (statsText: string) => {
    setModalTopic(`Avaliação & Treino Personalizado (${statsText})`);
    setIsModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-lime-400 selection:text-zinc-950">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenBooking}
          onScrollToSection={handleScrollToSection}
        />

        <Diferenciais onOpenBooking={handleOpenBooking} />

        <Modalidades onOpenBooking={handleOpenBooking} />

        <CalculadoraFitness onOpenBookingWithStats={handleOpenBookingWithStats} />

        <Horarios onOpenBooking={handleOpenBooking} />

        <Planos onSelectPlan={handleSelectPlan} />

        <Treinadores />

        <Depoimentos />

        <AgendamentoSection initialModality={modalTopic} />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <AgendamentoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTopic={modalTopic}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloatingButton />
    </div>
  );
}

