import React from 'react';

type Props = {
  index: number;
  state: string;
  handleClick: (index: number) => void;
};

const Square = ({ index, state, handleClick }: Props) => {
  return (
    <button
      className="border border-gray-800 bg-slate-100 text-xl font-bold hover:bg-slate-200 active:bg-slate-300"
      onClick={handleClick.bind(null, index)}
    >
      {state}
    </button>
  );
};

export default Square;
