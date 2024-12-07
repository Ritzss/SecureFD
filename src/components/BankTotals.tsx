import React from 'react';
import { BankTotal } from '../utils/calculations';
import { ChartBarIcon } from '@heroicons/react/24/outline';

interface BankTotalsProps {
  totals: BankTotal[];
}

export const BankTotals: React.FC<BankTotalsProps> = ({ totals }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <ChartBarIcon className="h-5 w-5 text-neon-secondary" />
        <h2 className="text-xl font-semibold text-neon-secondary">Bank-wise FD Summary</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {totals.map((bank) => (
          <div
            key={bank.bankName}
            className="p-4 neon-border bg-neon-darker/50 rounded-lg"
          >
            <h3 className="text-lg font-medium text-neon-primary mb-2">
              {bank.bankName}
            </h3>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">
                Total FDs: <span className="text-neon-secondary">{bank.fdCount}</span>
              </p>
              <p className="text-gray-300">
                Principal Amount: <span className="text-neon-secondary">₹{bank.totalPrincipal.toLocaleString()}</span>
              </p>
              <p className="text-gray-300">
                Maturity Amount: <span className="text-neon-secondary">₹{bank.totalMaturity.toLocaleString()}</span>
              </p>
              <p className="text-gray-300">
                Expected Gain: <span className="text-neon-accent">₹{(bank.totalMaturity - bank.totalPrincipal).toLocaleString()}</span>
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-xs text-gray-400 font-medium">Individual FDs:</p>
                {bank.fds.map((fd) => (
                  <div key={fd.id} className="text-xs bg-neon-darker/30 p-2 rounded">
                    <p>Principal: ₹{fd.principalAmount.toLocaleString()}</p>
                    <p>Maturity: ₹{fd.maturityAmount.toLocaleString()}</p>
                    <p>Interest: {fd.interestRate}%</p>
                    <p className="text-gray-400">
                      {new Date(fd.startDate).toLocaleDateString()} - {new Date(fd.maturityDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};