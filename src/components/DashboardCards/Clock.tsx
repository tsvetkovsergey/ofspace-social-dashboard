import { useEffect, useState, useRef } from 'react';

import GardenerImage from '../../assets/clock_gardener.png';
import ClockFaceImage from '../../assets/clock_face.png';
import HoursHandImage from '../../assets/hour_hand.png';
import MinutesHandImage from '../../assets/minute_hand.png';

type Props = {};

// Returns hour in 12 based format
const formatHoursTo12 = (n: number) => n % 12 || 0;

// Returns degrees for clock hands
// based on current time
const getCurrentTimeDegrees = (): { minutesDeg: number; hoursDeg: number } => {
  const now = new Date();

  // You can set custom time for testing purposes
  // now.setHours(18);
  // now.setMinutes(47);

  const hours = now.getHours();
  const minutes = now.getMinutes();

  // Degrees you should turn clock hands
  const minutesDeg = minutes * 6;
  const hoursDeg = formatHoursTo12(hours) * 30 + minutes / 2;

  return { minutesDeg, hoursDeg };
};

const Clock = (props: Props) => {
  // const [hoursDegree, setHoursDegree] = useState<number>(0);
  // const [minutesDegree, setMinutesDegree] = useState<number>(0);
  const hourHandRef = useRef<HTMLImageElement>(null);
  const minuteHandRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const setDegrees = () => {
      const { minutesDeg, hoursDeg } = getCurrentTimeDegrees();

      if (hourHandRef.current && minuteHandRef.current) {
        hourHandRef.current.style.transform = `translateX(50%) rotate(${hoursDeg}deg)`;
        minuteHandRef.current.style.transform = `translateX(50%) rotate(${minutesDeg}deg)`;
      }
    };

    // Check for current time every second
    const timer = setInterval(setDegrees, 1000);

    // Clear interval before component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -mx-10 h-full">
      <img src={GardenerImage} alt="gardener" className="absolute -bottom-5" />
      <div className="absolute right-8 -top-5 h-[5.3rem] w-40">
        <img src={ClockFaceImage} alt="clock face" className="absolute" />
        <img
          src={HoursHandImage}
          alt="hours hand"
          ref={hourHandRef}
          className={`absolute right-1/2 bottom-0 mr-[0.15rem] mb-[0.08rem] h-12 origin-bottom`}
        />
        <img
          src={MinutesHandImage}
          alt="minutes hand"
          ref={minuteHandRef}
          className={`absolute right-1/2 bottom-0 mr-[0.15rem] mb-[0.08rem] h-14 origin-bottom translate-x-1/2`}
        />
      </div>
    </div>
  );
};

export default Clock;
