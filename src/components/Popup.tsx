import { useEffect, useRef, useState } from 'react';
import PopupItem from '../Types/PopupItem';

type Props = {
  items: PopupItem[];
  onClose: () => void;
};

const Popup = ({ items, onClose }: Props) => {
  const popupRef = useRef<HTMLUListElement>(null);
  const [firstClick, setFirstClick] = useState(true);

  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      // Skip first click
      if (firstClick) {
        setFirstClick(false);
        return;
      }
      // If clicked inside popup just ignore
      if (popupRef.current?.contains(ev.target as HTMLElement)) return;

      onClose();
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  }, [firstClick]);

  return (
    <ul
      className="absolute top-full right-0 z-20 mt-2 cursor-default rounded-lg border-[1px] border-primary-220 bg-primary-200 py-2 text-left text-sm text-typo-700 shadow-lg"
      ref={popupRef}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="cursor-pointer bg-primary-200 py-2 pl-4 pr-10 hover:bg-primary-210"
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default Popup;
