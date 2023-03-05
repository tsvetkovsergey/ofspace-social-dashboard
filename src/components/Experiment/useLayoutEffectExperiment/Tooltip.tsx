import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import TooltipContainer from './TooltipContainer';
import { Rect } from './Types';

type Props = {
  tooltipContent: JSX.Element;
  targetRect: Rect;
};

const Tooltip = ({ tooltipContent, targetRect }: Props) => {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current !== null) {
      setTooltipHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect !== null) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight - 2;
    if (tooltipY < 125) {
      tooltipY = targetRect.bottom + 2;
    }
  }

  return createPortal(
    <TooltipContainer x={tooltipX} y={tooltipY} containerRef={ref}>
      {tooltipContent}
    </TooltipContainer>,
    document.body
  );
};

export default Tooltip;
