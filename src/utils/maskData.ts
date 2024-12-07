export const maskAccountNumber = (accountNumber: string): string => {
  if (!accountNumber) return '';
  const length = accountNumber.length;
  const visibleDigits = 4;
  const maskedPortion = '*'.repeat(Math.max(0, length - visibleDigits));
  return maskedPortion + accountNumber.slice(-visibleDigits);
};