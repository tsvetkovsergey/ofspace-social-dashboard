import { DataGridColumnID } from './DataGrid';

export enum Language {
  English = 'en',
  Russian = 'ru',
}
export enum ResponseTime {
  Monthly = 'monthly',
  Daily = 'daily',
}
export enum PagesActivity {
  Monthly = 'monthly',
  Daily = 'daily',
}
export enum Latency {
  Weekly = 'weekly',
  Daily = 'daily',
}
export enum HighView {
  Weekly = 'weekly',
  Daily = 'daily',
}

export interface HighViewDataGrid {
  [DataGridColumnID.Value]: boolean;
  [DataGridColumnID.Sum]: boolean;
  [DataGridColumnID.Metric]: boolean;
  [DataGridColumnID.Tag]: boolean;
}
