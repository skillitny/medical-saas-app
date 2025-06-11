export interface User {
  id: string;
  name: string;
  email: string;
  role: 'super_admin' | 'admin' | 'secretary' | 'commercial' | 'pro_health' | 'patient';
  company?: string;
  avatar?: string;
}

export interface Company {
  id: string;
  name: string;
  status: 'active' | 'inactive';
  users: number;
  appointments: number;
  createdAt: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'lead' | 'confirmed' | 'active' | 'inactive';
  assignedTo?: string;
  lastContact: string;
  company: string;
}

export interface Appointment {
  id: string;
  clientName: string;
  clientId: string;
  proHealthId: string;
  proHealthName: string;
  date: string;
  time: string;
  duration: number;
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled';
  type: 'consultation' | 'follow_up' | 'emergency';
  notes?: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}