import { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

const Card = ({ children, className }: PropsWithChildren<Props>) => {
  return (
    <div
      className={`rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
