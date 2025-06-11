import React from 'react';
import { Card } from '../../components/UI/Card';
import { Badge } from '../../components/UI/Badge';
import { Table } from '../../components/UI/Table';
import { Button } from '../../components/UI/Button';
import { Building2, Users, Calendar, TrendingUp, Plus, Settings } from 'lucide-react';

export function SuperAdminDashboard() {
  const stats = [
    { label: 'Sociétés actives', value: '12', change: '+2', trend: 'up', icon: Building2 },
    { label: 'Utilisateurs totaux', value: '348', change: '+23', trend: 'up', icon: Users },
    { label: 'RDV aujourd\'hui', value: '156', change: '+12%', trend: 'up', icon: Calendar },
    { label: 'Croissance mensuelle', value: '18%', change: '+3%', trend: 'up', icon: TrendingUp },
  ];

  const companies = [
    { id: '1', name: 'Clinique du Centre', users: 45, appointments: 234, status: 'active', lastActivity: '2 min' },
    { id: '2', name: 'Cabinet Dr. Martin', users: 12, appointments: 89, status: 'active', lastActivity: '15 min' },
    { id: '3', name: 'Centre Médical Nord', users: 28, appointments: 167, status: 'active', lastActivity: '1h' },
    { id: '4', name: 'Polyclinique Sud', users: 67, appointments: 345, status: 'inactive', lastActivity: '2j' },
  ];

  const columns = [
    { key: 'name', header: 'Société' },
    { key: 'users', header: 'Utilisateurs' },
    { key: 'appointments', header: 'RDV ce mois' },
    { 
      key: 'status', 
      header: 'Statut',
      render: (status: string) => (
        <Badge variant={status === 'active' ? 'success' : 'error'}>
          {status === 'active' ? 'Actif' : 'Inactif'}
        </Badge>
      )
    },
    { key: 'lastActivity', header: 'Dernière activité' },
    {
      key: 'actions',
      header: 'Actions',
      render: (_, row: any) => (
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" icon={Settings}>
            Configurer
          </Button>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Super Admin</h1>
          <p className="text-gray-600">Vue d'ensemble de toutes les sociétés</p>
        </div>
        <Button icon={Plus}>Ajouter une société</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} padding="md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <span className="text-sm text-green-600">{stat.change}</span>
                  <span className="text-xs text-gray-500">vs mois dernier</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Companies Table */}
      <Card>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Gestion des sociétés</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">Exporter</Button>
            <Button size="sm" icon={Plus}>Nouvelle société</Button>
          </div>
        </div>
        <Table columns={columns} data={companies} />
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <div className="text-center">
            <Building2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Créer une société</h3>
            <p className="text-sm text-gray-600 mb-4">
              Ajouter une nouvelle société au système
            </p>
            <Button variant="outline" size="sm">Créer</Button>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Statistiques avancées</h3>
            <p className="text-sm text-gray-600 mb-4">
              Analysez les performances globales
            </p>
            <Button variant="outline" size="sm">Voir les stats</Button>
          </div>
        </Card>

        <Card>
          <div className="text-center">
            <Settings className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h3 className="font-semibold mb-2">Configuration globale</h3>
            <p className="text-sm text-gray-600 mb-4">
              Paramètres système avancés
            </p>
            <Button variant="outline" size="sm">Configurer</Button>
          </div>
        </Card>
      </div>
    </div>
  );
}