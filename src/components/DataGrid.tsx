import { useEffect, useState } from 'react';
import useNotNullableTranslation from '../hooks/useNotNullableTranslation';
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
        className="flex items-center py-3 group-first:pt-0 group-last:border-none group-last:pb-0"
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
  const { t } = useNotNullableTranslation();

  useEffect(() => setRows(generateRows({ columns, data })), [columns, data]);

  {
    /* <table className={`grid ${gridStyle}`}> 
      <table className={`grid ${gridStyle}`} style={{ gridTemplateColumns: gridStyle }}> 
      <table className="grid"> */
  }

  return (
    <table style={{ display: 'grid', gridTemplateColumns: gridStyle }}>
      {/* HEADINGS */}
      <thead className="contents text-sm text-typo-300 dark:text-inherit">
        <tr className="contents">
          {columns.map((col, index) => (
            <th className="pt-2 pb-4 text-left text-sm font-medium" key={index}>
              {t(col.titleId)}
            </th>
          ))}
        </tr>
      </thead>

      {/* DATA */}
      <tbody className="contents text-sm font-light text-typo-600 dark:text-slate-300">
        {rows.map((row, index) => (
          <tr
            className="group contents [&>td]:border-b-[1px] [&>td]:border-primary-200 dark:[&>td]:border-slate-500"
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
