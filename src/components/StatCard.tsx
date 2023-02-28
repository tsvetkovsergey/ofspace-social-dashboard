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
      <div>
        <h3 className="text-sm font-medium">{title}</h3>
        <p className="mt-1 text-sm font-extralight text-typo-600">{text}</p>
      </div>
    </div>
  );
};

export default StatCard;
