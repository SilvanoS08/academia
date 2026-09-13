import React, { useState, useId } from 'react';
import { Calculator, ArrowRight, Activity, Flame, Droplet, Dumbbell, Sparkles } from 'lucide-react';

interface CalculadoraFitnessProps {
  onOpenBookingWithStats: (statsText: string) => void;
}

export const CalculadoraFitness: React.FC<CalculadoraFitnessProps> = ({ onOpenBookingWithStats }) => {
  const genderMaleId = useId();
  const genderFemaleId = useId();
  const ageId = useId();
  const weightId = useId();
  const heightId = useId();
  const activityId = useId();

  const [gender, setGender] = useState<'masculino' | 'feminino'>('masculino');
  const [age, setAge] = useState<number>(28);
  const [weight, setWeight] = useState<number>(76);
  const [height, setHeight] = useState<number>(175);
  const [activityLevel, setActivityLevel] = useState<number>(1.375); // 1.2, 1.375, 1.55, 1.725
  const [goal, setGoal] = useState<'hipertrofia' | 'emagrecimento' | 'saude'>('hipertrofia');

  // BMI Calculation
  const heightInMeters = height / 100;
  const imc = parseFloat((weight / (heightInMeters * heightInMeters)).toFixed(1));

  let imcCategory = '';
  let imcColor = '';
  if (imc < 18.5) {
    imcCategory = 'Abaixo do peso';
    imcColor = 'text-sky-400';
  } else if (imc < 25) {
    imcCategory = 'Peso saudável';
    imcColor = 'text-emerald-400';
  } else if (imc < 30) {
    imcCategory = 'Sobrepeso leve';
    imcColor = 'text-amber-400';
  } else {
    imcCategory = 'Obesidade';
    imcColor = 'text-red-400';
  }

  // BMR (Mifflin-St Jeor Formula)
  const bmr = Math.round(
    gender === 'masculino'
      ? 10 * weight + 6.25 * height - 5 * age + 5
      : 10 * weight + 6.25 * height - 5 * age - 161
  );

  // TDEE (Total Daily Energy Expenditure)
  const tdee = Math.round(bmr * activityLevel);

  // Target Calories based on Goal
  let targetCalories = tdee;
  let proteinPerKg = 1.8;
  let targetGoalName = 'Condicionamento & Manutenção';
  let recommendedModality = 'Musculação + Pulse Spin 2x/sem';

  if (goal === 'hipertrofia') {
    targetCalories = Math.round(tdee * 1.12); // +12% surplus
    proteinPerKg = 2.0;
    targetGoalName = 'Hipertrofia & Ganho Muscular';
    recommendedModality = 'Musculação Hipertrofia 4x/sem + WOD Barbell';
  } else if (goal === 'emagrecimento') {
    targetCalories = Math.round(tdee * 0.82); // -18% deficit
    proteinPerKg = 2.2; // higher protein for muscle sparing
    targetGoalName = 'Definição & Emagrecimento';
    recommendedModality = 'Musculação + Pulse Spin ou Muay Thai 3x/sem';
  } else {
    targetCalories = tdee;
    proteinPerKg = 1.6;
    targetGoalName = 'Saúde Geral, Postura & Vitalidade';
    recommendedModality = 'Musculação Funcional + Yoga & Mobilidade';
  }

  const dailyProtein = Math.round(weight * proteinPerKg);
  const dailyWater = (Math.round((weight * 35) / 100) / 10).toFixed(1); // 35ml per kg in liters

  const handleApplyToBooking = () => {
    const summary = `Meta: ${targetGoalName} | IMC: ${imc} (${imcCategory}) | TMB: ${bmr}kcal | Meta Calórica: ${targetCalories}kcal | Proteína: ${dailyProtein}g/dia | Peso: ${weight}kg | Altura: ${height}cm`;
    onOpenBookingWithStats(summary);
  };

  return (
    <section className="py-20 bg-zinc-900/40 border-t border-b border-zinc-900 relative" id="calculadora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            Ferramenta Interativa Grátis
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-['Outfit'] tracking-tight">
            Calculadora de Meta Corporal & IMC
          </h2>
          <p className="text-zinc-400 text-base">
            Descubra suas métricas basais, estimativa de queima calórica e a melhor rota de treino para o seu objetivo.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-zinc-900/80 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-lg font-bold text-white font-['Outfit'] flex items-center gap-2">
              <Activity className="w-5 h-5 text-lime-400" />
              <span>Seus Dados Físicos</span>
            </h3>

            {/* Gender Toggle */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Sexo Biológico (para cálculo metabólico)
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  id={genderMaleId}
                  onClick={() => setGender('masculino')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    gender === 'masculino'
                      ? 'bg-lime-400/15 text-lime-400 border-lime-400/50 shadow-inner'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  Masculino
                </button>
                <button
                  type="button"
                  id={genderFemaleId}
                  onClick={() => setGender('feminino')}
                  className={`py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer ${
                    gender === 'feminino'
                      ? 'bg-lime-400/15 text-lime-400 border-lime-400/50 shadow-inner'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  Feminino
                </button>
              </div>
            </div>

            {/* Weight, Height, Age */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div>
                <label htmlFor={ageId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Idade (anos)
                </label>
                <input
                  type="number"
                  id={ageId}
                  min={14}
                  max={99}
                  value={age}
                  onChange={(e) => setAge(Math.max(14, Math.min(99, Number(e.target.value) || 20)))}
                  className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-center focus:border-lime-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor={weightId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Peso (kg)
                </label>
                <input
                  type="number"
                  id={weightId}
                  min={35}
                  max={250}
                  value={weight}
                  onChange={(e) => setWeight(Math.max(35, Math.min(250, Number(e.target.value) || 70)))}
                  className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-center focus:border-lime-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor={heightId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                  Altura (cm)
                </label>
                <input
                  type="number"
                  id={heightId}
                  min={120}
                  max={230}
                  value={height}
                  onChange={(e) => setHeight(Math.max(120, Math.min(230, Number(e.target.value) || 170)))}
                  className="w-full px-3 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-white font-bold text-center focus:border-lime-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Activity Level Selector */}
            <div>
              <label htmlFor={activityId} className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Nível de Atividade Atual
              </label>
              <select
                id={activityId}
                value={activityLevel}
                onChange={(e) => setActivityLevel(parseFloat(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm focus:border-lime-400 focus:outline-none cursor-pointer"
              >
                <option value="1.2">Sedentário (pouco ou nenhum exercício)</option>
                <option value="1.375">Moderado (treina 1 a 3 vezes por semana)</option>
                <option value="1.55">Ativo (treina 3 a 5 vezes por semana)</option>
                <option value="1.725">Muito Ativo (treina pesado 6 a 7 vezes por semana)</option>
              </select>
            </div>

            {/* Goal Selector */}
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                Qual é o seu objetivo principal?
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setGoal('hipertrofia')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 text-center ${
                    goal === 'hipertrofia'
                      ? 'bg-lime-400/20 text-lime-300 border-lime-400/60 shadow-md'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  <Dumbbell className="w-4 h-4" />
                  <span>Hipertrofia</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('emagrecimento')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 text-center ${
                    goal === 'emagrecimento'
                      ? 'bg-red-400/20 text-red-300 border-red-400/60 shadow-md'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  <Flame className="w-4 h-4" />
                  <span>Emagrecimento</span>
                </button>
                <button
                  type="button"
                  onClick={() => setGoal('saude')}
                  className={`p-3 rounded-xl text-xs font-bold border transition-all cursor-pointer flex flex-col items-center gap-1 text-center ${
                    goal === 'saude'
                      ? 'bg-emerald-400/20 text-emerald-300 border-emerald-400/60 shadow-md'
                      : 'bg-zinc-950/60 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Saúde & Postura</span>
                </button>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6 bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Diagnóstico Personalizado
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-lime-400/10 text-lime-400 font-bold border border-lime-400/20">
                  Algoritmo Científico
                </span>
              </div>

              {/* BMI Banner */}
              <div className="mt-5 p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">Índice de Massa Corporal (IMC)</p>
                  <div className="flex items-baseline gap-2 mt-0.5">
                    <span className="text-3xl font-black text-white font-['Outfit']">{imc}</span>
                    <span className={`text-sm font-bold ${imcColor}`}>{imcCategory}</span>
                  </div>
                </div>
                <div className="text-right text-xs text-zinc-500">
                  Ideal: 18.5 - 24.9
                </div>
              </div>

              {/* Key Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-wider font-semibold">Taxa Basal (TMB)</span>
                  <p className="text-2xl font-black text-white font-['Outfit'] mt-0.5">{bmr} <span className="text-xs font-medium text-zinc-400">kcal</span></p>
                  <p className="text-[11px] text-zinc-500 mt-1">Calorias que queima em repouso absoluto</p>
                </div>

                <div className="p-4 rounded-2xl bg-zinc-950 border border-zinc-800/80">
                  <span className="text-[11px] text-lime-400 uppercase tracking-wider font-bold">Meta Calórica Diária</span>
                  <p className="text-2xl font-black text-lime-300 font-['Outfit'] mt-0.5">{targetCalories} <span className="text-xs font-medium text-zinc-400">kcal</span></p>
                  <p className="text-[11px] text-zinc-500 mt-1">Para seu objetivo de {goal}</p>
                </div>
              </div>

              {/* Nutrition & Recovery Guidelines */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Dumbbell className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase">Proteína Diária</p>
                    <p className="text-sm font-bold text-white">{dailyProtein}g <span className="text-xs text-zinc-400">({proteinPerKg}g/kg)</span></p>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-zinc-950/70 border border-zinc-800/70 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center shrink-0">
                    <Droplet className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400 uppercase">Água Recomendada</p>
                    <p className="text-sm font-bold text-white">{dailyWater} Litros / dia</p>
                  </div>
                </div>
              </div>

              {/* Recommended Training Split */}
              <div className="mt-4 p-4 rounded-2xl bg-lime-400/5 border border-lime-400/20">
                <p className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1">
                  Sugestão de Treino FORGE:
                </p>
                <p className="text-sm font-semibold text-zinc-200">
                  {recommendedModality}
                </p>
                <p className="text-xs text-zinc-400 mt-1">
                  Na sua aula experimental, nossos treinadores ajustam esses números com a bioimpedância 3D InBody.
                </p>
              </div>
            </div>

            {/* Action Button to Book with Stats */}
            <button
              onClick={handleApplyToBooking}
              className="w-full py-4 rounded-2xl bg-lime-400 hover:bg-lime-300 text-zinc-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-lime-500/20 hover:shadow-lime-500/40 transition-all cursor-pointer"
            >
              <span>Quero Meu Plano Personalizado na FORGE</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
