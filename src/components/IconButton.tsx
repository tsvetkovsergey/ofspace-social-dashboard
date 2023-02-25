import { SvgIconTypeMap } from '@mui/material';

type Props = {
  className?: string;
  icon: JSX.Element;
  onClick?: () => void;
};

const IconButton = ({ className = '', icon, onClick }: Props) => {
  return (
    <button
      className={`${className} flex h-9 w-9 items-center justify-center rounded-full bg-primary-200 transition hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-400 dark:hover:shadow-none`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
