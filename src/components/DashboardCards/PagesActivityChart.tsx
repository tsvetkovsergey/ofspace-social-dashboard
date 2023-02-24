import { ResponsiveBar } from '@nivo/bar';
import { PagesActivity } from '../../Types/Settings';

type Props = {
  data: any;
  type: PagesActivity;
};

const chartTheme = {
  background: '#ffffff',
  textColor: '#333333',
  fontSize: 11,
  axis: {
    domain: {
      line: {
        stroke: '#f7f6f9',
        strokeWidth: 1,
      },
    },
    legend: {
      text: {
        fontSize: 12,
        fill: '#333333',
      },
    },
    ticks: {
      line: {
        stroke: '#777777',
        strokeWidth: 0,
      },
      text: {
        fontSize: 12,
        fill: '#c7c7c7',
      },
    },
  },
  grid: {
    line: {
      stroke: '#f7f6f9',
      strokeWidth: 1,
      strokeDasharray: '4, 4',
    },
  },
  legends: {
    title: {
      text: {
        fontSize: 11,
        fill: '#333333',
      },
    },
    text: {
      fontSize: 11,
      fill: '#333333',
    },
    ticks: {
      line: {},
      text: {
        fontSize: 10,
        fill: '#333333',
      },
    },
  },
  annotations: {
    text: {
      fontSize: 13,
      fill: '#333333',
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1,
    },
    link: {
      stroke: '#000000',
      strokeWidth: 1,
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1,
    },
    outline: {
      stroke: '#000000',
      strokeWidth: 2,
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1,
    },
    symbol: {
      fill: '#000000',
      outlineWidth: 2,
      outlineColor: '#ffffff',
      outlineOpacity: 1,
    },
  },
  tooltip: {
    container: {
      background: '#ffffff',
      color: '#333333',
      fontSize: 12,
    },
    basic: {},
    chip: {},
    table: {},
    tableCell: {},
    tableCellValue: {},
  },
};

const PagesActivityChart = ({ data, type }: Props) => {
  return (
    <ResponsiveBar
      data={data}
      keys={['viewers', 'followers']}
      indexBy={type === PagesActivity.Daily ? 'day' : 'month'}
      margin={{ top: 20, right: 0, bottom: 25, left: 30 }}
      theme={chartTheme}
      padding={0.5}
      innerPadding={2}
      groupMode="grouped"
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={({ id }) => (id === 'viewers' ? '#3246d3' : '#00d0ff')}
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
