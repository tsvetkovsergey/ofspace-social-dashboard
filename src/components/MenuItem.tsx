import React, { PropsWithChildren } from 'react';

type Props = {
  itemId: string;
  isActive: boolean;
  children: string;
};

const MenuItem = ({ itemId, isActive, children }: Props) => {
  return (
    <li
      data-id={itemId}
      className={`${
        isActive
          ? 'bg-primary-250 hover:bg-primary-260'
          : 'bg-primary-200 hover:bg-primary-210'
      } cursor-pointer py-2 pl-4 pr-10`}
    >
      {children}
    </li>
  );
};

export default MenuItem;
