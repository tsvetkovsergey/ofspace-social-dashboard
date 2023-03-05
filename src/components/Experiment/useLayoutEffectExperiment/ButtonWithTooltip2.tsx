import { useState, useRef } from 'react';
import Tooltip from './Tooltip2';

import { Rect } from './Types';

type Props = { children: string; tooltipContent: JSX.Element };

const ButtonWithTooltip = ({ children, tooltipContent }: Props) => {
  const [targetRect, setTargetRect] = useState<Rect | null>();
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleEnter = () => {
    if (buttonRef.current !== null) {
      const rect = buttonRef.current.getBoundingClientRect();
      setTargetRect({
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
      });
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handleEnter}
        onPointerLeave={() => {
          setTargetRect(null);
        }}
        className="cursor-default rounded-md bg-slate-50 py-1 px-3 hover:bg-slate-200 active:bg-slate-300"
      >
        {children}
      </button>
      {targetRect && (
        <Tooltip targetRect={targetRect}>{tooltipContent}</Tooltip>
      )}
    </>
  );
};

export default ButtonWithTooltip;
