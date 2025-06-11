import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';
import { Input } from '../../components/UI/Input';
import { User } from 'lucide-react';

export function LoginPage() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const demoAccounts = [
    { email: 'superadmin@demo.com', role: 'Super Admin', password: 'demo' },
    { email: 'admin@demo.com', role: 'Admin', password: 'demo' },
    { email: 'secretary@demo.com', role: 'Secrétaire', password: 'demo' },
    { email: 'commercial@demo.com', role: 'Commercial', password: 'demo' },
    { email: 'doctor@demo.com', role: 'Pro Santé', password: 'demo' },
    { email: 'patient@demo.com', role: 'Patient', password: 'demo' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setError('Email ou mot de passe incorrect');
    } finally {
      setLoading(false);
    }
  };

  const handleDemoLogin = (demoEmail: string) => {
    setEmail(demoEmail);
    setPassword('demo');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <Card className="lg:order-2">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <div className="w-8 h-8 bg-white rounded-lg"></div>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">MediCare Pro</h1>
            <p className="text-gray-600">Connectez-vous à votre espace</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
            />
            
            <Input
              label="Mot de passe"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <Button
              type="submit"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </Button>
          </form>
        </Card>

        {/* Demo Accounts */}
        <Card className="lg:order-1">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Comptes de démonstration</h2>
          <p className="text-gray-600 mb-6">
            Testez l'application avec différents rôles utilisateurs :
          </p>
          
          <div className="space-y-3">
            {demoAccounts.map((account, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(account.email)}
                className="w-full p-4 text-left border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{account.role}</p>
                    <p className="text-sm text-gray-600">{account.email}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-medium text-blue-900 mb-2">Comment utiliser la démo :</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Cliquez sur un rôle pour pré-remplir les champs</li>
              <li>• Mot de passe pour tous : <code className="bg-blue-100 px-1 rounded">demo</code></li>
              <li>• Explorez les fonctionnalités selon le rôle choisi</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}