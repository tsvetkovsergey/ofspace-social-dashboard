import SmallCardLayout from './SmallCardLayout';
import HistoryIcon from '@mui/icons-material/History';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

type Props = {
  className?: string;
  cardType: 0 | 1 | 2 | 3;
};

const data = [
  {
    title: 'Accounts reached',
    count: 48,
    percent: 2.5,
    bgStyle: 'bg-account-reached',
    icon: <HistoryIcon />,
  },
  {
    title: 'Accounts engaged',
    count: 29,
    percent: 1.23,
    bgStyle: 'bg-account-engaged',
    icon: <CallMergeIcon />,
  },
  {
    title: 'Average reached',
    count: 50,
    percent: 1.23,
    bgStyle: 'bg-average-reached',
    icon: <ModeStandbyIcon />,
  },
  {
    title: 'Average engaged',
    count: 54,
    percent: -0.12,
    bgStyle: 'bg-average-engaged',
    icon: <ShoppingCartIcon />,
  },
];

const SmallCard = ({ className, cardType }: Props) => {
  return (
    <SmallCardLayout
      className={`bg-black bg-contain bg-no-repeat ${className}`}
      data={data[cardType]}
    />
  );
};

export default SmallCard;
