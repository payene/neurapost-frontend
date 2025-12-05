'use client';
import { Brain, Zap, Globe, Shield, Star } from 'lucide-react';
import { MotionDiv } from '@/components/motion';
import PricingSection from '@/components/pricing';
import FeatureGrid from '@/components/features';
import Link from 'next/link';


import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6">
              <Brain size={16} />
              <span className="text-sm font-medium">IA Spécialisée LinkedIn</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                NeuraPost
              </span>
              <br />
              <span className="text-gray-900">Votre assistant IA pour</span>
              <br />
              <span className="text-gray-700">dominer LinkedIn</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              L'intelligence artificielle qui génère des posts LinkedIn percutants, 
              optimisés pour le marché africain. 2x moins cher que Taplio.
            </p>
            

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/auth/signup"
                className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-purple-700 transition shadow-lg hover:shadow-xl text-center"
              >
                Essayer gratuitement
              </Link>
              <Link
                href="/demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-purple-400 transition text-center"
              >
                Voir la démo
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* Comparaison Prix */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Pourquoi payer plus cher ?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Taplio", price: "39-99€", features: ["Tous réseaux", "Analytics avancés", "Support US/EU"] },
              { name: "NeuraPost", price: "19€", features: ["Spécialiste LinkedIn", "Optimisé Afrique", "Support local", "2x moins cher"], highlight: true },
              { name: "Jasper/Copy.ai", price: "49-99€", features: ["Généraliste", "Tous usages", "Cher pour LinkedIn"] },
            ].map((tool) => (
              <div key={tool.name} className={`bg-white rounded-2xl p-8 ${tool.highlight ? 'ring-2 ring-purple-500 shadow-xl' : 'shadow-lg'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">{tool.name}</h3>
                  <div className="text-4xl font-bold mt-4">{tool.price}<span className="text-lg text-gray-500">/mois</span></div>
                </div>
                <ul className="space-y-3">
                  {tool.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Zap size={16} className="text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <FeatureGrid />
      
      {/* Pricing */}
      <PricingSection />
      
      {/* CTA Final avec formulaire fonctionnel */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Prêt à révolutionner votre présence LinkedIn ?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Rejoignez les premiers entrepreneurs africains qui utilisent NeuraPost.
          </p>
          
          {/* COMPOSANT FORMULAIRE - COPIER-COLLER CETTE PARTIE */}
          <div className="max-w-md mx-auto">
            <form onSubmit={async (e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email') as string;
              
              // Envoie à l'API
              const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
              });
              
              if (response.ok) {
                alert('✅ Merci ! Vous êtes sur la liste d\'attente.');
                e.currentTarget.reset();
              } else {
                alert('❌ Une erreur est survenue. Réessayez.');
              }
            }}>
              <div className="flex gap-4">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Votre email professionnel"
                  required
                  className="flex-1 p-4 border rounded-xl"
                />
                <button 
                  type="submit"
                  className="bg-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-purple-700"
                >
                  S'inscrire
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Liste d'attente exclusive. Pas de spam, promis.
              </p>
            </form>
          </div>
          {/* FIN DU COMPOSANT FORMULAIRE */}
          
        </div>
      </section>
    </div>
  );
}