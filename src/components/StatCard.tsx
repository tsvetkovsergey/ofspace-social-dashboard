type Props = {
  icon: JSX.Element;
  title: string;
  text: string;
  cardStyle?: string;
  iconStyle?: string;
};

const StatCard = ({ icon, title, text, cardStyle, iconStyle }: Props) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl bg-white p-4 shadow-lg ${cardStyle}`}
    >
      <i
        className={`mr-1 flex h-11 w-11 items-center justify-center overflow-hidden rounded-full ${iconStyle}`}
      >
        {icon}
      </i>
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-sm font-extralight text-typo-600">{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
