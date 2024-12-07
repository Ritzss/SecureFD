import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthState } from '../types/fd';

interface AuthContextType {
  auth: AuthState;
  login: (fdNumber: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [auth, setAuth] = useState<AuthState>(() => {
    const stored = localStorage.getItem('fd_auth');
    return stored ? JSON.parse(stored) : { fdNumber: '', isAuthenticated: false };
  });

  useEffect(() => {
    localStorage.setItem('fd_auth', JSON.stringify(auth));
  }, [auth]);

  const login = (fdNumber: string) => {
    setAuth({ fdNumber, isAuthenticated: true });
  };

  const logout = () => {
    setAuth({ fdNumber: '', isAuthenticated: false });
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};