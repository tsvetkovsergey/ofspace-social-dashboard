import { useDispatch, useSelector } from 'react-redux';
import { selectLatencyChart, setLatencyChart } from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { Latency as LatencyType } from '../../Types/Settings';
import CardHeader from '../CardHeader';
import Select from '../Select';
import LatencyChart from './LatencyChart';
import { latencyChartData } from '../../data/data';

interface PagesActivityPopup extends PopupItem {
  id: LatencyType;
}

const menuItems: PagesActivityPopup[] = [
  {
    id: LatencyType.Weekly,
    title: 'Weekly',
  },
  {
    id: LatencyType.Daily,
    title: 'Daily',
  },
];

const Latency = () => {
  const dispatch = useDispatch();
  const latencyChart = useSelector(selectLatencyChart);

  const onChangeHandler = (itemId: string) => {
    dispatch(setLatencyChart(itemId as LatencyType));
  };

  return (
    <div>
      <CardHeader title="Latency contribution">
        {
          <Select
            activeItemID={latencyChart}
            onChange={onChangeHandler}
            options={menuItems}
          />
        }
      </CardHeader>
      <div className="h-48 w-full">
        <LatencyChart
          data={latencyChartData[latencyChart]}
          type={latencyChart}
        />
      </div>
    </div>
  );
};

export default Latency;
