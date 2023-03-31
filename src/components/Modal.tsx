import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import TextButton from './TextButton';
import Card from './Card';
import { useAppSelector } from '../store/hooks';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ isOpen, onClose, children }: PropsWithChildren<Props>) => {
  if (!isOpen) return null;

  const mode = useAppSelector(selectMode);

  const containerEl = document.getElementById('modal') || document.body;
  const modalEl = (
    <div
      className={`fixed top-0 left-0 z-[10000] h-screen w-screen overflow-hidden ${
        mode === ThemeMode.Dark ? 'dark' : ''
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed h-full w-full bg-black/50 dark:bg-black/80"
      />
      {/* Container for modal window */}
      <div className="flex h-full items-center justify-center dark:text-slate-100">
        {/* Modal Window */}
        <Card className="relative m-8 max-h-[calc(100%-2rem)] max-w-[35rem] overflow-auto">
          {children}
        </Card>
      </div>
    </div>
  );

  return createPortal(modalEl, containerEl);
};

export default Modal;
