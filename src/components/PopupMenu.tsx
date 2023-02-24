import React, { useEffect, useRef, useState } from 'react';
import PopupItem from '../Types/PopupItem';

type Props = {
  items: PopupItem[];
  onClose: () => void;
  onChange?: (itemId: string) => void;
};

const PopupMenu = ({ items, onClose, onChange }: Props) => {
  const popupRef = useRef<HTMLUListElement>(null);
  const [firstClick, setFirstClick] = useState(true);

  const itemClickHandler = (event: React.MouseEvent, itemId: string) => {
    event.stopPropagation();
    onChange && onChange(itemId);
    onClose();
  };

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
      {items.map((item) => (
        <li
          key={item.id}
          className={`${
            item.isActive
              ? 'bg-primary-250 hover:bg-primary-260'
              : 'bg-primary-200 hover:bg-primary-210'
          } cursor-pointer py-2 pl-4 pr-10`}
          onClick={(event) => itemClickHandler(event, item.id)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default PopupMenu;
