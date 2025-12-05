 export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* En-tête */}
        <div className="mb-12">
          <a 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-purple-600 mb-6"
          >
            ← Retour à l'accueil
          </a>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Démonstration NeuraPost
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            Découvrez comment notre IA génère des posts LinkedIn optimisés
          </p>
        </div>

        {/* Contenu en 2 colonnes */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Colonne gauche : Étapes */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Comment ça marche ?</h2>
            
            <div className="space-y-8">
              {/* Étape 1 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-600">1</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold mb-2">Choisissez un sujet</h3>
                  <p className="text-gray-600">
                    Exemple : <em>"Lancement de mon SaaS pour startups africaines"</em>
                  </p>
                </div>
              </div>

              {/* Étape 2 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-600">2</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold mb-2">L'IA génère 3 versions</h3>
                  <p className="text-gray-600">
                    Optimisées pour l'engagement, avec hashtags pertinents et appels à l'action.
                  </p>
                </div>
              </div>

              {/* Étape 3 */}
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <span className="text-xl font-bold text-purple-600">3</span>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-bold mb-2">Personnalisez et publiez</h3>
                  <p className="text-gray-600">
                    Modifiez, ajoutez votre touche, et publiez directement ou planifiez.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Colonne droite : Exemple concret */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Exemple de résultat</h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
              
              {/* Version 1 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm mr-3">A</span>
                  Version Storytelling
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800">
                    "Il y a 2 ans, je codais dans mon salon à Lomé. 
                    Aujourd'hui, mon SaaS sert 100+ entreprises africaines. 
                    Le chemin ? Beaucoup d'essais-erreurs, mais une conviction : 
                    la tech africaine a un immense potentiel. 🚀"
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">#TechAfrique</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">#SaaS</span>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">#Entrepreneuriat</span>
                  </div>
                </div>
              </div>

              {/* Version 2 */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">B</span>
                  Version Tips/Conseils
                </h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-800">
                    "3 erreurs que 90% des startups africaines font sur LinkedIn :<br/><br/>
                    1. Poster aux mauvaises heures (14h-16h EST, c'est le meilleur créneau)<br/>
                    2. Oublier les hashtags locaux (#TechTogo, #StartupAbidjan)<br/>
                    3. Trop parler produit, pas assez valeur..."
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">#ConseilsStartup</span>
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">#LinkedInTips</span>
                    <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">#GrowthHacking</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Prêt à essayer ?</h3>
            <p className="text-gray-600 mb-6">
              Rejoignez la liste d'attente pour être parmi les premiers à tester NeuraPost.
            </p>
            <a 
              href="/"
              className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition"
            >
              Revenir à l'accueil pour s'inscrire
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}