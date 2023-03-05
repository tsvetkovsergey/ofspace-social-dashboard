import React, { useEffect, useRef, useState } from 'react';

type Props = {};

const UseRefExperiment = (props: Props) => {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());

    intervalRef.current && clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button
        onClick={handleStart}
        className="rounded-md border border-slate-300 bg-slate-100 px-2 text-slate-900"
      >
        Start
      </button>
      <button
        onClick={handleStop}
        className="rounded-md border border-slate-300 bg-slate-100 px-2 text-slate-900"
      >
        Stop
      </button>
    </div>
  );
};

export default UseRefExperiment;
