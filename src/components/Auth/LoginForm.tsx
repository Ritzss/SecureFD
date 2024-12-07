import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-hot-toast';

interface LoginFormData {
  fdNumber: string;
}

export const LoginForm: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const { login } = useAuth();
  const { register, handleSubmit, formState: { errors }, setError } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    const users = JSON.parse(localStorage.getItem('fd_users') || '[]');
    const user = users.find((u: any) => u.fdNumber === data.fdNumber);

    if (!user) {
      setError('fdNumber', {
        type: 'manual',
        message: 'Invalid FD number. Please check and try again.'
      });
      return;
    }

    login(data.fdNumber);
    toast.success('Successfully logged in!');
  };

  return (
    <div className="max-w-md mx-auto mt-16 p-6 neon-border bg-neon-darker/50 rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6 neon-text">Enter Your FD Number</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-300">FD Number</label>
          <input
            type="text"
            {...register('fdNumber', { 
              required: 'FD number is required',
              pattern: {
                value: /^FD[A-Za-z0-9]{8,}$/,
                message: 'Invalid FD number format'
              }
            })}
            className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                     focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
            placeholder="Enter your FD number"
          />
          {errors.fdNumber && (
            <p className="text-neon-accent text-sm mt-1">{errors.fdNumber.message}</p>
          )}
        </div>
        <button type="submit" className="neon-button w-full">
          Access FD Details
        </button>

        <p className="text-center text-gray-400 text-sm">
          Don't have an FD Number?{' '}
          <button
            type="button"
            onClick={onToggle}
            className="text-neon-primary hover:text-neon-primary/80 underline"
          >
            Register here
          </button>
        </p>
      </form>
    </div>
  );
};