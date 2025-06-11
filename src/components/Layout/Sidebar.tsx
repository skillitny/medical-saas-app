import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Calendar,
  MessageSquare,
  FileText,
  Bell,
  Settings,
  Building2,
  BarChart3,
  UserCheck,
  Clock,
  Video,
  CreditCard
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  roles: string[];
}

const navigationItems: NavItem[] = [
  {
    name: 'Tableau de bord',
    href: '/dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    roles: ['super_admin', 'admin', 'secretary', 'commercial', 'pro_health', 'patient']
  },
  {
    name: 'Sociétés',
    href: '/companies',
    icon: <Building2 className="w-5 h-5" />,
    roles: ['super_admin']
  },
  {
    name: 'Statistiques globales',
    href: '/global-stats',
    icon: <BarChart3 className="w-5 h-5" />,
    roles: ['super_admin']
  },
  {
    name: 'Clients',
    href: '/clients',
    icon: <Users className="w-5 h-5" />,
    roles: ['admin', 'secretary', 'commercial']
  },
  {
    name: 'Affectation des leads',
    href: '/leads',
    icon: <UserCheck className="w-5 h-5" />,
    roles: ['admin']
  },
  {
    name: 'Pipeline des leads',
    href: '/pipeline',
    icon: <UserCheck className="w-5 h-5" />,
    roles: ['commercial']
  },
  {
    name: 'RDV / Planning',
    href: '/appointments',
    icon: <Calendar className="w-5 h-5" />,
    roles: ['admin', 'secretary', 'pro_health']
  },
  {
    name: 'Mon agenda',
    href: '/my-schedule',
    icon: <Clock className="w-5 h-5" />,
    roles: ['pro_health']
  },
  {
    name: 'Mes RDV',
    href: '/my-appointments',
    icon: <Calendar className="w-5 h-5" />,
    roles: ['patient']
  },
  {
    name: 'Visioconférence',
    href: '/video-calls',
    icon: <Video className="w-5 h-5" />,
    roles: ['pro_health', 'patient']
  },
  {
    name: 'Messagerie',
    href: '/messages',
    icon: <MessageSquare className="w-5 h-5" />,
    roles: ['admin', 'secretary', 'commercial', 'pro_health', 'patient']
  },
  {
    name: 'Documents',
    href: '/documents',
    icon: <FileText className="w-5 h-5" />,
    roles: ['admin', 'secretary', 'pro_health', 'patient']
  },
  {
    name: 'Factures',
    href: '/billing',
    icon: <CreditCard className="w-5 h-5" />,
    roles: ['patient']
  },
  {
    name: 'Notifications',
    href: '/notifications',
    icon: <Bell className="w-5 h-5" />,
    roles: ['admin', 'secretary', 'commercial', 'pro_health', 'patient']
  },
  {
    name: 'Paramètres',
    href: '/settings',
    icon: <Settings className="w-5 h-5" />,
    roles: ['super_admin', 'admin', 'patient']
  }
];

export function Sidebar() {
  const { user } = useAuth();
  const location = useLocation();

  const filteredItems = navigationItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {filteredItems.map((item) => {
          const isActive = location.pathname === item.href;
          return (
            <Link
              key={item.name}
              to={item.href}
              className={`
                flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors
                ${isActive
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                }
              `}
            >
              <span className={isActive ? 'text-blue-700' : 'text-gray-400'}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}