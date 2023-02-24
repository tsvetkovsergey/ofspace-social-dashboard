import { DataGridColumn } from '../Types/DataGrid';
import {
  HighView,
  PagesActivity,
  ResponseTime,
  Latency as LatencyType,
} from '../Types/Settings';

// ICONS
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';

export const highViewTableColumns: DataGridColumn[] = [
  {
    id: 'value',
    title: 'Value',
  },
  {
    id: 'sum',
    title: 'Sum',
  },
  {
    id: 'metric',
    title: 'Metric',
  },
  {
    id: 'tag',
    title: 'Tag',
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
    className={`[&>svg]:mr-2 [&>svg]:h-[1.7rem] [&>svg]:w-[1.7rem]  [&>svg]:rounded-full  [&>svg]:p-[0.3rem] ${styles}`}
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
        styles: '[&>svg]:bg-primary-300 [&>svg]:text-primary-710',
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
        styles: '[&>svg]:bg-additional-110 [&>svg]:text-additional-100',
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
        styles: '[&>svg]:bg-secondary-200 [&>svg]:text-secondary-500',
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

export const locationResponseChartData = {
  [ResponseTime.Daily]: [
    {
      id: 'response',
      color: '#1d33cc',
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
      data: [
        { x: 'Jan', y: 2600 },
        { x: 'Feb', y: 2300 },
        { x: 'Mar', y: 2500 },
        { x: 'Apr', y: 2200 },
        { x: 'May', y: 3600 },
        { x: 'June', y: 3200 },
        { x: 'July', y: 3500 },
        { x: 'Aug', y: 3800 },
        { x: 'Sep', y: 3800 },
        { x: 'Oct', y: 3900 },
        { x: 'Nov', y: 3600 },
        { x: 'Dec', y: 2900 },
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
      data: [
        { x: '46', y: 330 },
        { x: '47', y: 290 },
        { x: '48', y: 290 },
        { x: '49', y: 250 },
        { x: '50', y: 310 },
        { x: '51', y: 280 },
        { x: '52', y: 300 },
      ],
    },
    {
      id: 'pending',
      color: '#00d0ff',
      data: [
        { x: '46', y: 220 },
        { x: '47', y: 360 },
        { x: '48', y: 310 },
        { x: '49', y: 210 },
        { x: '50', y: 250 },
        { x: '51', y: 240 },
        { x: '52', y: 190 },
      ],
    },
  ],
};
