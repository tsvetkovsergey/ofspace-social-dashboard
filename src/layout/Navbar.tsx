import { useState } from 'react';
import IconButton from '../components/IconButton';
// Icons
import Clear from '@mui/icons-material/Clear';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Search from '@mui/icons-material/Search';
import QuestionMark from '@mui/icons-material/QuestionMark';

import profileImage from '../assets/profile.jpg';
import Popup from '../components/Popup';

const ExpandMoreIconComponent = (): JSX.Element => (
  <ExpandMoreIcon
    className="text-typo-300"
    sx={{ height: '1.4rem', width: '1.4rem' }}
  />
);

const Navbar = () => {
  const [searchInputText, setSearchInputText] = useState<string>('');
  const [languagePopupIsOpen, setLanguagePopupIsOpen] =
    useState<boolean>(false);

  // TODO: Change next two lines
  // const date = new Date();
  const date = new Date('06-12-2022');

  return (
    <div className="flex h-24 items-center justify-between px-8">
      {/* LEFT SIDE */}
      <div>
        <h1 className="text-lg font-bold text-typo-800">
          Welcome to Dashboard
        </h1>
        <button className="-ml-2 flex items-center rounded-lg py-1 px-2 hover:bg-primary-200 hover:shadow-lg">
          <p className="text-sm text-typo-600">{`${date.getDate()} ${date.toLocaleDateString(
            'en',
            { month: 'long' }
          )} ${date.getFullYear()}`}</p>
          <ExpandMoreIconComponent />
        </button>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex items-center">
        {/* Search Input */}
        <div className="mr-2 rounded-lg bg-primary-200 hover:shadow-lg">
          <input
            className="w-36 bg-transparent py-2 pl-4 text-sm text-typo-600 placeholder:text-typo-400 autofill:rounded-lg autofill:shadow-[inset_0_0_0_100px_#eff2fa] focus:outline-none"
            type="text"
            name="search"
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
            placeholder="Search"
          />
          <button disabled={!searchInputText}>
            <Clear
              className={searchInputText ? 'text-typo-400' : 'text-transparent'}
              sx={{ height: '1.4rem', width: '1.4rem', mx: '0.5rem' }}
              onClick={() => setSearchInputText('')}
            />
          </button>
          <button>
            <Search
              className="text-typo-400"
              sx={{ height: '1.4rem', width: '1.4rem', mr: '0.5rem' }}
            />
          </button>
        </div>

        {/* Language Selection*/}
        <button
          className={`${
            languagePopupIsOpen && 'bg-primary-200 shadow-lg'
          } relative mr-4 flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-primary-200 hover:shadow-lg`}
          onClick={() => setLanguagePopupIsOpen(true)}
        >
          <p className="text-xs text-typo-600">English</p>
          <ExpandMoreIconComponent />
          {languagePopupIsOpen && (
            <Popup
              items={[{ title: 'English' }, { title: 'Русский' }]}
              onClose={() => setLanguagePopupIsOpen(false)}
            />
          )}
        </button>

        {/* <Icon Buttons */}
        <IconButton
          className="mr-4"
          icon={
            <QuestionMark className="text-typo-700" sx={{ height: '1.3rem' }} />
          }
        />
        <IconButton
          className="mr-12"
          icon={
            <DarkModeOutlinedIcon
              className="text-typo-700"
              sx={{ height: '1.3rem' }}
            />
          }
        />

        {/* Profile Button */}
        <button className="-mx-4 flex items-center rounded-lg px-4 py-2 hover:bg-primary-200 hover:shadow-lg">
          <img
            src={profileImage}
            alt="profile picture"
            className="mr-2 h-10 w-10 rounded-full"
          />
          <p className="text-sm font-medium">Alex Smith</p>
          <ExpandMoreIconComponent />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
