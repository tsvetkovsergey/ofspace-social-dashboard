import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import Card from './Card';
import { useAppSelector } from '../store/hooks';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';
import { motion } from 'framer-motion';

type Props = {
  onClose: () => void;
};

const Modal = ({ onClose, children }: PropsWithChildren<Props>) => {
  // if (!isOpen) return null;

  const mode = useAppSelector(selectMode);

  const containerEl = document.getElementById('modal') || document.body;
  const modalEl = (
    <motion.div
      className={`fixed top-0 left-0 z-[10000] h-screen w-screen overflow-hidden ${
        mode === ThemeMode.Dark ? 'dark' : ''
      }`}
      key="modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed h-full w-full bg-black/50 dark:bg-black/80"
      />
      {/* Container for modal window */}
      <motion.div
        className="flex h-full items-center justify-center dark:text-slate-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: 30 }}
      >
        {/* Modal Window */}
        <Card className="relative m-8 max-h-[calc(100%-2rem)] max-w-[35rem] overflow-auto">
          {children}
        </Card>
      </motion.div>
    </motion.div>
  );

  return createPortal(modalEl, containerEl);
};

export default Modal;
