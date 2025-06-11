import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Layout } from './components/Layout/Layout';
import { LoginPage } from './pages/Auth/LoginPage';
import { DashboardRouter } from './pages/Dashboard/DashboardRouter';
import { Card } from './components/UI/Card';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  return <Layout>{children}</Layout>;
}

function AppRoutes() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/login" element={<Navigate to="/dashboard" replace />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardRouter />
          </ProtectedRoute>
        }
      />
      {/* Placeholder routes for other pages */}
      <Route
        path="/companies"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des sociétés</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route
        path="/clients"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Gestion des clients</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route
        path="/appointments"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Planning des RDV</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Messagerie</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route
        path="/documents"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Documents</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Card>
              <div className="text-center py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Paramètres</h2>
                <p className="text-gray-600">Page en cours de développement</p>
              </div>
            </Card>
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;