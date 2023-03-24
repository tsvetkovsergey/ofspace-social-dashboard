import { DataGridColumn, DataGridColumnID } from '../Types/DataGrid';
import { NNTFunction } from '../hooks/useNotNullableTranslation';
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
import HistoryIcon from '@mui/icons-material/History';
import CallMergeIcon from '@mui/icons-material/CallMerge';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';

/////////////////
// SMALL CARDS //
/////////////////

interface SmallCard {
  title: string;
  count: number;
  percent: number;
  bgStyle: string;
  icon: JSX.Element;
}

export const getSmallCardsData = (t: NNTFunction): SmallCard[] => [
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

///////////////
// HIGH VIEW //
///////////////

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

const highViewCommonTableData = [
  {
    id: 'i1',
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
    metric: highViewTableGenerateMetric({
      icon: <ExploreOutlinedIcon />,
      text: 'explore.rack.req',
      styles:
        '[&>svg]:bg-secondary-200 [&>svg]:text-secondary-500 dark:[&>svg]:bg-fuchsia-100 dark:[&>svg]:text-fuchsia-600',
    }),
    tag: 'explore',
  },
];

export const highViewTableData = {
  [HighView.Weekly]: [
    {
      ...highViewCommonTableData[0],
      value: '1.41 errs',
      sum: '51.355 errs',
    },
    {
      ...highViewCommonTableData[1],
      value: '3.44 errs',
      sum: '343.06 errs',
    },
    {
      ...highViewCommonTableData[2],
      value: '2.14 errs',
      sum: '112.023 errs',
    },
  ],
  [HighView.Daily]: [
    {
      ...highViewCommonTableData[0],
      value: '0.35 errs',
      sum: '12.936 errs',
    },
    {
      ...highViewCommonTableData[1],
      value: '0.95 errs',
      sum: '52.15 errs',
    },
    {
      ...highViewCommonTableData[2],
      value: '0.67 errs',
      sum: '19.217 errs',
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

///////////////////////
// LOCATION RESPONSE //
///////////////////////

export const getLocationResponseChartData = (
  t: NNTFunction,
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

const locationResponseChartData = {
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

////////////////////
// PAGES ACTIVITY //
////////////////////

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
const isMonthDataType = (
  data: PagesActivityMonthDataType | PagesActivityDayDataType
): data is PagesActivityMonthDataType => {
  return (data as PagesActivityMonthDataType).month !== undefined;
};
export const getPagesActivityChartData = (
  t: NNTFunction,
  type: PagesActivity
) => {
  const data = pagesActivityChartData[type];
  return data.map((item) => {
    if (isMonthDataType(item)) {
      return {
        ...item,
        month: t(item.month),
      };
    } else {
      return {
        ...item,
        day: t(item.day),
      };
    }
  });
};

const pagesActivityChartData: {
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

///////////////////
// LATENCY CHART //
///////////////////

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

export const mockDataTeam = [
  {
    id: 1,
    name: 'Jon Snow',
    email: 'jonsnow@gmail.com',
    age: 35,
    phone: '(665)121-5454',
    access: 'admin',
  },
  {
    id: 2,
    name: 'Cersei Lannister',
    email: 'cerseilannister@gmail.com',
    age: 42,
    phone: '(421)314-2288',
    access: 'manager',
  },
  {
    id: 3,
    name: 'Jaime Lannister',
    email: 'jaimelannister@gmail.com',
    age: 45,
    phone: '(422)982-6739',
    access: 'user',
  },
  {
    id: 4,
    name: 'Anya Stark',
    email: 'anyastark@gmail.com',
    age: 16,
    phone: '(921)425-6742',
    access: 'admin',
  },
  {
    id: 5,
    name: 'Daenerys Targaryen',
    email: 'daenerystargaryen@gmail.com',
    age: 31,
    phone: '(421)445-1189',
    access: 'user',
  },
  {
    id: 6,
    name: 'Ever Melisandre',
    email: 'evermelisandre@gmail.com',
    age: 150,
    phone: '(232)545-6483',
    access: 'manager',
  },
  {
    id: 7,
    name: 'Ferrara Clifford',
    email: 'ferraraclifford@gmail.com',
    age: 44,
    phone: '(543)124-0123',
    access: 'user',
  },
  {
    id: 8,
    name: 'Rossini Frances',
    email: 'rossinifrances@gmail.com',
    age: 36,
    phone: '(222)444-5555',
    access: 'user',
  },
  {
    id: 9,
    name: 'Harvey Roxie',
    email: 'harveyroxie@gmail.com',
    age: 65,
    phone: '(444)555-6239',
    access: 'admin',
  },
];

///////////////
// LESS VIEW //
///////////////

export const lessViewData = [
  {
    id: 'diamond',
    icon: <DiamondOutlinedIcon />,
    title: 'diamond/dash.all',
    progress: 78,
    mainColor: 'bg-primary-710 dark:bg-teal-500',
    textColor: 'text-primary-710 dark:text-teal-500',
    hexLightColor: '#3247cf',
    hexDarkColor: '#14b8a6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste necessitatibus doloribus nam asperiores. Atque facilis veritatis labore optio laudantium a vitae, mollitia, cumque doloribus similique illo tenetur laboriosam. Illum officiis unde expedita ut error tempore rerum cum ipsum, rem repellendus eius atque quas placeat, nesciunt voluptatibus.',
  },
  {
    id: 'api',
    icon: <AccountBalanceOutlinedIcon />,
    title: 'api/dash.all_get',
    progress: 60,
    mainColor: 'bg-additional-100 dark:bg-violet-500',
    textColor: 'text-additional-100 dark:text-violet-500',
    hexLightColor: '#eeb07a',
    hexDarkColor: '#8b5cf6',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, at eum dolores saepe tenetur cum itaque debitis molestias illo neque quidem quae voluptates aut obcaecati deserunt impedit omnis ducimus perferendis ipsam quia autem esse sequi unde! Expedita provident maiores nostrum, blanditiis reiciendis ad vero temporibus perferendis culpa magnam?',
  },
  {
    id: 'variety',
    icon: <StorefrontIcon />,
    title: 'variety_xyz/dash.all',
    progress: 56,
    mainColor: 'bg-additional-200 dark:bg-pink-500',
    textColor: 'text-additional-200 dark:text-pink-500',
    hexLightColor: '#00d0ff',
    hexDarkColor: '#ec4899',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem consequatur sequi qui et quidem fugiat, ad dolorem illum omnis architecto aut debitis ipsa doloribus distinctio ut cupiditate eveniet labore! Voluptate reiciendis quisquam magnam sit, quis distinctio similique.',
  },
];
