import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PopupMenu from './PopupMenu';
import PopupItem from '../Types/PopupItem';

type Props = {
  items: PopupItem[];
  onChange: (itemId: string) => void;
};

const CardMenu = ({ items, onChange }: Props) => {
  const [isPopupOpened, setIsPopupOpened] = useState(false);

  const buttonText = items.find((item) => item.isActive)?.title;

  const onChangeHandler = (itemId: string) => {
    onChange(itemId);
  };

  return (
    <button
      className={`${
        isPopupOpened ? 'shadow-lg' : 'hover:shadow-lg'
      } relative flex h-8 items-center rounded-lg bg-primary-100 px-2 transition `}
      onClick={() => setIsPopupOpened(true)}
    >
      <p className="text-xs text-typo-500">{buttonText}</p>
      <ExpandMoreIcon
        className="text-typo-300"
        sx={{ height: '1.2rem', width: '1.2rem' }}
      />
      {isPopupOpened && (
        <PopupMenu
          items={items}
          onClose={() => setIsPopupOpened(false)}
          onChange={onChangeHandler}
        />
      )}
    </button>
  );
};

export default CardMenu;
