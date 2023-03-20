import Card from '../components/Card';
import { ResponsiveChoropleth } from '@nivo/geo';
import { geoFeatures } from '../data/mockGeoFeatures';
import { mockGeographyData as data } from '../data/mockGeoData';
import { useSelector } from 'react-redux';
import { selectMode } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';

const Geography = () => {
  const isDarkMode = useSelector(selectMode) === ThemeMode.Dark;
  const greyColor = '#505050';

  return (
    <Card>
      <div className="flex h-[50vw] w-full">
        <ResponsiveChoropleth
          data={data}
          features={geoFeatures.features}
          colors={isDarkMode ? 'BuPu' : 'blues'}
          theme={{
            textColor: '#fff',
            axis: {
              domain: {
                line: {
                  stroke: '#fff',
                },
              },
              legend: {
                text: {
                  fill: '#fff',
                  stroke: '#fff',
                },
              },
              ticks: {
                line: {
                  stroke: greyColor,
                  strokeWidth: 1,
                },
                text: {
                  fill: greyColor,
                },
              },
            },
            tooltip: {
              container: {
                background: isDarkMode ? '#64748b' : '#eff2fa',
              },
            },
          }}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          domain={[0, 1000000]}
          unknownColor={isDarkMode ? '#1e293b' : '#b0b0bb'}
          label="properties.name"
          valueFormat=".2s"
          projectionScale={150}
          projectionTranslation={[0.5, 0.5]}
          projectionRotation={[0, 0, 0]}
          borderWidth={1}
          borderColor={isDarkMode ? '#f1f5f9' : '#606060'}
          legends={[
            {
              anchor: 'bottom-left',
              direction: 'column',
              justify: true,
              translateX: 20,
              translateY: -100,
              itemsSpacing: 0,
              itemWidth: 94,
              itemHeight: 18,
              itemDirection: 'left-to-right',
              itemTextColor: isDarkMode ? '#f1f5f9' : greyColor,
              itemOpacity: 0.85,
              symbolSize: 18,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: isDarkMode ? '#fff' : '#000',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </Card>
  );
};

export default Geography;
