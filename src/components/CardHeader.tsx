import { PropsWithChildren } from 'react';
import CardHeading from './CardHeading';

type Props = {
  title: string;
  className?: string;
};

const CardHeader = ({
  children,
  className,
  title,
}: PropsWithChildren<Props>) => {
  return (
    <div className={`${className} flex h-8 items-center justify-between`}>
      <CardHeading title={title} />
      <div className="flex gap-2">{children}</div>
    </div>
  );
};

export default CardHeader;
