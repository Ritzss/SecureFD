import React from 'react';
import { useForm } from 'react-hook-form';
import { FDDetails } from '../types/fd';
import { useAuth } from '../context/AuthContext';

interface FDFormProps {
  onSubmit: (data: FDDetails) => void;
  initialData?: FDDetails;
}

export const FDForm: React.FC<FDFormProps> = ({ onSubmit, initialData }) => {
  const { auth } = useAuth();
  const { register, handleSubmit, formState: { errors } } = useForm<FDDetails>({
    defaultValues: initialData
  });

  const handleFormSubmit = (data: Omit<FDDetails, 'id' | 'fdNumber'>) => {
    onSubmit({
      ...data,
      id: initialData?.id || '',
      fdNumber: auth.fdNumber
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-300">Your FD Number</label>
        <input
          type="text"
          value={auth.fdNumber}
          disabled
          className="mt-1 block w-full rounded-md bg-neon-darker/50 border-neon-primary/30 text-gray-400 
                   cursor-not-allowed"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Bank Name</label>
        <input
          type="text"
          {...register('bankName', { required: 'Bank name is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.bankName && <p className="text-neon-accent text-sm mt-1">{errors.bankName.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Account Number</label>
        <input
          type="text"
          {...register('accountNumber', { required: 'Account number is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.accountNumber && <p className="text-neon-accent text-sm mt-1">{errors.accountNumber.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Principal Amount</label>
        <input
          type="number"
          {...register('principalAmount', { required: 'Principal amount is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.principalAmount && <p className="text-neon-accent text-sm mt-1">{errors.principalAmount.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Interest Rate (%)</label>
        <input
          type="number"
          step="0.01"
          {...register('interestRate', { required: 'Interest rate is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.interestRate && <p className="text-neon-accent text-sm mt-1">{errors.interestRate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Start Date</label>
        <input
          type="date"
          {...register('startDate', { required: 'Start date is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.startDate && <p className="text-neon-accent text-sm mt-1">{errors.startDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Maturity Date</label>
        <input
          type="date"
          {...register('maturityDate', { required: 'Maturity date is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.maturityDate && <p className="text-neon-accent text-sm mt-1">{errors.maturityDate.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Maturity Amount</label>
        <input
          type="number"
          {...register('maturityAmount', { required: 'Maturity amount is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.maturityAmount && <p className="text-neon-accent text-sm mt-1">{errors.maturityAmount.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300">Nominee Name</label>
        <input
          type="text"
          {...register('nominee', { required: 'Nominee name is required' })}
          className="mt-1 block w-full rounded-md bg-neon-darker border-neon-primary/30 text-gray-100 
                   focus:border-neon-primary focus:ring focus:ring-neon-primary focus:ring-opacity-50"
        />
        {errors.nominee && <p className="text-neon-accent text-sm mt-1">{errors.nominee.message}</p>}
      </div>

      <button
        type="submit"
        className="neon-button w-full"
      >
        {initialData ? 'Update FD Details' : 'Save FD Details'}
      </button>
    </form>
  );
};