import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataGridColumnID } from '../Types/DataGrid';
import {
  Language,
  PagesActivity,
  ResponseTime,
  Latency,
  HighView,
  HighViewDataGrid,
} from '../Types/Settings';
import { RootState } from './store';

interface InitialStateTypes {
  language: Language;
  responseTimeChart: ResponseTime;
  pagesActivityChart: PagesActivity;
  latencyChart: Latency;
  highViewChart: HighView;
  highViewGrid: HighViewDataGrid;
}

const initialState: InitialStateTypes = {
  language: Language.Russian,
  responseTimeChart: ResponseTime.Monthly,
  pagesActivityChart: PagesActivity.Monthly,
  latencyChart: Latency.Weekly,
  highViewChart: HighView.Weekly,
  highViewGrid: {
    [DataGridColumnID.Value]: true,
    [DataGridColumnID.Sum]: true,
    [DataGridColumnID.Metric]: true,
    [DataGridColumnID.Tag]: true,
  },
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
    },
    setResponseTimeChart: (state, action: PayloadAction<ResponseTime>) => {
      state.responseTimeChart = action.payload;
    },
    setPagesActivityChart: (state, action: PayloadAction<PagesActivity>) => {
      state.pagesActivityChart = action.payload;
    },
    setLatencyChart: (state, action: PayloadAction<Latency>) => {
      state.latencyChart = action.payload;
    },
    setHighViewChart: (state, action: PayloadAction<HighView>) => {
      state.highViewChart = action.payload;
    },
    setHighViewGrid: (state, action: PayloadAction<HighViewDataGrid>) => {
      state.highViewGrid = action.payload;
    },
  },
});

// Actions
export const {
  setLanguage,
  setResponseTimeChart,
  setPagesActivityChart,
  setLatencyChart,
  setHighViewChart,
  setHighViewGrid,
} = settingsSlice.actions;

// Selectors
export const selectLanguage = (state: RootState) => state.settings.language;
export const selectResponseTimeChart = (state: RootState) =>
  state.settings.responseTimeChart;
export const selectPagesActivityChart = (state: RootState) =>
  state.settings.pagesActivityChart;
export const selectLatencyChart = (state: RootState) =>
  state.settings.latencyChart;
export const selectHighViewChart = (state: RootState) =>
  state.settings.highViewChart;
export const selectHighViewGrid = (state: RootState) =>
  state.settings.highViewGrid;

export default settingsSlice.reducer;
