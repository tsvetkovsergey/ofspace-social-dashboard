import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import { useAppSelector } from './store/hooks';
import { selectMode } from './store/themeSlice';
import { ThemeMode } from './Types/Theme';

function App() {
  const mode = useAppSelector(selectMode);

  return (
    <div className={`${mode === ThemeMode.Dark ? 'dark' : ''} `}>
      <div className="flex h-screen w-screen flex-col dark:text-slate-100">
        <Navbar />
        <div className="flex flex-1 overflow-hidden ">
          <Sidebar />
          <main className="flex-1 overflow-scroll bg-primary-50 p-8 dark:bg-primary_dark-700">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
