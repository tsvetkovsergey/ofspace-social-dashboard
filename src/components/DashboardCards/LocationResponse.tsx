import { useDispatch, useSelector } from 'react-redux';

import {
  selectResponseTimeChart,
  setResponseTimeChart,
} from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { ResponseTime } from '../../Types/Settings';
import CardHeader from '../CardHeader';

import LocationResponseChart from './Charts/LocationResponseChart';
import { locationResponseChartData } from '../../data/data';
import Select from '../Select';

type Props = {};
interface ResponsePopup extends PopupItem {
  id: ResponseTime;
}

const LocationResponse = (props: Props) => {
  const dispatch = useDispatch();
  const responseTimeChart = useSelector(selectResponseTimeChart);

  const menuItems: ResponsePopup[] = [
    {
      id: ResponseTime.Monthly,
      title: 'Monthly',
      isActive: responseTimeChart === ResponseTime.Monthly,
    },
    {
      id: ResponseTime.Daily,
      title: 'Daily',
      isActive: responseTimeChart === ResponseTime.Daily,
    },
  ];

  const onChangeHandler = (itemId: string) => {
    dispatch(setResponseTimeChart(itemId as ResponseTime));
  };

  return (
    <div>
      <CardHeader title="Response time by location">
        {/* {<CardMenu items={menuItems} onChange={onChangeHandler} />} */}
        {
          <Select
            activeItemID={responseTimeChart}
            options={menuItems}
            onChange={onChangeHandler}
          />
        }
      </CardHeader>
      <div className="h-44 w-full">
        <LocationResponseChart
          data={locationResponseChartData[responseTimeChart]}
          type={responseTimeChart}
        />
      </div>
    </div>
  );
};

export default LocationResponse;
