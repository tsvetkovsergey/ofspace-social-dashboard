import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import { useAppSelector } from './store/hooks';
import { selectLanguage } from './store/settingsSlice';
import { selectMode } from './store/themeSlice';
import { ThemeMode } from './Types/Theme';

function App() {
  const mode = useAppSelector(selectMode);
  const { i18n } = useTranslation();
  const language = useSelector(selectLanguage);

  useEffect(() => {
    if (mode === ThemeMode.Dark) {
      document.documentElement.style.backgroundColor = '#22172f';
    }

    if (mode === ThemeMode.Light) {
      document.documentElement.style.backgroundColor = '#f7fbff';
    }
  }, [mode]);

  // Set language for this app
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
