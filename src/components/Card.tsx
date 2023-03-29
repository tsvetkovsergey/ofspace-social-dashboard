import { PropsWithChildren, MouseEvent } from 'react';

type Props = {
  className?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
};

const Card = ({ className, onClick, children }: PropsWithChildren<Props>) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-2xl bg-white p-5 shadow-md dark:border dark:border-slate-700 dark:bg-slate-900 dark:shadow-sm dark:shadow-cyan-900 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
