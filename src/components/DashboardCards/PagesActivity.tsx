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
import { pagesActivityChartData } from '../../data/data';

interface PagesActivityPopup extends PopupItem {
  id: PagesActivityType;
}

const menuItems: PagesActivityPopup[] = [
  {
    id: PagesActivityType.Monthly,
    title: 'Monthly',
  },
  {
    id: PagesActivityType.Daily,
    title: 'Daily',
  },
];

const PagesActivity = () => {
  const dispatch = useDispatch();
  const pagesActivityChart = useSelector(selectPagesActivityChart);

  const onChangeHandler = (itemId: string) => {
    dispatch(setPagesActivityChart(itemId as PagesActivityType));
  };

  return (
    <div>
      <CardHeader title="Activity on the pages">
        {
          <Select
            activeItemID={pagesActivityChart}
            onChange={onChangeHandler}
            options={menuItems}
          />
        }
      </CardHeader>
      <div className="flex gap-6 text-sm text-typo-600 dark:text-inherit">
        <p className="flex items-center before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-primary-700 dark:before:bg-fuchsia-700">
          Viewers
        </p>
        <p className="flex items-center before:mr-2 before:h-3 before:w-3 before:rounded-full before:bg-secondary-500 dark:before:bg-fuchsia-200">
          Followers
        </p>
      </div>
      <div id="pagesActivityChartContainer" className="h-40 w-full">
        <PagesActivityChart
          data={pagesActivityChartData[pagesActivityChart]}
          type={pagesActivityChart}
        />
      </div>
    </div>
  );
};

export default PagesActivity;
