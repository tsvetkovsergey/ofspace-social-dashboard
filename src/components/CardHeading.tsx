import React from 'react';

type Props = {
  title: string;
};

const CardHeading = ({ title }: Props) => {
  return <h2 className="font-semibold dark:text-slate-100">{title}</h2>;
};

export default CardHeading;
