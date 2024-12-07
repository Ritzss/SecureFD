import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { generateFDNumber } from '../../utils/fdNumber';
import { toast } from 'react-hot-toast';

interface RegisterFormData {
  name: string;
  email: string;
}

export const RegisterForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>();

  const onSubmit = (data: RegisterFormData) => {
    const fdNumber = generateFDNumber();
    const users = JSON.parse(localStorage.getItem('fd_users') || '[]');
    
    users.push({
      ...data,
      fdNumber,
      createdAt: new Date().toISOString()
    });
    
    localStorage.setItem('fd_users', JSON.stringify(users));
    login(fdNumber);
    toast.success('Registration successful! Your FD Number has been generated.');
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 neon-border bg-neon-darker/50 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 neon-text">Register New Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">Full Name</label>
          <input
            type="text"
            {...register('name', { 
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Name must be at least 2 characters'
              }
            })}
            className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                     focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-neon-accent text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300">Email Address</label>
          <input
            type="email"
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
            className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                     focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-neon-accent text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <button type="submit" className="neon-button w-full">
          Register
        </button>

        <p className="text-center text-gray-400 text-sm">
          Already have an FD Number?{' '}
          <button
            type="button"
            onClick={onToggle}
            className="text-neon-primary hover:text-neon-primary/80 underline"
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};