import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secure-key'; // In a real app, this should be stored securely

export const encryptData = (data: any): string => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
};

export const decryptData = (encryptedData: string): any => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    return null;
  }
};