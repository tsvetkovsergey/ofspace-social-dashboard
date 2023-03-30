import React from 'react';

type Props = {
  children: string;
};

const ModalTitle = ({ children }: Props) => {
  return <h3 className="pb-5 text-lg font-semibold">{children}</h3>;
};

export default ModalTitle;
