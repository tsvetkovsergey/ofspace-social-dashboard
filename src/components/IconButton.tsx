import { SvgIconTypeMap } from '@mui/material';

type Props = {
  className?: string;
  icon: JSX.Element;
  onClick?: () => void;
};

const IconButton = ({ className = '', icon, onClick }: Props) => {
  return (
    <button
      className={`${className} h-9 w-9 rounded-full bg-primary-200 transition hover:shadow-lg`}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default IconButton;
