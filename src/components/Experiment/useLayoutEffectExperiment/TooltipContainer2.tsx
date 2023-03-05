import { MutableRefObject } from 'react';

type Props = {
  children: JSX.Element;
  x: number;
  y: number;
  contentRef: MutableRefObject<HTMLDivElement | null>;
};

const TooltipContainer = ({ children, x, y, contentRef }: Props) => {
  return (
    <div
      ref={contentRef}
      className="absolute left-0 top-0 rounded-md border border-slate-500 bg-slate-900 p-2 text-sm text-slate-400"
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      {children}
    </div>
  );
};

export default TooltipContainer;
