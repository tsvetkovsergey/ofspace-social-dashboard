import { Dispatch, MutableRefObject, SetStateAction, useEffect } from 'react';

// type Props = {
//   isOpen: boolean;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
//   ref: MutableRefObject<HTMLDivElement | null>;
// };

const useClickOutsideListener = (
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
  ref: MutableRefObject<HTMLDivElement | null>
): void => {
  // Listen for clicks outside popup menu to close the menu
  useEffect(() => {
    const clickHandler = (ev: MouseEvent) => {
      // Close popup menu only if you clicked
      // outside select button and menu
      if (
        ev.target !== null &&
        ref.current !== null &&
        ev.target instanceof Node &&
        !ref.current.contains(ev.target)
      ) {
        setIsOpen(false);
      }
    };

    isOpen && document.addEventListener('click', clickHandler);
    !isOpen && document.removeEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  }, [isOpen]);
};

export default useClickOutsideListener;
