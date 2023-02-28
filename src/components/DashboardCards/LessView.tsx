import CardHeader from '../CardHeader';
import TextButton from '../TextButton';
import IndicatorBar from '../IndicatorBar';

import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { useAppSelector } from '../../store/hooks';
import { selectMode } from '../../store/themeSlice';
import { ThemeMode } from '../../Types/Theme';

type Props = {};

const LessView = (props: Props) => {
  const isDarkMode = useAppSelector(selectMode) === ThemeMode.Dark;

  return (
    <div>
      <CardHeader title="Less view design">
        <TextButton title="View all" />
      </CardHeader>
      <div className="mt-5 flex flex-col gap-3">
        <IndicatorBar
          text="diamond/dash.all"
          mainColor="bg-additional-100 dark:bg-teal-500"
          textColor="text-additional-100 dark:text-teal-500"
          progress={78}
          icon={<DiamondOutlinedIcon />}
          isDarkMode={isDarkMode}
        />
        <IndicatorBar
          text="diamond/dash.all"
          progress={60}
          mainColor="bg-primary-710 dark:bg-violet-500"
          textColor="text-primary-710 dark:text-violet-500"
          icon={<AccountBalanceOutlinedIcon />}
          isDarkMode={isDarkMode}
        />
        <IndicatorBar
          text="diamond/dash.all"
          progress={56}
          mainColor="bg-additional-200 dark:bg-pink-500"
          textColor="text-additional-200 dark:text-pink-500"
          icon={<StorefrontIcon />}
          isDarkMode={isDarkMode}
        />
      </div>
    </div>
  );
};

export default LessView;
