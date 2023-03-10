import RoundIcon from './RoundIcon';

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
      className={`flex items-center gap-2 rounded-xl p-4 shadow-lg ${cardStyle}`}
    >
      <RoundIcon icon={icon} iconStyle={iconStyle} />
      <div className="flex flex-col justify-between text-sm">
        <h3 className="font-medium">{title}</h3>
        <p className="font-extralight text-typo-600">{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
