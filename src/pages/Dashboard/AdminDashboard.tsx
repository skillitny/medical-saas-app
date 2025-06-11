import React from 'react';
import { Card } from '../../components/UI/Card';
import { Badge } from '../../components/UI/Badge';
import { Button } from '../../components/UI/Button';
import { Users, Calendar, UserCheck, TrendingUp, Plus, ArrowRight } from 'lucide-react';

export function AdminDashboard() {
  const stats = [
    { label: 'Nouveaux clients', value: '23', change: '+12%', trend: 'up', icon: Users },
    { label: 'RDV cette semaine', value: '87', change: '+8%', trend: 'up', icon: Calendar },
    { label: 'Commerciaux actifs', value: '8', change: '0', trend: 'stable', icon: UserCheck },
    { label: 'Taux de conversion', value: '34%', change: '+5%', trend: 'up', icon: TrendingUp },
  ];

  const recentClients = [
    { name: 'Sophie Durand', email: 'sophie.durand@email.com', status: 'lead', assignedTo: 'Pierre M.', date: 'Aujourd\'hui' },
    { name: 'Marc Leblanc', email: 'marc.leblanc@email.com', status: 'confirmed', assignedTo: 'Julie L.', date: 'Hier' },
    { name: 'Claire Rousseau', email: 'claire.rousseau@email.com', status: 'lead', assignedTo: 'Non assigné', date: 'Hier' },
  ];

  const recentAppointments = [
    { client: 'Thomas Martin', doctor: 'Dr. Rousseau', time: '14:00', status: 'confirmed' },
    { client: 'Marie Dupont', doctor: 'Dr. Dubois', time: '15:30', status: 'scheduled' },
    { client: 'Paul Bernard', doctor: 'Dr. Rousseau', time: '16:00', status: 'confirmed' },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'lead': return <Badge variant="warning">Lead</Badge>;
      case 'confirmed': return <Badge variant="success">Confirmé</Badge>;
      case 'scheduled': return <Badge variant="info">Planifié</Badge>;
      default: return <Badge>{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Admin</h1>
          <p className="text-gray-600">Clinique du Centre - Vue d'ensemble</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" icon={UserCheck}>Affecter des leads</Button>
          <Button icon={Plus}>Nouveau client</Button>
        </div>
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
                  <span className={`text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-gray-500'}`}>
                    {stat.change}
                  </span>
                  <span className="text-xs text-gray-500">vs semaine dernière</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Clients récents</h2>
            <Button variant="ghost" size="sm" icon={ArrowRight}>
              Voir tous
            </Button>
          </div>
          <div className="space-y-3">
            {recentClients.map((client, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{client.name}</p>
                  <p className="text-sm text-gray-600">{client.email}</p>
                  <p className="text-xs text-gray-500">
                    Assigné à: {client.assignedTo} • {client.date}
                  </p>
                </div>
                <div className="ml-4">
                  {getStatusBadge(client.status)}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">RDV à venir</h2>
            <Button variant="ghost" size="sm" icon={ArrowRight}>
              Voir planning
            </Button>
          </div>
          <div className="space-y-3">
            {recentAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-900">{appointment.client}</p>
                  <p className="text-sm text-gray-600">{appointment.doctor}</p>
                  <p className="text-xs text-gray-500">{appointment.time}</p>
                </div>
                <div className="ml-4">
                  {getStatusBadge(appointment.status)}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Lead Assignment Module */}
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">📥 Affectation des leads</h2>
          <Button variant="outline" size="sm">Configuration</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <h3 className="font-medium text-yellow-800 mb-2">Leads non assignés</h3>
            <p className="text-2xl font-bold text-yellow-900">5</p>
            <Button variant="outline" size="sm" className="mt-2">
              Assigner maintenant
            </Button>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-medium text-blue-800 mb-2">En cours de traitement</h3>
            <p className="text-2xl font-bold text-blue-900">12</p>
            <Button variant="outline" size="sm" className="mt-2">
              Voir le suivi
            </Button>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-medium text-green-800 mb-2">Convertis ce mois</h3>
            <p className="text-2xl font-bold text-green-900">28</p>
            <Button variant="outline" size="sm" className="mt-2">
              Détails
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}