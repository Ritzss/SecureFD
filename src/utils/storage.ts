import { FDDetails } from '../types/fd';
import { encryptData, decryptData } from './encryption';

const STORAGE_KEY = 'fd_details';

export const saveFDDetails = (fdDetails: FDDetails[]): void => {
  const encryptedData = encryptData(fdDetails);
  localStorage.setItem(STORAGE_KEY, encryptedData);
};

export const getFDDetails = (): FDDetails[] => {
  const encryptedData = localStorage.getItem(STORAGE_KEY);
  if (!encryptedData) return [];
  
  const decryptedData = decryptData(encryptedData);
  return decryptedData || [];
};