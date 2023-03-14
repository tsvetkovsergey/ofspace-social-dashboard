import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const UseRefExperiment = (props: Props) => {
  const [startTime, setStartTime] = useState(0);
  const [now, setNow] = useState(0);
  const [clickedTimes, setClickedTimes] = useState(0);
  const timerRef = useRef<number | null>(null);

  const handleStart = () => {
    if (timerRef.current !== null) clearInterval(timerRef.current);
    setStartTime(Date.now());
    setNow(Date.now());
    timerRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () =>
    timerRef.current !== null && clearInterval(timerRef.current);

  const handleClickTimes = () => setClickedTimes((curState) => curState + 1);

  const time = (now - startTime) / 1000;

  return (
    <div>
      <div className="mb-4 w-40 rounded-lg bg-slate-50 px-4 py-8 text-slate-600">
        Time: {time.toFixed(3)}
      </div>
      <button
        onClick={handleStart}
        className="mr-2 rounded-sm border border-slate-600 bg-slate-50 px-2 text-slate-600 transition hover:bg-slate-200 active:bg-slate-300"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="rounded-sm border border-slate-600 bg-slate-50 px-2 text-slate-600 transition hover:bg-slate-200 active:bg-slate-300"
      >
        Stop
      </button>
      <div className="mt-8">
        <button
          onClick={handleClickTimes}
          className="px-auto w-60 rounded-md border border-slate-600 bg-green-500 py-10 text-slate-600 transition hover:bg-green-400 active:scale-90"
        >
          You clicked: {clickedTimes} times!
        </button>
      </div>
    </div>
  );
};

export default UseRefExperiment;
