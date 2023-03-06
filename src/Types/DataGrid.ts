// export type DataGridColumnID = 'value' | 'sum' | 'metric' | 'tag';

export enum DataGridColumnID {
  Value = 'value',
  Sum = 'sum',
  Metric = 'metric',
  Tag = 'tag',
}

export interface DataGridColumn {
  id: DataGridColumnID;
  titleId: string;
  grid: string;
}
