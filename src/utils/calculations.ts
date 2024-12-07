import { FDDetails } from '../types/fd';

export interface BankTotal {
  bankName: string;
  totalPrincipal: number;
  totalMaturity: number;
  fdCount: number;
  fds: {
    id: string;
    principalAmount: number;
    maturityAmount: number;
    interestRate: number;
    startDate: string;
    maturityDate: string;
  }[];
}

export const calculateBankTotals = (fds: FDDetails[]): BankTotal[] => {
  const bankMap = new Map<string, BankTotal>();

  fds.forEach((fd) => {
    const existing = bankMap.get(fd.bankName);
    
    const fdSummary = {
      id: fd.id,
      principalAmount: Number(fd.principalAmount),
      maturityAmount: Number(fd.maturityAmount),
      interestRate: Number(fd.interestRate),
      startDate: fd.startDate,
      maturityDate: fd.maturityDate,
    };

    if (existing) {
      // Check if this FD is already counted
      const isDuplicate = existing.fds.some(existingFd => existingFd.id === fd.id);
      
      if (!isDuplicate) {
        bankMap.set(fd.bankName, {
          bankName: fd.bankName,
          totalPrincipal: existing.totalPrincipal + fdSummary.principalAmount,
          totalMaturity: existing.totalMaturity + fdSummary.maturityAmount,
          fdCount: existing.fdCount + 1,
          fds: [...existing.fds, fdSummary],
        });
      }
    } else {
      bankMap.set(fd.bankName, {
        bankName: fd.bankName,
        totalPrincipal: fdSummary.principalAmount,
        totalMaturity: fdSummary.maturityAmount,
        fdCount: 1,
        fds: [fdSummary],
      });
    }
  });

  return Array.from(bankMap.values());
};