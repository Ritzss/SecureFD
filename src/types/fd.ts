export interface FDDetails {
  id: string;
  fdNumber: string;
  bankName: string;
  accountNumber: string;
  principalAmount: number;
  interestRate: number;
  startDate: string;
  maturityDate: string;
  maturityAmount: number;
  nominee: string;
}

export interface AuthState {
  fdNumber: string;
  isAuthenticated: boolean;
}