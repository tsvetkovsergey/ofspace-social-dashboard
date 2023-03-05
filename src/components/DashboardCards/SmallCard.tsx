import SmallCardLayout from './SmallCardLayout';
import { getSmallCardsData } from '../../data/data';
import { useTranslation } from 'react-i18next';

type Props = {
  className?: string;
  cardType: 0 | 1 | 2 | 3;
};

const SmallCard = ({ className, cardType }: Props) => {
  const { t } = useTranslation();

  return (
    <SmallCardLayout
      className={`bg-black bg-contain bg-no-repeat ${className}`}
      data={getSmallCardsData(t)[cardType]}
    />
  );
};

export default SmallCard;
