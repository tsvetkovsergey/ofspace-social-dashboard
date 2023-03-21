import { motion } from 'framer-motion';
import { scaleOnTapSmallButtons } from '../data/animationSettings';

type Props = {
  className?: string;
  icon: JSX.Element;
  onClick?: () => void;
};

const IconButton = ({ className = '', icon, onClick }: Props) => {
  return (
    <motion.button
      className={`${className} flex h-9 w-9 items-center justify-center rounded-full bg-primary-200 transition hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-400 dark:hover:shadow-none`}
      onClick={onClick}
      {...scaleOnTapSmallButtons}
    >
      {icon}
    </motion.button>
  );
};

export default IconButton;
