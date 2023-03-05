import React, { useRef, useState, useEffect } from 'react';
import Tooltip from './Tooltip';
import { Rect } from './Types';

type Props = {
  tooltipContent: JSX.Element;
  children: string;
};

const ButtonWithTooltip = ({ tooltipContent, children }: Props) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [targetRect, setTargetRect] = useState<Rect | null>();

  const handleEnter = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current?.getBoundingClientRect();
      setTargetRect({
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
      });
    }
  };

  const handleLeave = () => {
    if (targetRect) {
      setTargetRect(null);
    }
  };

  return (
    <>
      <button
        ref={buttonRef}
        onPointerEnter={handleEnter}
        onPointerLeave={handleLeave}
        className="rounded-md border border-slate-800 bg-slate-100 px-2 py-1 hover:bg-slate-200 active:bg-slate-300"
      >
        {children}
      </button>
      {targetRect && (
        <Tooltip targetRect={targetRect} tooltipContent={tooltipContent} />
      )}
    </>
  );
};

export default ButtonWithTooltip;
