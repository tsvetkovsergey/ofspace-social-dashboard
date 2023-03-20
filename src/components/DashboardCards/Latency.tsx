import { useDispatch, useSelector } from 'react-redux';
import { selectLatencyChart, setLatencyChart } from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { Latency as LatencyType } from '../../Types/Settings';
import CardHeader from '../CardHeader';
import Select from '../Select';
import LatencyChart from './Charts/LatencyChart';
import { latencyChartData } from '../../data/data';
import useNotNullableTranslation, {
  NNTFunction,
} from '../../hooks/useNotNullableTranslation';

interface PagesActivityPopup extends PopupItem {
  id: LatencyType;
}

const getMenuItems = (t: NNTFunction): PagesActivityPopup[] => [
  {
    id: LatencyType.Weekly,
    title: t('Weekly'),
  },
  {
    id: LatencyType.Daily,
    title: t('Daily'),
  },
];

const Latency = () => {
  const dispatch = useDispatch();
  const latencyChart = useSelector(selectLatencyChart);
  const { t } = useNotNullableTranslation();

  const onChangeHandler = (itemId: string) => {
    dispatch(setLatencyChart(itemId as LatencyType));
  };

  return (
    <div>
      <CardHeader title={t('Latency contribution')}>
        {
          <Select
            activeItemID={latencyChart}
            onChange={onChangeHandler}
            options={getMenuItems(t)}
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
