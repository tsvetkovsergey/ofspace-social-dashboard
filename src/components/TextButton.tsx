import { motion } from 'framer-motion';
import { scaleOnTap } from '../data/animationSettings';

type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const TextButton = ({ title, className = '', onClick }: Props) => {
  return (
    <motion.button
      className={`h-9 rounded-lg bg-primary-200 px-2 text-xs text-typo-500 transition hover:shadow-lg dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:shadow-none ${className}`}
      onClick={onClick}
      {...scaleOnTap}
      // whileTap={{ scale: 0.95 }}
      // transition={{ duration: 0.03 }}
    >
      {title}
    </motion.button>
  );
};

export default TextButton;
