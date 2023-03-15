import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import { useAppSelector } from './store/hooks';
import { selectLanguage, setLanguage } from './store/settingsSlice';
import { selectMode, setMode } from './store/themeSlice';
import { Language } from './Types/Settings';
import { ThemeMode } from './Types/Theme';

function App() {
  const systemThemeIsDark = useMediaQuery('(prefers-color-scheme: dark)');
  const mode = useAppSelector(selectMode);
  const { i18n } = useTranslation();
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();

  // Set Initial Theme Settings
  useEffect(() => {
    const systemMode = systemThemeIsDark ? ThemeMode.Dark : ThemeMode.Light;
    dispatch(setMode(systemMode));
  }, []);

  // Set Initial Language Settings
  useEffect(() => {
    const systemLanguage = navigator.language.startsWith('ru')
      ? Language.Russian
      : Language.English;
    dispatch(setLanguage(systemLanguage));
  }, []);

  // Set document bg based on theme
  useEffect(() => {
    if (mode === ThemeMode.Dark) {
      document.documentElement.style.backgroundColor = '#22172f';
    }

    if (mode === ThemeMode.Light) {
      document.documentElement.style.backgroundColor = '#f7fbff';
    }
  }, [mode]);

  // Set language for i18n
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return (
    <div className={`${mode === ThemeMode.Dark ? 'dark' : ''}`}>
      {/* <div className="min-h-screen bg-primary-50 dark:bg-primary_dark-710 dark:text-slate-100"> */}
      <div className="min-h-screen bg-primary-50 dark:bg-dark-bg-gradient dark:text-slate-100">
        <Navbar />
        <div className="flex overflow-hidden">
          <Sidebar />
          <main className="ml-24 h-full flex-1 overflow-auto p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
