import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

type Props = {
  id: string;
  text: string;
  progress: number;
  icon: JSX.Element;
  isDarkMode: boolean;
  mainColor?: string;
  textColor?: string;
};

const IndicatorBar = ({
  id,
  text,
  progress,
  icon,
  isDarkMode,
  mainColor = 'bg-primary-710',
  textColor = 'text-primary-710',
}: Props) => {
  return (
    <Link to={`list?id=${id}`}>
      <div
        className={`group relative flex h-[3.25rem] w-full items-center gap-3 overflow-hidden rounded-xl border border-primary-100 bg-opacity-0 px-3 transition hover:bg-opacity-10 dark:border-transparent dark:hover:border-slate-500 ${
          isDarkMode ? 'dark:bg-slate-800' : mainColor
        }`}
      >
        <div className={`absolute left-0 top-0 h-full w-1 ${mainColor}`} />
        <i
          className={`${mainColor} flex h-9 w-9 items-center justify-center rounded-full text-white`}
        >
          {icon}
        </i>
        <p className="flex-[0_0_10rem] text-sm text-typo-600 group-hover:text-black group-hover:text-opacity-70 dark:text-slate-300 dark:group-hover:text-slate-300 dark:group-hover:text-opacity-100">
          {text}
        </p>
        <div className="relative h-3 flex-1">
          <div
            className={`${mainColor} absolute h-3 w-full rounded opacity-30`}
          />
          <div
            style={{ width: `${progress}%` }}
            className={`${mainColor} absolute h-3 rounded`}
          />
        </div>
        <h3 className={`font-medium ${textColor} flex-none text-sm`}>
          {progress}%
        </h3>
      </div>
    </Link>
  );
};

export default IndicatorBar;
