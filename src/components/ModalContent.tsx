import React, { PropsWithChildren } from 'react';

const ModalContent = ({ children }: PropsWithChildren) => {
  return <div className="pb-5">{children}</div>;
};

export default ModalContent;
