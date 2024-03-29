import { useDispatch, useSelector } from 'react-redux';
import {
  selectHighViewChart,
  selectHighViewGrid,
  setHighViewChart,
} from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { HighView as HighViewType } from '../../Types/Settings';
import CardHeader from '../CardHeader';
import Select from '../Select';
import SquareButton from '../SquareButton';
import DataGrid from '../DataGrid';
import {
  highViewTableColumns,
  highViewTableData,
  highViewCardsData,
} from '../../data/data';
import StatCard from '../StatCard';

import TuneIcon from '@mui/icons-material/Tune';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { TFunction } from 'i18next';
import useNotNullableTranslation, {
  NNTFunction,
} from '../../hooks/useNotNullableTranslation';

interface PagesActivityPopup extends PopupItem {
  id: HighViewType;
}

const getMenuItems = (t: NNTFunction): PagesActivityPopup[] => [
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
const iconStyle = { width: '1.5rem', height: '1.5rem' };
const iconContainerStyle = 'bg-white h-10 w-10';
const getCardData = (chartType: HighViewType, t: NNTFunction) => [
  {
    id: 'c1',
    icon: <VisibilityOutlinedIcon sx={iconStyle} />,
    title: `${highViewCardsData[chartType].totalView} k`,
    text: t('Total view'),
    cardStyle: `h-16 bg-primary-700 dark:bg-teal-600 ${cardStyle}`,
    iconStyle: `text-primary-700 dark:bg-blue-50 dark:text-teal-600 ${iconContainerStyle}`,
  },
  {
    id: 'c2',
    icon: <ThumbUpOutlinedIcon sx={iconStyle} />,
    title: `${highViewCardsData[chartType].totalLike} k`,
    text: t('Total like'),
    cardStyle: `h-16 bg-secondary-600 dark:bg-slate-600 ${cardStyle}`,
    iconStyle: `text-secondary-600 dark:bg-blue-50 dark:text-slate-600 ${iconContainerStyle}`,
  },
];

const HighView = () => {
  const dispatch = useDispatch();
  const highViewChart = useSelector(selectHighViewChart);
  const gridActiveColumns = useSelector(selectHighViewGrid);
  const { t } = useNotNullableTranslation();

  const columns = highViewTableColumns.filter(
    (col) => gridActiveColumns[col.id]
  );

  // const columns = useMemo(() => getHighViewTableColumns(t), [t]);

  const onChangeHandler = (itemId: string) => {
    dispatch(setHighViewChart(itemId as HighViewType));
  };

  return (
    <div>
      <CardHeader title={t('High view design')}>
        <SquareButton
          icon={<TuneIcon />}
          columns={highViewTableColumns}
          activeColumns={gridActiveColumns}
        />
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
            columns={columns}
            data={highViewTableData[highViewChart]}
            // gridStyle="5fr 5fr 8fr 4fr"
            gridStyle={columns.reduce((acc, { grid }) => `${acc} ${grid}`, '')}
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
