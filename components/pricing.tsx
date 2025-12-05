'use client';

import { Check, Star } from 'lucide-react';
import { MotionDiv } from './motion';

const plans = [
  {
    name: 'Gratuit',
    price: '0€',
    period: 'toujours',
    features: [
      '5 posts/mois',
      'Templates basiques',
      'Support communautaire',
      'Historique 30 jours'
    ],
    cta: 'Commencer gratuitement',
    popular: false
  },
  {
    name: 'Pro',
    price: '19€',
    period: '/mois',
    features: [
      '100 posts/mois',
      'Tous les templates',
      'Génération images IA',
      'Analytics basiques',
      'Support prioritaire',
      'Historique illimité'
    ],
    cta: 'Essayer 7 jours gratuit',
    popular: true
  },
  {
    name: 'Business',
    price: '49€',
    period: '/mois',
    features: [
      'Posts illimités',
      'Toutes les features Pro',
      'API access',
      'White-label',
      'Support dédié',
      'Formation équipe'
    ],
    cta: 'Contactez-nous',
    popular: false
  }
];

export default function PricingSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Pricing adapté au marché africain</h2>
          <p className="text-gray-600">2x moins cher que les alternatives, sans compromis sur la qualité</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <MotionDiv
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-2xl p-8 relative ${
                plan.popular 
                  ? 'ring-2 ring-purple-500 shadow-xl transform md:scale-105' 
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star size={12} />
                    Plus populaire
                  </div>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-5xl font-bold">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-bold ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:opacity-90'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                } transition`}
              >
                {plan.cta}
              </button>
            </MotionDiv>
          ))}
        </div>

        <p className="text-center text-gray-500 mt-8 text-sm">
          Pas de carte de crédit requise pour l'essai gratuit. Annulation à tout moment.
        </p>
      </div>
    </section>
  );
} 
