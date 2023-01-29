import { SvgIconTypeMap } from '@mui/material';

type Props = {
  className?: string;
  icon: JSX.Element;
};

const IconButton = ({ className = '', icon }: Props) => {
  return (
    <button
      className={`${className} h-9 w-9 rounded-full bg-primary-200 hover:shadow-lg`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
