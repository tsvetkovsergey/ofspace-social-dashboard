import { useEffect, useState } from 'react';
import { DataGridColumn } from '../Types/DataGrid';

type Props = {
  columns: DataGridColumn[];
  data: any[];
  gridStyle?: string;
};

const generateRows = ({ columns, data }: Props) => {
  let rows: JSX.Element[][] = [];
  data.forEach((item) => {
    const row = columns.map((col, index) => (
      <td
        className="py-4 group-first:pt-0 group-last:border-none group-last:pb-0"
        key={index}
      >
        {item[col.id]}
      </td>
    ));
    rows.push(row);
  });
  return rows;
};

const DataGrid = ({ columns, data, gridStyle }: Props) => {
  const [rows, setRows] = useState<JSX.Element[][]>([]);

  useEffect(() => setRows(generateRows({ columns, data })), [columns, data]);

  return (
    <table className={`grid ${gridStyle}`}>
      {/* HEADINGS */}
      <thead className="contents text-sm text-typo-300">
        <tr className="contents">
          {columns.map((col, index) => (
            <th className="pt-2 pb-5 text-left font-medium" key={index}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>

      {/* DATA */}
      <tbody className="contents text-sm font-light text-typo-600">
        {rows.map((row, index) => (
          <tr
            className="group contents [&>td]:border-b-[1px] [&>td]:border-primary-200"
            key={index}
          >
            {row}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataGrid;
