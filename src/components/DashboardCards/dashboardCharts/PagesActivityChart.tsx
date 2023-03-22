import { ResponsiveBar } from '@nivo/bar';
import { Theme } from '@nivo/core';
import { useAppSelector } from '../../../store/hooks';
import { selectMode } from '../../../store/themeSlice';
import { PagesActivity } from '../../../Types/Settings';
import { ThemeMode } from '../../../Types/Theme';
import createChartTheme from './themeCreator';

type Props = {
  data: any;
  type: PagesActivity;
};

const chartStyles: Theme = {
  grid: {
    line: {
      strokeDasharray: '4, 4',
    },
  },
};

const PagesActivityChart = ({ data, type }: Props) => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  return (
    <ResponsiveBar
      data={data}
      keys={['viewers', 'followers']}
      indexBy={type === PagesActivity.Daily ? 'day' : 'month'}
      margin={{ top: 20, right: 0, bottom: 25, left: 30 }}
      theme={createChartTheme({ isDarkMode, customStyles: chartStyles })}
      padding={0.5}
      innerPadding={2}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={({ id }) =>
        id === 'viewers'
          ? isDarkMode
            ? '#a21caf'
            : '#3246d3'
          : isDarkMode
          ? '#f5d0fe'
          : '#00d0ff'
      }
      minValue={0}
      maxValue={type === PagesActivity.Daily ? 3000 : 30000}
      borderRadius={2}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
      }}
      axisLeft={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        format: (d) => `${d / 1000}k`,
        tickValues:
          type === PagesActivity.Daily
            ? [0, 1000, 2000, 3000]
            : [0, 10000, 20000, 30000],
      }}
      gridYValues={
        type === PagesActivity.Daily
          ? [0, 1000, 2000, 3000]
          : [0, 10000, 20000, 30000]
      }
      enableGridX={true}
      enableLabel={false}
      legends={[]}
      role="application"
      ariaLabel="Activity on the pages chart"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in month: ' + e.indexValue;
      }}
    />
  );
};

export default PagesActivityChart;
