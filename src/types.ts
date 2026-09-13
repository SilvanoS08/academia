export interface Modality {
  id: string;
  name: string;
  category: 'musculacao' | 'cardio' | 'lutas' | 'coletivas' | 'bem-estar';
  categoryLabel: string;
  tagline: string;
  description: string;
  duration: string;
  intensity: 'Moderada' | 'Alta' | 'Muito Alta' | 'Adaptável';
  calories: string;
  image: string;
  benefits: string[];
  popularFor: string;
}

export interface ClassScheduleItem {
  id: string;
  time: string;
  title: string;
  modalityId: string;
  instructor: string;
  room: string;
  intensity: 'Moderada' | 'Alta' | 'Muito Alta';
  dayOfWeek: number; // 0 = Dom, 1 = Seg, ..., 6 = Sab
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  description: string;
  monthlyPrice: number;
  annualMonthlyPrice: number;
  features: {
    included: boolean;
    text: string;
  }[];
  ctaText: string;
}

export interface Coach {
  id: string;
  name: string;
  role: string;
  cref: string;
  specialty: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  monthsAtGym: string;
  achievement: string;
  rating: number;
  quote: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}
