import { Theme } from '@nivo/core';
import merge from 'lodash/merge';

const createChartTheme = ({
  isDarkMode,
  customStyles,
}: {
  isDarkMode: boolean;
  customStyles?: Theme;
}): Theme => {
  const themeCreator = (isDarkMode: boolean): Theme => ({
    background: isDarkMode ? '#0f172a' : '#ffffff',
    textColor: '#333333',
    fontSize: 11,
    axis: {
      domain: {
        line: {
          stroke: isDarkMode ? '#475569' : '#f7f6f9',
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
          fill: isDarkMode ? '#94a3b8' : '#c7c7c7',
        },
      },
    },
    grid: {
      line: {
        stroke: isDarkMode ? '#475569' : '#f7f6f9',
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
  });

  const chartTheme = themeCreator(isDarkMode);
  const finalTheme = merge(chartTheme, customStyles);

  return finalTheme;
};

export default createChartTheme;
