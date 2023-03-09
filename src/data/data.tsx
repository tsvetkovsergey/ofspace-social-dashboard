import { DataGridColumn, DataGridColumnID } from '../Types/DataGrid';
import {
  HighView,
  PagesActivity,
  ResponseTime,
  Latency as LatencyType,
} from '../Types/Settings';
import { TFunction } from 'i18next';

// ICONS
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import HistoryIcon from '@mui/icons-material/History';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface SmallCard {
  title: string;
  count: number;
  percent: number;
  bgStyle: string;
  icon: JSX.Element;
}

export const getSmallCardsData = (t: TFunction): SmallCard[] => [
  {
    title: t('Accounts reached'),
    count: 48,
    percent: 2.5,
    bgStyle: 'bg-account-reached',
    icon: <HistoryIcon />,
  },
  {
    title: t('Accounts engaged'),
    count: 29,
    percent: 1.23,
    bgStyle: 'bg-account-engaged',
    icon: <CallMergeIcon />,
  },
  {
    title: t('Average reached'),
    count: 50,
    percent: 1.23,
    bgStyle: 'bg-average-reached',
    icon: <ModeStandbyIcon />,
  },
  {
    title: t('Average engaged'),
    count: 54,
    percent: -0.12,
    bgStyle: 'bg-average-engaged',
    icon: <ShoppingCartIcon />,
  },
];

// export const getHighViewTableColumns = (t: TFunction): DataGridColumn[] => [
//   {
//     id: 'value',
//     title: t('Value'),
//   },
//   {
//     id: 'sum',
//     title: t('Sum'),
//   },
//   {
//     id: 'metric',
//     title: t('Metric'),
//   },
//   {
//     id: 'tag',
//     title: t('Tag'),
//   },
// ];

export const highViewTableColumns: DataGridColumn[] = [
  {
    id: DataGridColumnID.Value,
    titleId: 'Value',
    grid: '5fr',
  },
  {
    id: DataGridColumnID.Sum,
    titleId: 'Sum',
    grid: '5fr',
  },
  {
    id: DataGridColumnID.Metric,
    titleId: 'Metric',
    grid: '8fr',
  },
  {
    id: DataGridColumnID.Tag,
    titleId: 'Tag',
    grid: '4fr',
  },
];

const highViewTableGenerateMetric = ({
  icon,
  text,
  styles,
}: {
  icon: JSX.Element;
  text: string;
  styles?: string;
}) => (
  <div
    className={`[&>svg]:mr-2 [&>svg]:h-[1.7rem] [&>svg]:w-[1.7rem] [&>svg]:rounded-full [&>svg]:p-[0.3rem] ${styles}`}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export const highViewTableData = {
  [HighView.Weekly]: [
    {
      id: 'i1',
      value: '1.41 errs',
      sum: '51.355 errs',
      metric: highViewTableGenerateMetric({
        icon: <DiamondOutlinedIcon />,
        text: 'diamond.rack.req',
        styles:
          '[&>svg]:bg-primary-300 [&>svg]:text-primary-710 dark:[&>svg]:bg-teal-100 dark:[&>svg]:text-teal-600',
      }),
      tag: 'diamond',
    },
    {
      id: 'i2',
      value: '3.44 errs',
      sum: '343.06 errs',
      metric: highViewTableGenerateMetric({
        icon: <RestoreIcon />,
        text: 'trace.rack.req',
        styles:
          '[&>svg]:bg-additional-110 [&>svg]:text-additional-100 dark:[&>svg]:bg-violet-100 dark:[&>svg]:text-violet-600',
      }),
      tag: 'trace',
    },
    {
      id: 'i3',
      value: '2.14 errs',
      sum: '112.023 errs',
      metric: highViewTableGenerateMetric({
        icon: <ExploreOutlinedIcon />,
        text: 'explore.rack.req',
        styles:
          '[&>svg]:bg-secondary-200 [&>svg]:text-secondary-500 dark:[&>svg]:bg-fuchsia-100 dark:[&>svg]:text-fuchsia-600',
      }),
      tag: 'explore',
    },
  ],
  [HighView.Daily]: [
    {
      id: 'i1',
      value: '0.35 errs',
      sum: '12.936 errs',
      metric: highViewTableGenerateMetric({
        icon: <DiamondOutlinedIcon />,
        text: 'diamond.rack.req',
        styles: '[&>svg]:bg-primary-300 [&>svg]:text-primary-710',
      }),
      tag: 'diamond',
    },
    {
      id: 'i2',
      value: '0.95 errs',
      sum: '52.15 errs',
      metric: highViewTableGenerateMetric({
        icon: <RestoreIcon />,
        text: 'trace.rack.req',
        styles: '[&>svg]:bg-additional-110 [&>svg]:text-additional-100',
      }),
      tag: 'trace',
    },
    {
      id: 'i3',
      value: '0.67 errs',
      sum: '19.217 errs',
      metric: highViewTableGenerateMetric({
        icon: <ExploreOutlinedIcon />,
        text: 'explore.rack.req',
        styles: '[&>svg]:bg-secondary-200 [&>svg]:text-secondary-500',
      }),
      tag: 'explore',
    },
  ],
};

export const highViewCardsData = {
  [HighView.Weekly]: {
    totalView: 18.012,
    totalLike: 24.123,
  },
  [HighView.Daily]: {
    totalView: 2.618,
    totalLike: 3.505,
  },
};

export const getLocationResponseChartData = (
  t: TFunction,
  resTime: ResponseTime
) => {
  const chartData = locationResponseChartData[resTime];
  const translatedData = chartData[0].data.reduce<{ x: string; y: number }[]>(
    (acc, { x, y }) => {
      const translatedItem = { x: t(x), y };
      return [...acc, translatedItem];
    },
    []
  );
  const translatedChartData = [{ ...chartData[0], data: translatedData }];
  return translatedChartData;
};

export const locationResponseChartData = {
  [ResponseTime.Daily]: [
    {
      id: 'response',
      color: '#1d33cc',
      color_dark: '#be185d',
      data: [
        { x: 'Mon', y: 25 },
        { x: 'Tue', y: 22 },
        { x: 'Wed', y: 36 },
        { x: 'Thu', y: 32 },
        { x: 'Fri', y: 35 },
        { x: 'Sat', y: 15 },
        { x: 'Sun', y: 23 },
      ],
    },
  ],
  [ResponseTime.Monthly]: [
    {
      id: 'response',
      color: '#1d33cc',
      color_dark: '#be185d',
      data: [
        { x: 'Jan', y: 2100 },
        { x: 'Feb', y: 1800 },
        { x: 'Mar', y: 2000 },
        { x: 'Apr', y: 1700 },
        { x: 'May', y: 3100 },
        { x: 'June', y: 2700 },
        { x: 'July', y: 3000 },
        { x: 'Aug', y: 3300 },
        { x: 'Sep', y: 3300 },
        { x: 'Oct', y: 3400 },
        { x: 'Nov', y: 3100 },
        { x: 'Dec', y: 2400 },
      ],
    },
  ],
};

interface PagesActivityMonthDataType {
  month: string;
  viewers: number;
  followers: number;
}
interface PagesActivityDayDataType {
  day: string;
  viewers: number;
  followers: number;
}
export const pagesActivityChartData: {
  [PagesActivity.Monthly]: PagesActivityMonthDataType[];
  [PagesActivity.Daily]: PagesActivityDayDataType[];
} = {
  [PagesActivity.Monthly]: [
    {
      month: 'Jan',
      viewers: 18000,
      followers: 23000,
    },
    {
      month: 'Feb',
      viewers: 16000,
      followers: 22000,
    },
    {
      month: 'Mar',
      viewers: 13000,
      followers: 17000,
    },
    {
      month: 'Apr',
      viewers: 17000,
      followers: 21000,
    },
    {
      month: 'May',
      viewers: 22000,
      followers: 17000,
    },
    {
      month: 'June',
      viewers: 25000,
      followers: 26000,
    },
    {
      month: 'July',
      viewers: 19000,
      followers: 18000,
    },
    {
      month: 'Aug',
      viewers: 12000,
      followers: 14000,
    },
    {
      month: 'Sep',
      viewers: 14000,
      followers: 20000,
    },
  ],
  [PagesActivity.Daily]: [
    {
      day: 'Mon',
      viewers: 1800,
      followers: 2300,
    },
    {
      day: 'Tue',
      viewers: 1200,
      followers: 2200,
    },
    {
      day: 'Wed',
      viewers: 1900,
      followers: 2500,
    },
    {
      day: 'Thu',
      viewers: 1700,
      followers: 2100,
    },
    {
      day: 'Fri',
      viewers: 900,
      followers: 1500,
    },
    {
      day: 'Sat',
      viewers: 2800,
      followers: 2500,
    },
    {
      day: 'Sun',
      viewers: 2100,
      followers: 1900,
    },
  ],
};

export const latencyChartData = {
  [LatencyType.Daily]: [
    {
      id: 'solve',
      color: '#3247cf',
      color_dark: '#d8b4fe',
      data: [
        { x: 'Mon', y: 22 },
        { x: 'Tue', y: 31 },
        { x: 'Wed', y: 23 },
        { x: 'Thu', y: 25 },
        { x: 'Fri', y: 20 },
        { x: 'Sat', y: 22 },
        { x: 'Sun', y: 19 },
      ],
    },
    {
      id: 'pending',
      color: '#00d0ff',
      color_dark: '#a855f7',
      data: [
        { x: 'Mon', y: 25 },
        { x: 'Tue', y: 18 },
        { x: 'Wed', y: 21 },
        { x: 'Thu', y: 11 },
        { x: 'Fri', y: 27 },
        { x: 'Sat', y: 21 },
        { x: 'Sun', y: 27 },
      ],
    },
  ],
  [LatencyType.Weekly]: [
    {
      id: 'solve',
      color: '#3247cf',
      color_dark: '#d8b4fe',
      data: [
        { x: '46', y: 280 },
        { x: '47', y: 240 },
        { x: '48', y: 240 },
        { x: '49', y: 200 },
        { x: '50', y: 260 },
        { x: '51', y: 230 },
        { x: '52', y: 250 },
      ],
    },
    {
      id: 'pending',
      color: '#00d0ff',
      color_dark: '#a855f7',
      data: [
        { x: '46', y: 170 },
        { x: '47', y: 310 },
        { x: '48', y: 260 },
        { x: '49', y: 160 },
        { x: '50', y: 200 },
        { x: '51', y: 190 },
        { x: '52', y: 140 },
      ],
    },
  ],
};
