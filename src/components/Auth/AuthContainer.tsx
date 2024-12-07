import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthContainer: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return isLogin ? (
    <LoginForm onToggle={toggleForm} />
  ) : (
    <RegisterForm onToggle={toggleForm} />
  );
};