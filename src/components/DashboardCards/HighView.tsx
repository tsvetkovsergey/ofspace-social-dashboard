import { useDispatch, useSelector } from 'react-redux';
import {
  selectHighViewChart,
  setHighViewChart,
} from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { HighView as HighViewType } from '../../Types/Settings';
import CardHeader from '../CardHeader';
import Select from '../Select';
import SquareButton from '../SquareButton';
import DataGrid from '../DataGrid';
import {
  getHighViewTableColumns,
  highViewTableData,
  highViewCardsData,
} from '../../data/data';
import StatCard from '../StatCard';

import TuneIcon from '@mui/icons-material/Tune';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { useTranslation } from 'react-i18next';
import { TFunction } from 'i18next';

interface PagesActivityPopup extends PopupItem {
  id: HighViewType;
}

const getMenuItems = (t: TFunction): PagesActivityPopup[] => [
  {
    id: HighViewType.Weekly,
    title: t('Weekly'),
  },
  {
    id: HighViewType.Daily,
    title: t('Daily'),
  },
];

const cardStyle =
  'p-2 [&_h3]:text-white [&_h3]:font-bold [&_h3]:text-lg [&_p]:text-white dark:[&_h3]:text-inherit [&_p]:text-opacity-80 hover:opacity-80 dark:border dark:border-transparent dark:hover:border-slate-100 dark:hover:opacity-100 transition';
const iconStyle = { width: '1.5rem', height: '1.5rem', m: '0.5rem' };
const iconContainerStyle = 'bg-white h-10 w-10';
const getCardData = (chartType: HighViewType, t: TFunction) => [
  {
    id: 'c1',
    icon: <VisibilityOutlinedIcon sx={iconStyle} />,
    title: `${highViewCardsData[chartType].totalView} k`,
    text: t('Total view'),
    cardStyle: `bg-primary-700 dark:bg-teal-600 ${cardStyle}`,
    iconStyle: `text-primary-700 dark:bg-blue-50 dark:text-teal-600 ${iconContainerStyle}`,
  },
  {
    id: 'c2',
    icon: <ThumbUpOutlinedIcon sx={iconStyle} />,
    title: `${highViewCardsData[chartType].totalLike} k`,
    text: t('Total like'),
    cardStyle: `bg-secondary-600 dark:bg-slate-600 ${cardStyle}`,
    iconStyle: `text-secondary-600 dark:bg-blue-50 dark:text-slate-600 ${iconContainerStyle}`,
  },
];

const HighView = () => {
  const dispatch = useDispatch();
  const highViewChart = useSelector(selectHighViewChart);
  const { t } = useTranslation();

  const onChangeHandler = (itemId: string) => {
    dispatch(setHighViewChart(itemId as HighViewType));
  };

  return (
    <div>
      <CardHeader title={t('High view design')}>
        <SquareButton icon={<TuneIcon />} />
        {
          <Select
            activeItemID={highViewChart}
            onChange={onChangeHandler}
            options={getMenuItems(t)}
          />
        }
      </CardHeader>
      <div className="mt-3 flex gap-5">
        <div className="flex-1">
          <DataGrid
            columns={getHighViewTableColumns(t)}
            data={highViewTableData[highViewChart]}
            gridStyle="grid-cols-[5fr,5fr,8fr,4fr]"
          />
        </div>
        <div className="flex flex-[0_1_12rem] flex-col justify-evenly gap-2">
          {getCardData(highViewChart, t).map((card) => (
            <StatCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              text={card.text}
              cardStyle={card.cardStyle}
              iconStyle={card.iconStyle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HighView;
