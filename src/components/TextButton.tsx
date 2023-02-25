type Props = {
  title: string;
  className?: string;
  onClick?: () => void;
};

const TextButton = ({ title, className = '', onClick }: Props) => {
  return (
    <button
      className={`${className} h-9 rounded-lg bg-primary-200 px-2 text-xs text-typo-500 transition hover:shadow-lg dark:bg-slate-800 dark:hover:bg-slate-700 dark:hover:shadow-none`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TextButton;
