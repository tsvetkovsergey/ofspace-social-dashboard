import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, toggle } from '../store/themeSlice';
import { ThemeMode } from '../Types/Theme';
import { Link } from 'react-router-dom';
import IconButton from '../components/IconButton';
// Icons
import Clear from '@mui/icons-material/Clear';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Search from '@mui/icons-material/Search';
import QuestionMark from '@mui/icons-material/QuestionMark';

import profileImage from '../assets/profile.jpg';
import logo from '../assets/logo.jpg';
import PopupMenu from '../components/PopupMenu';
import { Language } from '../Types/Settings';
import { selectLanguage, setLanguage } from '../store/settingsSlice';

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

  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const language = useSelector(selectLanguage);

  // TODO: Change next two lines
  const date = new Date();
  // const date = new Date('06-12-2022');

  const languageItems = [
    {
      id: Language.English,
      title: 'English',
      isActive: language === Language.English,
    },
    {
      id: Language.Russian,
      title: 'Русский',
      isActive: language === Language.Russian,
    },
  ];

  const languageButtonText = languageItems.find(
    (item) => item.id === language
  )?.title;

  return (
    <div className="relative top-0 left-0 z-10 flex h-24 flex-[0_0_6rem] items-center justify-between bg-white shadow-lg">
      {/* LEFT SIDE */}

      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="mx-8">
          <img className="h-8 w-8" src={logo} alt="logo" />
        </Link>

        {/* Heading */}
        <div className="mx-8">
          <h1 className="text-lg font-bold text-typo-800">
            Welcome to Dashboard
          </h1>
          <button className="-ml-2 flex items-center rounded-lg py-1 px-2 transition hover:bg-primary-200 hover:shadow-lg">
            <p className="text-sm text-typo-600">{`${date.getDate()} ${date.toLocaleDateString(
              'en',
              { month: 'long' }
            )} ${date.getFullYear()}`}</p>
            <ExpandMoreIconComponent />
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center">
        {/* Search Input */}
        <div className="relative mr-2 flex items-center rounded-lg bg-primary-200 transition hover:shadow-lg">
          <input
            className={`${
              searchInputText ? 'w-36' : 'w-[11rem]'
            } bg-transparent py-2 pl-4 text-sm text-typo-600 placeholder:text-typo-400 autofill:rounded-lg autofill:shadow-[inset_0_0_0_100px_#eff2fa] focus:outline-none`}
            type="text"
            name="search"
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
            placeholder="Search"
          />
          <button disabled={!searchInputText}>
            {searchInputText && (
              <Clear
                className="text-typo-400"
                sx={{
                  height: '1.4rem',
                  width: '1.4rem',
                  mx: '0.3rem',
                }}
                onClick={() => setSearchInputText('')}
              />
            )}
          </button>
          {/* Buttons divider */}
          {searchInputText && (
            <div className="absolute right-[2.2rem] h-[1.4rem] w-[1px] bg-typo-400"></div>
          )}
          <button>
            <Search
              className="text-typo-400"
              sx={{
                height: '1.4rem',
                width: '1.4rem',
                mr: '0.5rem',
                ml: '0.3rem',
              }}
            />
          </button>
        </div>

        {/* Language Selection*/}
        <button
          className={`${
            languagePopupIsOpen && 'bg-primary-200 shadow-lg'
          } relative mr-4 flex items-center gap-2 rounded-lg px-4 py-2 transition hover:bg-primary-200 hover:shadow-lg`}
          onClick={() => setLanguagePopupIsOpen(true)}
        >
          <p className="text-xs text-typo-600">{languageButtonText}</p>
          <ExpandMoreIconComponent />
          {languagePopupIsOpen && (
            <PopupMenu
              items={languageItems}
              onClose={() => setLanguagePopupIsOpen(false)}
              onChange={(itemId) => dispatch(setLanguage(itemId as Language))}
            />
          )}
        </button>

        {/* Icon Buttons */}
        <IconButton
          className="mr-4"
          icon={
            <QuestionMark className="text-typo-700" sx={{ height: '1.3rem' }} />
          }
        />
        <IconButton
          className="mr-12"
          icon={
            mode === ThemeMode.Dark ? (
              <DarkModeOutlinedIcon
                className="text-typo-700"
                sx={{ height: '1.3rem' }}
              />
            ) : (
              <LightModeOutlinedIcon
                className="text-typo-700"
                sx={{ height: '1.3rem' }}
              />
            )
          }
          onClick={() => dispatch(toggle())}
        />

        {/* Profile Button */}
        <button className="-ml-4 mr-4 flex items-center rounded-lg px-4 py-2 transition hover:bg-primary-200 hover:shadow-lg">
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
