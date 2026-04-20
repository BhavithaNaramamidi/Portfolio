import React, { createContext, useContext, useState, useCallback } from 'react';
import ResumeModal from '../components/ResumeModal';

const ResumeCtx = createContext({ open: () => {}, close: () => {} });

export const useResume = () => useContext(ResumeCtx);

export const ResumeProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);
  return (
    <ResumeCtx.Provider value={{ open: openModal, close: closeModal }}>
      {children}
      <ResumeModal open={open} onClose={closeModal} />
    </ResumeCtx.Provider>
  );
};
