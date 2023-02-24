import { ResponsiveLine } from '@nivo/line';
import { Latency as LatencyType } from '../../Types/Settings';

type Props = {
  data: any;
  type: LatencyType;
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

const LatencyChart = ({ data, type }: Props) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 10, bottom: 25, left: 30 }}
      colors={{ datum: 'color' }}
      theme={chartTheme}
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
        type === LatencyType.Daily ? [0, 10, 20, 30] : [0, 100, 200, 300]
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
      enablePoints={false}
      useMesh={true}
      legends={[]}
    />
  );
};

export default LatencyChart;
