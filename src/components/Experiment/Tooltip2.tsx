import { useEffect, useLayoutEffect, useState, useRef } from 'react';
import TooltipContainer from './TooltipContainer2';
import { Rect } from './Types';

type Props = { children: JSX.Element; targetRect: Rect };

const Tooltip = ({ targetRect, children }: Props) => {
  const [tooltipHeight, setTooltipHeight] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current?.getBoundingClientRect();
      setTooltipHeight(height);
    }
  }, []);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRect) {
    tooltipX = targetRect.left;
    tooltipY = targetRect.top - tooltipHeight;
    if (tooltipY < 125) {
      tooltipY = targetRect.bottom;
    }
  }

  return (
    <TooltipContainer x={tooltipX} y={tooltipY} contentRef={ref}>
      {children}
    </TooltipContainer>
  );
};

export default Tooltip;
