 
export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Logo et titre */}
          <div className="text-center mb-8">
            <div className="text-3xl font-bold text-purple-600 mb-2">🧠 NeuraPost</div>
            <h1 className="text-2xl font-bold">Créez votre compte</h1>
            <p className="text-gray-600 mt-2">Commencez gratuitement avec 5 posts/mois</p>
          </div>

          {/* Formulaire simple */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Email professionnel
              </label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="vous@entreprise.com"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">
                Mot de passe
              </label>
              <input 
                type="password" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Nom de votre entreprise
              </label>
              <input 
                type="text" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Startup XYZ"
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-bold hover:opacity-90 transition"
            >
              Créer mon compte gratuit
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Déjà un compte ?{' '}
              <a href="/auth/login" className="text-purple-600 font-medium hover:underline">
                Se connecter
              </a>
            </p>
            <p className="text-gray-400 text-xs mt-4">
              En créant un compte, vous acceptez nos conditions d'utilisation.
            </p>
          </div>
        </div>
        
        {/* Retour à l'accueil */}
        <div className="text-center mt-6">
          <a 
            href="/"
            className="text-gray-600 hover:text-purple-600 inline-flex items-center gap-2"
          >
            ← Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}