import CardHeader from '../CardHeader';
import TextButton from '../TextButton';
import IndicatorBar from '../IndicatorBar';

import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import StorefrontIcon from '@mui/icons-material/Storefront';

type Props = {};

const LessView = (props: Props) => {
  return (
    <div>
      <CardHeader title="Less view design">
        <TextButton title="View all" />
      </CardHeader>
      <div className="mt-5 flex flex-col gap-3">
        <IndicatorBar
          text="diamond/dash.all"
          progress={78}
          icon={<DiamondOutlinedIcon />}
        />
        <IndicatorBar
          text="diamond/dash.all"
          progress={60}
          mainColor="bg-additional-100"
          textColor="text-additional-100"
          icon={<AccountBalanceOutlinedIcon />}
        />
        <IndicatorBar
          text="diamond/dash.all"
          progress={56}
          mainColor="bg-additional-200"
          textColor="text-additional-200"
          icon={<StorefrontIcon />}
        />
      </div>
    </div>
  );
};

export default LessView;
