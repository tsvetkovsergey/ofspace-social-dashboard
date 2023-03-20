import { useDispatch, useSelector } from 'react-redux';

import {
  selectResponseTimeChart,
  setResponseTimeChart,
} from '../../store/settingsSlice';
import PopupItem from '../../Types/PopupItem';
import { ResponseTime } from '../../Types/Settings';
import CardHeader from '../CardHeader';

import LocationResponseChart from './Charts/LocationResponseChart';
import { getLocationResponseChartData } from '../../data/data';
import Select from '../Select';
import useNotNullableTranslation, {
  NNTFunction,
} from '../../hooks/useNotNullableTranslation';

type Props = {};
interface ResponsePopup extends PopupItem {
  id: ResponseTime;
}

const LocationResponse = (props: Props) => {
  const dispatch = useDispatch();
  const responseTimeChart = useSelector(selectResponseTimeChart);
  const { t } = useNotNullableTranslation();

  const getMenuItems = (t: NNTFunction): ResponsePopup[] => [
    {
      id: ResponseTime.Monthly,
      title: t('Monthly'),
      isActive: responseTimeChart === ResponseTime.Monthly,
    },
    {
      id: ResponseTime.Daily,
      title: t('Daily'),
      isActive: responseTimeChart === ResponseTime.Daily,
    },
  ];

  const onChangeHandler = (itemId: string) => {
    dispatch(setResponseTimeChart(itemId as ResponseTime));
  };

  return (
    <div>
      <CardHeader title={t('Response time')}>
        {/* {<CardMenu items={menuItems} onChange={onChangeHandler} />} */}
        {
          <Select
            activeItemID={responseTimeChart}
            options={getMenuItems(t)}
            onChange={onChangeHandler}
          />
        }
      </CardHeader>
      <div className="h-44 w-full">
        <LocationResponseChart
          // data={locationResponseChartData[responseTimeChart]}
          data={getLocationResponseChartData(t, responseTimeChart)}
          type={responseTimeChart}
        />
      </div>
    </div>
  );
};

export default LocationResponse;
