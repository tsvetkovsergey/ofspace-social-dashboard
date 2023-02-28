import CardHeader from '../CardHeader';
import UserImage_1 from '../../assets/active_user_1.png';
import UserImage_2 from '../../assets/active_user_2.png';
import StatCard from '../StatCard';

const mostActiveUsers = [
  {
    id: 'u1',
    icon: <img alt="Most active user 1 image" src={UserImage_1} />,
    iconStyle: 'bg-pink-300',
    name: 'Alex Adam',
    email: 'adamalex@ase.com',
  },
  {
    id: 'u2',
    icon: <img alt="Most active user 2 image" src={UserImage_2} />,
    iconStyle: 'bg-amber-100',
    name: 'John Smith',
    email: 'smithjohn@ase.com',
  },
];

const MostActive = () => {
  return (
    <div>
      <CardHeader title="Most active user" />
      <div className="mt-4 flex flex-col gap-5">
        {mostActiveUsers.map((user) => (
          <StatCard
            key={user.id}
            icon={user.icon}
            title={user.name}
            text={user.email}
            cardStyle="hover:bg-slate-50 border bg-white dark:bg-blue-500 dark:[&_p]:text-slate-200 border-transparent transition hover:border-slate-100"
            iconStyle={user.iconStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default MostActive;
