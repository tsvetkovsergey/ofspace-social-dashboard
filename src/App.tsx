import Navbar from './layout/Navbar';
import { useAppSelector } from './store/hooks';
import { selectMode, ThemeMode } from './store/themeSlice';

function App() {
  const mode = useAppSelector(selectMode);

  return (
    <div
      className={`${mode === ThemeMode.Dark ? 'dark' : ''} h-screen w-screen`}
      style={{}}
    >
      <Navbar />
      <div className="bg-neutral-200 dark:bg-slate-700">Hello World.</div>
    </div>
  );
}

export default App;
