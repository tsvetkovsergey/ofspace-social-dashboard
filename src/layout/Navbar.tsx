import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMode, toggle } from '../store/themeSlice';
import { ReactSVG } from 'react-svg';
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

import profileImage from '../assets/profile_2.png';
import logoVector from '../assets/logo_vector.svg';
import PopupMenu from '../components/PopupMenu';
import { Language } from '../Types/Settings';
import { selectLanguage, setLanguage } from '../store/settingsSlice';
import RoundIcon from '../components/RoundIcon';
import Select from '../components/Select';
import PopupItem from '../Types/PopupItem';
import { useTranslation } from 'react-i18next';

interface LanguagePopup extends PopupItem {
  id: Language;
}

const ExpandMoreIconComponent = (): JSX.Element => (
  <ExpandMoreIcon
    className="text-typo-300"
    sx={{ height: '1.4rem', width: '1.4rem' }}
  />
);

const Navbar = () => {
  const [searchInputText, setSearchInputText] = useState<string>('');
  const { t } = useTranslation();
  // const [languagePopupIsOpen, setLanguagePopupIsOpen] =
  //   useState<boolean>(false);

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

  const languageOptions: LanguagePopup[] = [
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

  // const languageButtonText = languageItems.find(
  //   (item) => item.id === language
  // )?.title;

  return (
    <div className="sticky top-0 left-0 z-20 flex h-24 flex-[0_0_6rem] items-center justify-between bg-white shadow-lg backdrop-blur-md dark:bg-slate-900 dark:bg-opacity-60">
      {/* LEFT SIDE */}

      <div className="flex items-center">
        {/* Logo */}
        <Link to="/" className="mx-8">
          {/* <img className="h-8 w-8 text-blue-500" src={logoVector} alt="logo" /> */}
          <ReactSVG
            src={logoVector}
            className="h-8 w-8"
            beforeInjection={(svg) => {
              svg.classList.add('stroke-secondary-500', 'dark:stroke-blue-100');
            }}
          />
        </Link>

        {/* Heading */}
        <div className="mx-8">
          <h1 className="text-lg font-bold text-typo-800 dark:text-blue-500">
            {t('Welcome to Dashboard')}
          </h1>
          {/* button styles for hover */}
          {/* transition hover:bg-primary-200 hover:shadow-lg dark:hover:bg-blue-500 dark:hover:text-white dark:hover:shadow-none */}
          <div className="-ml-2 flex items-center rounded-lg py-1 px-2 text-typo-600 dark:text-slate-400">
            <p className="text-sm">{`${date.getDate()} ${date.toLocaleDateString(
              'en',
              { month: 'long' }
            )} ${date.getFullYear()}`}</p>
            {/* <ExpandMoreIconComponent /> */}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center">
        {/* Search Input */}
        <div className="group relative mr-2 flex items-center rounded-lg bg-primary-200 transition hover:shadow-lg dark:bg-slate-800 dark:hover:bg-blue-500">
          <input
            className={`${
              searchInputText ? 'w-36' : 'w-[11rem]'
            } bg-transparent py-2 pl-4 text-sm text-typo-600 placeholder:text-typo-400 placeholder:transition autofill:rounded-lg autofill:shadow-[inset_0_0_0_100px_#eff2fa] autofill:transition focus:outline-none dark:text-white dark:placeholder:text-typo_dark-700 dark:autofill:shadow-[inset_0_0_0_100px_#1e293b] dark:group-hover:placeholder:text-white dark:group-hover:autofill:shadow-[inset_0_0_0_100px_#3b82f6]`}
            type="text"
            name="search"
            value={searchInputText}
            onChange={(e) => setSearchInputText(e.target.value)}
            placeholder={t('Search') as string}
          />
          <button disabled={!searchInputText}>
            {searchInputText && (
              <Clear
                className="text-typo-400 dark:text-white"
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
              className="text-typo-400 dark:text-slate-50"
              sx={{
                height: '1.4rem',
                width: '1.4rem',
                mr: '0.5rem',
                ml: '0.3rem',
              }}
            />
          </button>
        </div>

        {/* Language Selection - Old Version */}
        {/* <button
          className={`${
            languagePopupIsOpen
              ? 'bg-primary-200 shadow-lg dark:bg-blue-500 dark:text-slate-50 dark:[&_svg]:text-slate-50'
              : 'dark:[&_svg]:text-slate-400 dark:[&:hover_svg]:text-slate-50'
          } relative mr-4 flex items-center gap-2 rounded-lg px-4 py-2 text-typo-600 transition hover:bg-primary-200 hover:shadow-lg dark:text-slate-400 dark:hover:bg-blue-500 dark:hover:text-slate-50 dark:hover:shadow-none dark:[&_svg]:transition `}
          onClick={() => setLanguagePopupIsOpen(true)}
        >
          <p className="text-xs">{languageButtonText}</p>
          <ExpandMoreIconComponent />
          {languagePopupIsOpen && (
            <PopupMenu
              items={languageItems}
              onClose={() => setLanguagePopupIsOpen(false)}
              onChange={(itemId) => dispatch(setLanguage(itemId as Language))}
            />
          )}
        </button> */}

        {/* Select Language Button */}
        <Select
          activeItemID={language}
          options={languageOptions}
          onChange={(itemId) => dispatch(setLanguage(itemId as Language))}
          isNavbar={true}
        />

        {/* Icon Buttons */}
        <IconButton
          className="mx-4"
          icon={
            <QuestionMark
              className="text-typo-700 dark:text-slate-50"
              sx={{ height: '1.3rem' }}
            />
          }
        />
        <IconButton
          className="mr-12"
          icon={
            mode === ThemeMode.Dark ? (
              <DarkModeOutlinedIcon
                className="text-slate-50"
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
        <button className="-ml-4 mr-4 flex items-center rounded-lg px-4 py-2 transition hover:bg-primary-200 hover:shadow-lg dark:text-slate-300 dark:hover:bg-blue-500 dark:hover:text-slate-50 dark:hover:shadow-none dark:[&_svg]:text-slate-300 dark:[&_svg]:transition dark:[&:hover_svg]:text-slate-50">
          <RoundIcon
            icon={<img src={profileImage} alt="profile picture" />}
            iconStyle="bg-typo-500 mr-4 dark:bg-blue-100"
            isInNavbar={true}
          />
          <p className="text-sm font-medium">Alex Smith</p>
          <ExpandMoreIconComponent />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
