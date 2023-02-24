import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ThemeMode } from '../Types/Theme';
import { RootState } from './store';

interface ThemeState {
  mode: ThemeMode;
}

const initialState: ThemeState = {
  mode: ThemeMode.Light,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.mode =
        state.mode === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light;
    },
    setMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    },
  },
});

// Actions
export const { toggle, setMode } = themeSlice.actions;

// Selectors
export const selectMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
