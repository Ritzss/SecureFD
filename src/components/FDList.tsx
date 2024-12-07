import React, { useState } from 'react';
import { FDDetails } from '../types/fd';
import { TrashIcon, PencilIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { maskAccountNumber } from '../utils/maskData';

interface FDListProps {
  fds: FDDetails[];
  onEdit: (fd: FDDetails) => void;
  onDelete: (id: string) => void;
}

export const FDList: React.FC<FDListProps> = ({ fds, onEdit, onDelete }) => {
  const [visibleAccounts, setVisibleAccounts] = useState<Record<string, boolean>>({});

  const toggleAccountVisibility = (id: string) => {
    setVisibleAccounts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold mb-4 neon-text">Your Fixed Deposits</h2>
      <div className="space-y-4">
        {fds.map((fd) => (
          <div key={fd.id} className="neon-border bg-neon-darker/50 p-4 rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-neon-primary">{fd.bankName}</h3>
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-300">
                    Account: {visibleAccounts[fd.id] ? fd.accountNumber : maskAccountNumber(fd.accountNumber)}
                  </p>
                  <button
                    onClick={() => toggleAccountVisibility(fd.id)}
                    className="p-1 text-gray-400 hover:text-neon-primary transition-colors duration-300"
                    aria-label={visibleAccounts[fd.id] ? "Hide account number" : "Show account number"}
                  >
                    {visibleAccounts[fd.id] ? (
                      <EyeSlashIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-300">
                  Amount: ₹{fd.principalAmount.toLocaleString()}
                </p>
                <p className="text-sm text-gray-300">
                  Interest Rate: {fd.interestRate}%
                </p>
                <p className="text-sm text-gray-300">
                  Maturity: ₹{fd.maturityAmount.toLocaleString()} ({new Date(fd.maturityDate).toLocaleDateString()})
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(fd)}
                  className="p-2 text-neon-secondary hover:text-neon-secondary/80 transition-colors duration-300"
                >
                  <PencilIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => onDelete(fd.id)}
                  className="p-2 text-neon-accent hover:text-neon-accent/80 transition-colors duration-300"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
        {fds.length === 0 && (
          <p className="text-center text-gray-400">No FDs added yet</p>
        )}
      </div>
    </div>
  );
};