// Icons
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { NavLink } from 'react-router-dom';

const SidebarMenuItem = ({ to, icon }: { to: string; icon: JSX.Element }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` transition-all [&>svg]:transition-all ${
          isActive
            ? 'rounded-full text-primary-50 [&>svg]:rounded-full [&>svg]:bg-primary-710 [&>svg]:outline [&>svg]:outline-4 [&>svg]:outline-primary-710'
            : 'rounded-full text-secondary-400  [&>svg]:rounded-full [&>svg]:bg-transparent [&>svg]:outline [&>svg]:outline-4 [&>svg]:outline-transparent [&>svg]:hover:bg-primary-200 [&>svg]:hover:shadow-offset [&>svg]:hover:outline-primary-200'
        }`
      }
    >
      {icon}
    </NavLink>
  );
};

type MenuItem = {
  icon: JSX.Element;
  path: string;
};

const menuItems: MenuItem[] = [
  {
    icon: <ExploreOutlinedIcon />,
    path: '/',
  },
  {
    icon: <ScheduleOutlinedIcon />,
    path: '/schedule',
  },
  {
    icon: <CampaignOutlinedIcon />,
    path: '/alerts',
  },
  {
    icon: <BuildCircleOutlinedIcon />,
    path: '/settings',
  },
  {
    icon: <SettingsOutlinedIcon />,
    path: '/config',
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="h-full w-24">
      {/* First block of icons */}
      <nav className="mx-auto mt-8 w-fit rounded-full bg-primary-50 p-3">
        <ul className="flex flex-col items-center gap-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <SidebarMenuItem to={item.path} icon={item.icon} />
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
