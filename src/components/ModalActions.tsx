import React, { PropsWithChildren } from 'react';

type Props = {
  className: string;
};

const ModalActions = ({ className, children }: PropsWithChildren<Props>) => {
  return (
    <div className={`flex items-center justify-end gap-2 ${className}`}>
      {children}
    </div>
  );
};

export default ModalActions;
