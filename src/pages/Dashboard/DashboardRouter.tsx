import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { SuperAdminDashboard } from './SuperAdminDashboard';
import { AdminDashboard } from './AdminDashboard';
import { PatientDashboard } from './PatientDashboard';
import { Card } from '../../components/UI/Card';

export function DashboardRouter() {
  const { user } = useAuth();

  if (!user) {
    return (
      <Card>
        <div className="text-center py-8">
          <p className="text-gray-600">Veuillez vous connecter pour accéder au dashboard</p>
        </div>
      </Card>
    );
  }

  switch (user.role) {
    case 'super_admin':
      return <SuperAdminDashboard />;
    case 'admin':
      return <AdminDashboard />;
    case 'patient':
      return <PatientDashboard />;
    case 'secretary':
    case 'commercial':
    case 'pro_health':
      return (
        <Card>
          <div className="text-center py-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Dashboard {user.role.replace('_', ' ')}
            </h2>
            <p className="text-gray-600">
              Dashboard spécialisé pour le rôle {user.role} en cours de développement
            </p>
          </div>
        </Card>
      );
    default:
      return (
        <Card>
          <div className="text-center py-8">
            <p className="text-gray-600">Rôle non reconnu</p>
          </div>
        </Card>
      );
  }
}