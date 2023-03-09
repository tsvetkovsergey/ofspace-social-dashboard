import { useLayoutEffect, useRef } from 'react';

import GardenerImage from '../../assets/gardener.webp';
import GardenerImageDarkMode from '../../assets/gardener_darkmode.webp';
import ClockFaceImage from '../../assets/clock.webp';
import ClockFaceImageDarkMode from '../../assets/clock_darkmode.webp';
import HoursHandImage from '../../assets/hour_hand.webp';
import HoursHandImageDarkMode from '../../assets/hour_hand_darkmode.webp';
import MinutesHandImage from '../../assets/minute_hand.webp';
import MinutesHandImageDarkMode from '../../assets/minute_hand_darkmode.webp';
import { useAppSelector } from '../../store/hooks';
import { selectMode } from '../../store/themeSlice';
import { ThemeMode } from '../../Types/Theme';

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
  const mode = useAppSelector(selectMode);
  // const [hoursDegree, setHoursDegree] = useState<number>(0);
  // const [minutesDegree, setMinutesDegree] = useState<number>(0);
  const hourHandRef = useRef<HTMLImageElement | null>(null);
  const minuteHandRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const setDegrees = () => {
      const { minutesDeg, hoursDeg } = getCurrentTimeDegrees();

      if (hourHandRef.current && minuteHandRef.current) {
        hourHandRef.current.style.transform = `translateX(50%) rotate(${hoursDeg}deg)`;
        minuteHandRef.current.style.transform = `translateX(50%) rotate(${minutesDeg}deg)`;
      }
    };

    // Check for current time every second
    setDegrees();
    const timer = setInterval(setDegrees, 1000);

    // Clear interval before component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative -mx-10 h-full">
      <img
        src={mode === ThemeMode.Dark ? GardenerImageDarkMode : GardenerImage}
        alt="gardener"
        className="absolute -bottom-5"
      />
      <div className="absolute right-8 -top-5 h-[5.3rem] w-40">
        <img
          src={
            mode === ThemeMode.Dark ? ClockFaceImageDarkMode : ClockFaceImage
          }
          alt="clock face"
          className="absolute"
        />
        <img
          src={
            mode === ThemeMode.Dark ? HoursHandImageDarkMode : HoursHandImage
          }
          alt="hours hand"
          ref={hourHandRef}
          className={`absolute right-1/2 bottom-0 mr-[0.15rem] mb-[0.08rem] h-12 origin-bottom transition`}
        />
        <img
          src={
            mode === ThemeMode.Dark
              ? MinutesHandImageDarkMode
              : MinutesHandImage
          }
          alt="minutes hand"
          ref={minuteHandRef}
          className={`absolute right-1/2 bottom-0 mr-[0.15rem] mb-[0.08rem] h-14 origin-bottom translate-x-1/2 transition`}
        />
      </div>
    </div>
  );
};

export default Clock;
