import { Theme } from '@nivo/core';
import { ResponsivePie, DatumId } from '@nivo/pie';
import { useAppSelector } from '../store/hooks';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';

type Props = {
  data: Array<{ id: DatumId; label: DatumId; value: number; color: string }>;
};

const themeObject: Theme = {
  fontSize: 16,
};

const PieChart = ({ data }: Props) => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  return (
    <ResponsivePie
      data={data}
      theme={themeObject}
      margin={{ top: 20, right: 0, bottom: 20, left: 60 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      colors={(data) => data.data.color}
      enableArcLinkLabels={true}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={isDarkMode ? '#f1f5f9' : '#717075'}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      arcLabelsSkipAngle={10}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['brighter', 3]],
      }}
      tooltip={() => <></>}
      legends={[]}
    />
  );
};

export default PieChart;
