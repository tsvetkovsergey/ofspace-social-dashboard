import React from 'react';

type Props = {
  children: string;
};

const ModalText = ({ children }: Props) => {
  return <p className="text-typo-600 dark:text-slate-300">{children}</p>;
};

export default ModalText;
