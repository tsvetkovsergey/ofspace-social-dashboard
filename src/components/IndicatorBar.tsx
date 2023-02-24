import { useEffect, useRef } from 'react';

type Props = {
  text: string;
  progress: number;
  icon: JSX.Element;
  mainColor?: string;
  textColor?: string;
};

const IndicatorBar = ({
  text,
  progress,
  icon,
  mainColor = 'bg-primary-710',
  textColor = 'text-primary-710',
}: Props) => {
  // Backup
  // return (
  //   <div className="flex h-[3.25rem] w-full items-center overflow-hidden rounded-xl border border-primary-100">
  //     <div className={`mr-3 h-full w-1 ${mainColor}`} />
  //     <p className="text-sm text-typo-600">{text}</p>
  //     <h3 className={`font-medium ${textColor}`}>{progress}%</h3>
  //   </div>
  // );
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.style.width = `${progress}%`;
    }
  }, [progress]);

  return (
    <div
      className={`group relative flex h-[3.25rem] w-full items-center gap-3 overflow-hidden rounded-xl border border-primary-100 px-3 transition ${mainColor} bg-opacity-0 hover:bg-opacity-10`}
    >
      <div className={`absolute left-0 top-0 h-full w-1 ${mainColor}`} />
      <i
        className={`${mainColor} flex h-9 w-9 items-center justify-center rounded-full text-white`}
      >
        {icon}
      </i>
      <p className="flex-[0_0_10rem] text-sm text-typo-600 group-hover:text-black group-hover:text-opacity-70">
        {text}
      </p>
      <div className="relative h-3 flex-1">
        <div
          className={`${mainColor} absolute h-3 w-full rounded opacity-30`}
        />
        <div
          ref={indicatorRef}
          className={`${mainColor} absolute h-3 rounded`}
        />
      </div>
      <h3 className={`font-medium ${textColor} flex-none text-sm`}>
        {progress}%
      </h3>
    </div>
  );
};

export default IndicatorBar;
