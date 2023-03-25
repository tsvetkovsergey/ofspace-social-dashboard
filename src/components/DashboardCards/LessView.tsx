import CardHeader from '../CardHeader';
import TextButton from '../TextButton';
import IndicatorBar from '../IndicatorBar';

import { useAppSelector } from '../../store/hooks';
import { selectMode } from '../../store/themeSlice';
import { ThemeMode } from '../../Types/Theme';
import useNotNullableTranslation from '../../hooks/useNotNullableTranslation';

import { lessViewData } from '../../data/data';
import { Link } from 'react-router-dom';

const LessView = () => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;
  const { t } = useNotNullableTranslation();

  return (
    <div>
      <CardHeader title={t('Less view design')}>
        <Link to="/list">
          <TextButton title={t('View all')} />
        </Link>
      </CardHeader>
      <div className="mt-5 flex flex-col gap-3">
        {lessViewData
          .slice(0, 3)
          .map(({ id, icon, title, progress, mainColor, textColor }) => (
            <IndicatorBar
              key={id}
              id={id}
              text={title}
              mainColor={mainColor}
              textColor={textColor}
              progress={progress}
              icon={icon}
              isDarkMode={isDarkMode}
            />
          ))}
      </div>
    </div>
  );
};

export default LessView;
