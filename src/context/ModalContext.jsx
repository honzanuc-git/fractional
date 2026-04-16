import { createContext, useContext, useState, useCallback } from 'react';

const ModalContext = createContext(null);

export function ModalProvider({ children }) {
  const [activeModal, setActiveModal] = useState(null); // 'contact' | 'booking' | null

  const openContact = useCallback(() => setActiveModal('contact'), []);
  const openBooking = useCallback(() => setActiveModal('booking'), []);
  const close = useCallback(() => setActiveModal(null), []);

  return (
    <ModalContext.Provider value={{ activeModal, openContact, openBooking, close }}>
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error('useModal must be used within ModalProvider');
  return ctx;
}
