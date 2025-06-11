import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  switchRole: (role: User['role']) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock users for demo
const mockUsers: Record<string, User> = {
  'superadmin@demo.com': {
    id: '1',
    name: 'Sophie Martin',
    email: 'superadmin@demo.com',
    role: 'super_admin',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=150'
  },
  'admin@demo.com': {
    id: '2',
    name: 'Dr. Jean Dubois',
    email: 'admin@demo.com',
    role: 'admin',
    company: 'Clinique du Centre',
    avatar: 'https://images.pexels.com/photos/612807/pexels-photo-612807.jpeg?w=150'
  },
  'secretary@demo.com': {
    id: '3',
    name: 'Marie Lefebvre',
    email: 'secretary@demo.com',
    role: 'secretary',
    company: 'Clinique du Centre',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?w=150'
  },
  'commercial@demo.com': {
    id: '4',
    name: 'Pierre Moreau',
    email: 'commercial@demo.com',
    role: 'commercial',
    company: 'Clinique du Centre',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?w=150'
  },
  'doctor@demo.com': {
    id: '5',
    name: 'Dr. Anne Rousseau',
    email: 'doctor@demo.com',
    role: 'pro_health',
    company: 'Clinique du Centre',
    avatar: 'https://images.pexels.com/photos/559669/pexels-photo-559669.jpeg?w=150'
  },
  'patient@demo.com': {
    id: '6',
    name: 'Thomas Bernard',
    email: 'patient@demo.com',
    role: 'patient',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=150'
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Mock authentication
    const foundUser = mockUsers[email];
    if (foundUser) {
      setUser(foundUser);
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    setUser(null);
  };

  const switchRole = (role: User['role']) => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}