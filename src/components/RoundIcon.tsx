type Props = {
  icon: JSX.Element;
  iconStyle?: string;
  isInNavbar?: boolean;
};

const RoundIcon = ({ icon, iconStyle, isInNavbar = false }: Props) => {
  return (
    <i
      className={`mr-1 flex ${
        isInNavbar ? 'h-10 w-10 [&>img]:top-1' : 'h-11 w-11 [&>img]:top-2'
      } items-center justify-center overflow-hidden rounded-full [&>img]:relative ${iconStyle}`}
    >
      {icon}
    </i>
  );
};

export default RoundIcon;
