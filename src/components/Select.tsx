import { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopupItem from '../Types/PopupItem';
import MenuItem from './MenuItem';
import { AnimatePresence, motion } from 'framer-motion';
import { scaleOnTap } from '../data/animationSettings';

type Props = {
  activeItemID: string;
  options: PopupItem[];
  onChange: (itemId: string) => void;
  isNavbar?: boolean;
};

const Select = ({
  activeItemID,
  onChange,
  options,
  isNavbar = false,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const buttonText = options.find((opt) => opt.id === activeItemID)?.title;

  const menuClickHandler = (event: React.MouseEvent) => {
    // Send item ID to parent
    if (
      event.target instanceof HTMLLIElement &&
      typeof event.target.dataset.id === 'string'
    ) {
      const el = event.target as HTMLLIElement;
      onChange(el.dataset.id as string);
      // Close popup menu
      setIsOpen(false);
    }
  };

  // Listen for clicks outside popup menu to close the menu
  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      // Close popup menu only if you clicked
      // outside select button and menu
      if (
        ev.target !== null &&
        selectRef.current !== null &&
        ev.target instanceof Node &&
        !selectRef.current.contains(ev.target)
      ) {
        setIsOpen(false);
      }
    };

    isOpen && document.addEventListener('click', clickHandler);
    !isOpen && document.removeEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [isOpen]);

  const popupMenu = (
    <motion.ul
      className="absolute top-full right-0 z-20 mt-2 origin-top-right cursor-default rounded-lg border-[1px] border-primary-220 bg-primary-200 py-2 text-left text-sm text-typo-700 shadow-lg dark:border-slate-400 dark:bg-slate-500 dark:text-slate-300"
      onClick={menuClickHandler}
      initial={{ opacity: 0, scale: 0, x: 20 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      {options.map((option) => (
        <MenuItem
          key={option.id}
          itemId={option.id}
          isActive={option.id === activeItemID}
        >
          {option.title}
        </MenuItem>
      ))}
    </motion.ul>
  );

  const navbarButtonStyles = `${
    isOpen
      ? 'bg-primary-200 shadow-lg dark:bg-blue-500 dark:text-slate-50 dark:[&_svg]:text-slate-50'
      : 'hover:bg-primary-200 hover:shadow-lg dark:text-slate-400 dark:hover:bg-blue-500 dark:hover:text-slate-50 dark:[&_svg]:text-slate-400 dark:[&:hover_svg]:text-slate-50'
  } relative w-28 flex justify-between items-center rounded-lg px-4 py-2 text-typo-600 transition dark:hover:shadow-none dark:[&_svg]:transition`;

  const standartButtonStyles = `${
    isOpen
      ? 'z-10 shadow-lg dark:bg-slate-700'
      : 'hover:z-10 hover:shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700'
  } relative flex h-8 items-center rounded-lg bg-primary-100 px-2 transition dark:hover:shadow-none`;

  return (
    <div ref={selectRef} className="relative">
      <motion.button
        className={isNavbar ? navbarButtonStyles : standartButtonStyles}
        onClick={() => setIsOpen((currentState) => !currentState)}
        {...scaleOnTap}
      >
        <p
          className={`text-xs ${
            isNavbar ? '' : 'text-typo-500 dark:text-slate-400'
          }`}
        >
          {buttonText}
        </p>
        <ExpandMoreIcon
          className={`text-typo-300 ${isNavbar ? '' : 'dark:text-slate-400'}`}
          sx={
            isNavbar
              ? { height: '1.4rem', width: '1.4rem' }
              : { height: '1.2rem', width: '1.2rem' }
          }
        />
      </motion.button>
      <AnimatePresence>{isOpen && popupMenu}</AnimatePresence>
    </div>
  );
};

export default Select;
