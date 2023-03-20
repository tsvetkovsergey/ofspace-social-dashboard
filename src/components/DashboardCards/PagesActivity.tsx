import { useDispatch, useSelector } from 'react-redux';
import {
  selectPagesActivityChart,
  setPagesActivityChart,
} from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { PagesActivity as PagesActivityType } from '../../Types/Settings';
import CardHeader from '../CardHeader';
import Select from '../Select';
import PagesActivityChart from './Charts/PagesActivityChart';
import { getPagesActivityChartData } from '../../data/data';
import useNotNullableTranslation, {
  NNTFunction,
} from '../../hooks/useNotNullableTranslation';

interface PagesActivityPopup extends PopupItem {
  id: PagesActivityType;
}

const getMenuItems = (t: NNTFunction): PagesActivityPopup[] => [
  {
    id: PagesActivityType.Monthly,
    title: t('Monthly'),
  },
  {
    id: PagesActivityType.Daily,
    title: t('Daily'),
  },
];

const PagesActivity = () => {
  const dispatch = useDispatch();
  const pagesActivityChart = useSelector(selectPagesActivityChart);
  const { t } = useNotNullableTranslation();

  const onChangeHandler = (itemId: string) => {
    dispatch(setPagesActivityChart(itemId as PagesActivityType));
  };

  return (
    <div>
      <CardHeader title={t('Activity on the pages')}>
        {
          <Select
            activeItemID={pagesActivityChart}
            onChange={onChangeHandler}
            options={getMenuItems(t)}
          />
        }
      </CardHeader>
      <div className="flex gap-6 text-sm text-typo-600 dark:text-inherit">
        <p className="flex items-center before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-primary-700 dark:before:bg-fuchsia-700">
          {t('Viewers')}
        </p>
        <p className="flex items-center before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-secondary-500 dark:before:bg-fuchsia-200">
          {t('Followers')}
        </p>
      </div>
      <div id="pagesActivityChartContainer" className="h-40 w-full">
        <PagesActivityChart
          // data={pagesActivityChartData[pagesActivityChart]}
          data={getPagesActivityChartData(t, pagesActivityChart)}
          type={pagesActivityChart}
        />
      </div>
    </div>
  );
};

export default PagesActivity;
