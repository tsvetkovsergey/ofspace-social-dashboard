// Icons
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import BuildCircleOutlinedIcon from '@mui/icons-material/BuildCircleOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { scaleOnTapSmallButtons } from '../data/animationSettings';

const SidebarMenuItem = ({ to, icon }: { to: string; icon: JSX.Element }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        ` ${
          isActive
            ? 'dark:[&_button:hover]:bg-blue-600 [&_button]:bg-primary-710 [&_button]:text-primary-50 dark:[&_button]:bg-blue-500'
            : '[&_button:hover]:bg-primary-200 dark:[&_button:hover]:bg-slate-500 [&_button]:bg-transparent [&_button]:text-secondary-400 dark:[&_button]:text-blue-100'
        }`
      }

      // <NavLink
      //   to={to}
      //   className={({ isActive }) =>
      //     `mx-auto flex h-10 w-10 items-center justify-center rounded-full transition-all ${
      //       isActive
      //         ? 'bg-primary-710 text-primary-50 dark:bg-blue-500 dark:hover:bg-blue-600'
      //         : 'bg-transparent text-secondary-400 hover:bg-primary-200 dark:text-blue-100 dark:hover:bg-slate-500'
      //     }`
      //   }

      // className={({ isActive }) =>
      //   ` transition-all [&>svg]:transition-all ${
      //     isActive
      //       ? 'rounded-full text-primary-50 [&>svg]:rounded-full [&>svg]:bg-primary-710 [&>svg]:outline [&>svg]:outline-4 [&>svg]:outline-primary-710'
      //       : 'rounded-full text-secondary-400 dark:text-white [&>svg]:rounded-full [&>svg]:bg-transparent [&>svg]:outline [&>svg]:outline-4 [&>svg]:outline-transparent [&>svg]:hover:bg-primary-200 [&>svg]:hover:shadow-offset [&>svg]:hover:outline-primary-200'
      //   }`
      // }
    >
      <motion.button
        {...scaleOnTapSmallButtons}
        className="mx-auto flex h-10 w-10 items-center justify-center rounded-full transition-all"
      >
        {icon}
      </motion.button>
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
    icon: <FormatListBulletedIcon />,
    path: '/list',
  },
  {
    icon: <PeopleOutlinedIcon />,
    path: '/team',
  },
  {
    icon: <MapOutlinedIcon />,
    path: '/geography',
  },
  {
    icon: <SettingsOutlinedIcon />,
    path: '/config',
  },
];

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="fixed h-full w-24 overflow-y-auto bg-white dark:bg-slate-900 dark:bg-opacity-60 dark:backdrop-blur-md">
      {/* First block of icons */}
      <nav className="mx-auto mt-8 mb-32 w-fit rounded-full bg-primary-50 p-3 dark:bg-slate-600 dark:bg-opacity-10">
        <ul className="flex flex-col items-center gap-5">
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
