import React from 'react';
import { Calendar, Clock, User, Video, Phone } from 'lucide-react';
import { Appointment } from '../../types';
import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';

interface AppointmentCardProps {
  appointment: Appointment;
  showActions?: boolean;
  onVideoCall?: (appointmentId: string) => void;
  onReschedule?: (appointmentId: string) => void;
}

export function AppointmentCard({ 
  appointment, 
  showActions = true, 
  onVideoCall, 
  onReschedule 
}: AppointmentCardProps) {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'confirmed': return 'success';
      case 'scheduled': return 'info';
      case 'completed': return 'default';
      case 'cancelled': return 'error';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmé';
      case 'scheduled': return 'Programmé';
      case 'completed': return 'Terminé';
      case 'cancelled': return 'Annulé';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{appointment.clientName}</h3>
            <p className="text-sm text-gray-600">{appointment.proHealthName}</p>
          </div>
        </div>
        <Badge variant={getStatusVariant(appointment.status)}>
          {getStatusLabel(appointment.status)}
        </Badge>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          <span>{new Date(appointment.date).toLocaleDateString('fr-FR')}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>{appointment.time} ({appointment.duration} min)</span>
        </div>
      </div>

      {appointment.notes && (
        <div className="mb-4">
          <p className="text-sm text-gray-700">{appointment.notes}</p>
        </div>
      )}

      {showActions && appointment.status === 'confirmed' && (
        <div className="flex space-x-2">
          <Button
            variant="primary"
            size="sm"
            icon={Video}
            onClick={() => onVideoCall?.(appointment.id)}
          >
            Démarrer visio
          </Button>
          <Button
            variant="outline"
            size="sm"
            icon={Phone}
            onClick={() => onReschedule?.(appointment.id)}
          >
            Reporter
          </Button>
        </div>
      )}
    </div>
  );
}