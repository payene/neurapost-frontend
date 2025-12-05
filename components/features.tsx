 
'use client';

import { MessageSquare, Target, Clock, TrendingUp, Users, Globe } from 'lucide-react';
import { MotionDiv } from './motion';

const features = [
  {
    icon: MessageSquare,
    title: "Chat IA intelligent",
    description: "Discutez naturellement avec l'IA comme avec un expert LinkedIn"
  },
  {
    icon: Target,
    title: "Spécialisé Afrique",
    description: "Templates et exemples adaptés aux réalités africaines"
  },
  {
    icon: Clock,
    title: "Optimisation horaire",
    description: "Publication aux meilleurs moments pour votre fuseau horaire"
  },
  {
    icon: TrendingUp,
    title: "Analyse de performance",
    description: "Prédiction d'engagement et suggestions d'amélioration"
  },
  {
    icon: Users,
    title: "Personnalisation fine",
    description: "Adapté à votre secteur, ton et objectifs spécifiques"
  },
  {
    icon: Globe,
    title: "Multilingue",
    description: "Génération en français, anglais et langues locales"
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Tout ce dont vous avez besoin
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Une suite complète d'outils IA conçus spécifiquement pour maximiser votre impact sur LinkedIn
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <MotionDiv
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="text-purple-600" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
}