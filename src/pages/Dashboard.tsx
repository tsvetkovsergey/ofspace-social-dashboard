import Card from '../components/Card';

import Clock from '../components/dashboardCards/Clock';
import HighView from '../components/dashboardCards/HighView';
import Latency from '../components/dashboardCards/Latency';
import LessView from '../components/dashboardCards/LessView';
import LocationResponse from '../components/dashboardCards/LocationResponse';
import MostActive from '../components/dashboardCards/MostActive';
import PagesActivity from '../components/dashboardCards/PagesActivity';
import SmallCard from '../components/dashboardCards/SmallCard';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    // Grid 4cols 5cols 3cols
    // <div className="grid grid-cols-12 grid-rows-6 gap-8">
    // <div className="grid-cols-[repeat(10,minmax(0,1fr))_fit-content_fit-content]] grid gap-8">
    <div className="grid grid-cols-12 grid-rows-[auto_8rem] gap-8 xl:grid-cols-[repeat(9,minmax(0,1fr))_repeat(3,73px)] xl:grid-rows-[auto_1fr_1fr_auto]">
      <Card className="col-span-7 row-start-3 xl:col-span-4 xl:row-start-1">
        <LocationResponse />
      </Card>
      <Card className="col-span-8 xl:col-span-5">
        <PagesActivity />
      </Card>
      <Card className="col-span-4 h-64 xl:col-span-3">
        <Clock />
      </Card>
      <SmallCard
        className="col-span-3 -mb-1 -mr-1 xl:col-span-2"
        cardType={0}
      />
      <SmallCard
        className="col-span-3 -mb-1 -ml-1 xl:col-span-2"
        cardType={1}
      />
      <Card className="col-span-12 row-span-2 xl:col-span-8">
        <HighView />
      </Card>
      <SmallCard
        className="col-span-3 row-start-2 -mt-1 -mr-1 xl:col-span-2 xl:row-start-3"
        cardType={2}
      />
      <SmallCard
        className="col-span-3 row-start-2 -mt-1 -ml-1 xl:col-span-2 xl:row-start-3"
        cardType={3}
      />
      <Card className="col-span-5 row-start-3 xl:col-span-4 xl:row-start-4">
        <Latency />
      </Card>
      <Card className="col-span-8 xl:col-span-5">
        <LessView />
      </Card>
      <Card className="col-span-4 xl:col-span-3">
        <MostActive />
      </Card>
    </div>
  );
};

export default Dashboard;
