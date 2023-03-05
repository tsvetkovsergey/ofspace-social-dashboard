import React, { MutableRefObject, useEffect } from 'react';

type Props = {
  children: JSX.Element;
  containerRef: MutableRefObject<HTMLDivElement | null>;
  x: number;
  y: number;
};

const TooltipContainer = ({ children, containerRef, x, y }: Props) => {
  return (
    <div
      className="absolute top-0 left-0"
      style={{ transform: `translate(${x}px,${y}px)` }}
    >
      <div
        ref={containerRef}
        className="rounded-md border border-slate-500 bg-slate-800 p-2 text-sm text-slate-100"
      >
        {children}
      </div>
    </div>
  );
};

export default TooltipContainer;
