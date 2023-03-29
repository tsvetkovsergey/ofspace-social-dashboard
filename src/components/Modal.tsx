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
  title?: string;
  text?: string;
};

const Modal = ({
  isOpen,
  onClose,
  title,
  text,
  children,
}: PropsWithChildren<Props>) => {
  if (!isOpen) return null;

  const mode = useAppSelector(selectMode);

  const containerEl = document.getElementById('modal') || document.body;
  const modalEl = (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-screen overflow-hidden ${
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
          <div>
            <h3 className="pb-4 text-lg font-semibold">{title}</h3>
            <p>{text}</p>
            <div className="mt-16 text-right">
              {/* <button onClick={onClose}>Close</button> */}
              <TextButton
                onClick={onClose}
                title="Close"
                className="text-base"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );

  return createPortal(modalEl, containerEl);
};

export default Modal;
