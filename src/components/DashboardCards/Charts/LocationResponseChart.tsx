import { ResponsiveLine } from '@nivo/line';
import { useAppSelector } from '../../../store/hooks';
import { selectMode } from '../../../store/themeSlice';
import { ThemeMode } from '../../../Types/Theme';
import { ResponseTime } from '../../../Types/Settings';
import createChartTheme from './themeCreator';
import { useMediaQuery } from '@mui/material';

type Props = {
  data: any;
  type: ResponseTime;
};

const formatMonthNames = (month: string) => {
  switch (month) {
    case 'Февр':
    case 'Апр':
    case 'Июнь':
    case 'Июль':
    case 'Сент':
    case 'Нояб':
    case 'Feb':
    case 'Apr':
    case 'June':
    case 'July':
    case 'Sep':
    case 'Nov':
      return '.';
    default:
      return month;
  }
};

const LocationResponseChart = ({ data, type }: Props) => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;
  // const isLargeDisplay = useMediaQuery(
  //   '(min-width:1600px) and (max-width:1279px)'
  // );
  const isMediumDisplay = useMediaQuery(
    '(min-width:1280px) and (max-width:1600px), (max-width: 1000px)'
  );
  console.log('1280 ~ 1600: ' + isMediumDisplay);

  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 10, bottom: 25, left: 40 }}
      theme={createChartTheme({ isDarkMode })}
      colors={{ datum: isDarkMode ? 'color_dark' : 'color' }}
      defs={[
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: isDarkMode
            ? [
                { offset: 0, color: '#831843' },
                { offset: 100, color: '#0f172a' },
              ]
            : [
                { offset: 0, color: 'inherit' },
                { offset: 100, color: '#fff' },
              ],
        },
      ]}
      fill={[{ match: '*', id: 'gradient' }]}
      curve="natural"
      xScale={{ type: 'point' }}
      // xFormat={(f) => {
      //   console.log(f);
      //   return `${f}+`;
      // }}
      yScale={{
        type: 'linear',
        min: 0,
        max: type === ResponseTime.Daily ? 40 : 4000,
        stacked: false,
        reverse: false,
      }}
      yFormat=" >-.2f"
      gridYValues={
        type === ResponseTime.Daily
          ? [0, 10, 20, 30, 40]
          : [0, 1000, 2000, 3000, 4000]
      }
      axisTop={null}
      axisRight={null}
      axisBottom={{
        // orient: 'bottom',
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        format: (v) =>
          // Format month names for small desktop displays
          type === ResponseTime.Monthly && isMediumDisplay
            ? formatMonthNames(v)
            : v,
      }}
      axisLeft={{
        // orient: 'left',
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        tickValues:
          type === ResponseTime.Daily
            ? [0, 10, 20, 30, 40]
            : [0, 1000, 2000, 3000, 4000],
      }}
      lineWidth={isDarkMode ? 3 : 1}
      enableCrosshair={false}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaOpacity={isDarkMode ? 0.9 : 0.3}
      areaBaselineValue={0}
      useMesh={true}
    />
  );
};

export default LocationResponseChart;
