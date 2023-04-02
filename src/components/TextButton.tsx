import { motion } from 'framer-motion';
import { scaleOnTap } from '../data/animationSettings';
import { Ref } from 'react';

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
  buttonRef?: Ref<HTMLButtonElement>;
  tabIndex?: number | string;
};

const TextButton = ({ title, className = '', onClick, buttonRef }: Props) => {
  return (
    <motion.button
      className={`h-9 rounded-lg bg-primary-200 px-2 text-xs text-typo-500 transition hover:shadow-lg focus:bg-blue-500 focus:text-white focus:outline-none dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:shadow-none dark:focus:bg-slate-700 ${className}`}
      onClick={onClick}
      ref={buttonRef}
      {...scaleOnTap}
      // whileTap={{ scale: 0.95 }}
      // transition={{ duration: 0.03 }}
    >
      {title}
    </motion.button>
  );
};

export default TextButton;
