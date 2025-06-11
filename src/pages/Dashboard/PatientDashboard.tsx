import React from 'react';
import { Card } from '../../components/UI/Card';
import { Badge } from '../../components/UI/Badge';
import { Button } from '../../components/UI/Button';
import { AppointmentCard } from '../../components/Appointments/AppointmentCard';
import { Calendar, FileText, CreditCard, Video, MessageSquare, Download } from 'lucide-react';

export function PatientDashboard() {
  const nextAppointment = {
    id: '1',
    clientName: 'Thomas Bernard',
    clientId: '6',
    proHealthId: '5',
    proHealthName: 'Dr. Anne Rousseau',
    date: '2024-01-15',
    time: '14:00',
    duration: 30,
    status: 'confirmed' as const,
    type: 'consultation' as const,
    notes: 'Consultation de suivi post-opératoire'
  };

  const documents = [
    { id: '1', name: 'Analyse de sang - 10/01/2024', type: 'Analyse', date: '2024-01-10', status: 'ready' },
    { id: '2', name: 'Ordonnance - 05/01/2024', type: 'Ordonnance', date: '2024-01-05', status: 'ready' },
    { id: '3', name: 'Radiographie - 28/12/2023', type: 'Imagerie', date: '2023-12-28', status: 'ready' },
  ];

  const bills = [
    { id: '1', description: 'Consultation Dr. Rousseau', amount: '60€', date: '2024-01-05', status: 'paid' },
    { id: '2', description: 'Analyse de sang', amount: '45€', date: '2024-01-10', status: 'pending' },
  ];

  const recentAppointments = [
    { date: '2024-01-05', doctor: 'Dr. Anne Rousseau', type: 'Consultation', status: 'completed' },
    { date: '2023-12-20', doctor: 'Dr. Jean Dubois', type: 'Suivi', status: 'completed' },
    { date: '2023-12-10', doctor: 'Dr. Anne Rousseau', type: 'Consultation', status: 'completed' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mon espace patient</h1>
          <p className="text-gray-600">Bienvenue Thomas, voici un résumé de votre suivi médical</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" icon={MessageSquare}>Messagerie</Button>
          <Button icon={Calendar}>Prendre RDV</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card padding="md">
          <div className="text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Prochain RDV</p>
            <p className="text-lg font-bold text-gray-900">15 Jan</p>
          </div>
        </Card>
        <Card padding="md">
          <div className="text-center">
            <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Documents</p>
            <p className="text-lg font-bold text-gray-900">{documents.length}</p>
          </div>
        </Card>
        <Card padding="md">
          <div className="text-center">
            <CreditCard className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Factures en attente</p>
            <p className="text-lg font-bold text-gray-900">1</p>
          </div>
        </Card>
        <Card padding="md">
          <div className="text-center">
            <Video className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600">Visio disponible</p>
            <p className="text-lg font-bold text-gray-900">Oui</p>
          </div>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next Appointment */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Prochain rendez-vous</h2>
          <AppointmentCard 
            appointment={nextAppointment}
            onVideoCall={(id) => console.log('Starting video call for', id)}
          />
        </Card>

        {/* Recent Documents */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Documents médicaux</h2>
            <Button variant="ghost" size="sm">Voir tous</Button>
          </div>
          <div className="space-y-3">
            {documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">{doc.name}</p>
                    <p className="text-sm text-gray-600">{doc.type}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="success">Prêt</Badge>
                  <Button variant="outline" size="sm" icon={Download}>
                    Télécharger
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bills and History */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bills */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Factures</h2>
            <Button variant="ghost" size="sm">Voir toutes</Button>
          </div>
          <div className="space-y-3">
            {bills.map((bill) => (
              <div key={bill.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{bill.description}</p>
                  <p className="text-sm text-gray-600">{new Date(bill.date).toLocaleDateString('fr-FR')}</p>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="font-bold text-gray-900">{bill.amount}</span>
                  <Badge variant={bill.status === 'paid' ? 'success' : 'warning'}>
                    {bill.status === 'paid' ? 'Payé' : 'En attente'}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Appointments History */}
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Historique des RDV</h2>
            <Button variant="ghost" size="sm">Voir tout</Button>
          </div>
          <div className="space-y-3">
            {recentAppointments.map((appointment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{appointment.doctor}</p>
                  <p className="text-sm text-gray-600">{appointment.type}</p>
                  <p className="text-xs text-gray-500">{new Date(appointment.date).toLocaleDateString('fr-FR')}</p>
                </div>
                <Badge variant="success">Terminé</Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Actions rapides</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-20 flex-col" icon={Video}>
            <span className="mt-2">Démarrer une visio</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col" icon={MessageSquare}>
            <span className="mt-2">Contacter mon médecin</span>
          </Button>
          <Button variant="outline" className="h-20 flex-col" icon={Calendar}>
            <span className="mt-2">Programmer un RDV</span>
          </Button>
        </div>
      </Card>
    </div>
  );
}