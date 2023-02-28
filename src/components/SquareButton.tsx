type Props = {
  icon: JSX.Element;
};

const SquareButton = ({ icon }: Props) => {
  return (
    <button className="h-8 rounded-lg bg-primary-100 px-2 text-primary-700 transition hover:shadow-lg dark:bg-slate-800 dark:text-blue-500 dark:hover:bg-slate-700 dark:hover:shadow-none [&>svg]:h-6">
      {icon}
    </button>
  );
};

export default SquareButton;
