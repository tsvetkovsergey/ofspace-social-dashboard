import SmallCardLayout from './SmallCardLayout';
import { getSmallCardsData } from '../../data/data';
import useNotNullableTranslation from '../../hooks/useNotNullableTranslation';

type Props = {
  className?: string;
  cardType: 0 | 1 | 2 | 3;
};

const SmallCard = ({ className, cardType }: Props) => {
  const { t } = useNotNullableTranslation();

  return (
    <SmallCardLayout
      className={`bg-black bg-contain bg-no-repeat ${className}`}
      data={getSmallCardsData(t)[cardType]}
    />
  );
};

export default SmallCard;
