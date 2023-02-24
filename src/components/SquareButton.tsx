type Props = {
  icon: JSX.Element;
};

const SquareButton = ({ icon }: Props) => {
  return (
    <button className="h-8 rounded-lg bg-primary-100 px-2 text-primary-700 transition hover:shadow-lg [&>svg]:h-6">
      {icon}
    </button>
  );
};

export default SquareButton;
