import { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopupItem from '../Types/PopupItem';
import MenuItem from './MenuItem';

type Props = {
  activeItemID: string;
  options: PopupItem[];
  onChange: (itemId: string) => void;
};

const Select = ({ activeItemID, onChange, options }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [firstClick, setFirstClick] = useState(true);

  const buttonText = options.find((opt) => opt.id === activeItemID)?.title;

  const menuClickHandler = (event: React.MouseEvent) => {
    // Send item ID to parent
    if (
      event.target instanceof HTMLLIElement &&
      typeof event.target.dataset.id === 'string'
    ) {
      const el = event.target as HTMLLIElement;
      onChange(el.dataset.id as string);
    }
    // Close popup menu
    setIsOpen(false);
  };

  // Listen for clicks outside popup menu to close the menu
  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      if (firstClick) {
        setFirstClick(false);
        return;
      }
      setFirstClick(true);
      setIsOpen(false);
    };

    isOpen && document.addEventListener('click', clickHandler);
    !isOpen && document.removeEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [isOpen, firstClick]);

  return (
    <button
      className={`${
        isOpen ? 'shadow-lg' : 'hover:shadow-lg'
      } relative flex h-8 items-center rounded-lg bg-primary-100 px-2 transition`}
      onClick={() => setIsOpen(true)}
    >
      <p className="text-xs text-typo-500">{buttonText}</p>
      <ExpandMoreIcon
        className="text-typo-300"
        sx={{ height: '1.2rem', width: '1.2rem' }}
      />
      {isOpen && (
        <ul
          className="absolute top-full right-0 z-20 mt-2 cursor-default rounded-lg border-[1px] border-primary-220 bg-primary-200 py-2 text-left text-sm text-typo-700 shadow-lg"
          onClick={menuClickHandler}
        >
          {options.map((option) => (
            <MenuItem
              key={option.id}
              itemId={option.id}
              isActive={option.id === activeItemID}
            >
              {option.title}
            </MenuItem>
          ))}
        </ul>
      )}
    </button>
  );
};

export default Select;
