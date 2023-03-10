type Props = {
  icon: JSX.Element;
  iconStyle?: string;
};

const RoundIcon = ({ icon, iconStyle }: Props) => {
  return (
    <i
      className={`mr-1 flex items-center justify-center overflow-hidden rounded-full [&>img]:relative ${iconStyle}`}
    >
      {icon}
    </i>
  );
};

export default RoundIcon;
