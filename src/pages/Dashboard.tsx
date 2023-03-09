import Card from '../components/Card';

import Clock from '../components/DashboardCards/Clock';
import HighView from '../components/DashboardCards/HighView';
import Latency from '../components/DashboardCards/Latency';
import LessView from '../components/DashboardCards/LessView';
import LocationResponse from '../components/DashboardCards/LocationResponse';
import MostActive from '../components/DashboardCards/MostActive';
import PagesActivity from '../components/DashboardCards/PagesActivity';
import SmallCard from '../components/DashboardCards/SmallCard';

type Props = {};

const Dashboard = (props: Props) => {
  return (
    // Grid 4cols 5cols 3cols
    // <div className="grid grid-cols-12 grid-rows-6 gap-8">
    // <div className="grid-cols-[repeat(10,minmax(0,1fr))_fit-content_fit-content]] grid gap-8">
    <div className="grid grid-cols-[repeat(9,minmax(0,1fr))_repeat(3,73px)] grid-rows-[auto_1fr_1fr_auto] gap-8">
      <Card className="col-span-4">
        <LocationResponse />
      </Card>
      <Card className="col-span-5">
        <PagesActivity />
      </Card>
      <Card className="col-span-3 h-64">
        <Clock />
      </Card>
      <SmallCard className="col-span-2 -mb-1 -mr-1" cardType={0} />
      <SmallCard className="col-span-2 -mb-1 -ml-1" cardType={1} />
      <Card className="col-span-8 row-span-2">
        <HighView />
      </Card>
      <SmallCard className="col-span-2 -mt-1 -mr-1" cardType={2} />
      <SmallCard className="col-span-2 -mt-1 -ml-1" cardType={3} />
      <Card className="col-span-4">
        <Latency />
      </Card>
      <Card className="col-span-5">
        <LessView />
      </Card>
      <Card className="col-span-3">
        <MostActive />
      </Card>
    </div>
  );
};

export default Dashboard;
