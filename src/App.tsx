import { Outlet } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Sidebar from './layout/Sidebar';
import { useAppSelector } from './store/hooks';
import { selectMode } from './store/themeSlice';
import { ThemeMode } from './Types/Theme';

function App() {
  const mode = useAppSelector(selectMode);

  return (
    <div
      className={`${
        mode === ThemeMode.Dark ? 'dark' : ''
      } flex h-screen w-screen flex-col`}
    >
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-scroll bg-primary-50 p-8 dark:bg-primary-800">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
