import React from 'react';
import { FDForm } from '../components/FDForm';
import { FDList } from '../components/FDList';
import { BankTotals } from '../components/BankTotals';
import { AuthContainer } from '../components/Auth/AuthContainer';
import { FDDetails } from '../types/fd';
import { saveFDDetails, getFDDetails } from '../utils/storage';
import { calculateBankTotals } from '../utils/calculations';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-hot-toast';

export const Dashboard: React.FC = () => {
  const { auth, logout } = useAuth();
  const [fds, setFds] = React.useState<FDDetails[]>([]);
  const [editingFd, setEditingFd] = React.useState<FDDetails | null>(null);

  React.useEffect(() => {
    if (auth.isAuthenticated) {
      const storedFds = getFDDetails().filter(fd => fd.fdNumber === auth.fdNumber);
      setFds(storedFds);
    }
  }, [auth.fdNumber, auth.isAuthenticated]);

  const handleSubmit = (data: FDDetails) => {
    const allFds = getFDDetails();
    const updatedFds = editingFd
      ? allFds.map((fd) => (fd.id === editingFd.id ? { ...data, id: fd.id } : fd))
      : [...allFds, { ...data, id: Date.now().toString() }];

    setFds(updatedFds.filter(fd => fd.fdNumber === auth.fdNumber));
    saveFDDetails(updatedFds);
    setEditingFd(null);
    toast.success(editingFd ? 'FD updated successfully!' : 'FD added successfully!');
  };

  const handleEdit = (fd: FDDetails) => {
    setEditingFd(fd);
  };

  const handleDelete = (id: string) => {
    const allFds = getFDDetails();
    const updatedFds = allFds.filter((fd) => fd.id !== id);
    setFds(updatedFds.filter(fd => fd.fdNumber === auth.fdNumber));
    saveFDDetails(updatedFds);
    toast.success('FD deleted successfully!');
  };

  if (!auth.isAuthenticated) {
    return <AuthContainer />;
  }

  const bankTotals = calculateBankTotals(fds);

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold neon-text">
          Manage Your Fixed Deposits
        </h1>
        <button
          onClick={logout}
          className="px-4 py-2 text-sm rounded-md border border-neon-accent text-neon-accent hover:bg-neon-accent/10"
        >
          Logout
        </button>
      </div>

      <BankTotals totals={bankTotals} />

      <div className="bg-neon-darker rounded-lg neon-border p-6">
        <h2 className="text-xl font-semibold mb-4 text-neon-secondary">
          {editingFd ? 'Edit FD Details' : 'Add New FD'}
        </h2>
        <FDForm onSubmit={handleSubmit} initialData={editingFd || undefined} />
      </div>
      <FDList fds={fds} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};