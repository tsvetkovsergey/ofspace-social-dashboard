import { Theme } from '@nivo/core';
import { ResponsiveLine } from '@nivo/line';
import { useAppSelector } from '../../../store/hooks';
import { selectMode } from '../../../store/themeSlice';
import { Latency as LatencyType } from '../../../Types/Settings';
import { ThemeMode } from '../../../Types/Theme';
import createChartTheme from './themeCreator';

type Props = {
  data: any;
  type: LatencyType;
};

const chartStyles: Theme = {
  crosshair: {
    line: {
      stroke: '#94a3b8',
    },
  },
};

const LatencyChart = ({ data, type }: Props) => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 20, right: 10, bottom: 25, left: 30 }}
      colors={{ datum: isDarkMode ? 'color_dark' : 'color' }}
      theme={createChartTheme({
        isDarkMode,
        customStyles: isDarkMode ? chartStyles : {},
      })}
      xScale={{ type: 'point' }}
      yScale={{
        type: 'linear',
        min: 0,
        max: type === LatencyType.Daily ? 40 : 400,
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      gridYValues={
        type === LatencyType.Daily
          ? [0, 10, 20, 30, 40]
          : [0, 100, 200, 300, 400]
      }
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
        tickValues:
          type === LatencyType.Daily
            ? [0, 10, 20, 30, 40]
            : [0, 100, 200, 300, 400],
      }}
      lineWidth={isDarkMode ? 3 : 1}
      enablePoints={false}
      useMesh={true}
      legends={[]}
    />
  );
};

export default LatencyChart;
