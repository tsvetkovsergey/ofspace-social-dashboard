import { ResponsiveLine } from '@nivo/line';
import { ResponseTime } from '../../Types/Settings';

type Props = {
  data: any;
  type: ResponseTime;
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

const LocationResponseChart = ({ data, type }: Props) => {
  return (
    <ResponsiveLine
      data={data}
      margin={{ top: 10, right: 10, bottom: 25, left: 40 }}
      theme={chartTheme}
      colors={{ datum: 'color' }}
      defs={[
        {
          id: 'gradient',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: 'inherit' },
            { offset: 100, color: '#fff' },
          ],
        },
      ]}
      fill={[{ match: '*', id: 'gradient' }]}
      xScale={{ type: 'point' }}
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
      lineWidth={1}
      enableCrosshair={false}
      enablePoints={false}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabelYOffset={-12}
      enableArea={true}
      areaBaselineValue={0}
      useMesh={true}
    />
  );
};

export default LocationResponseChart;
