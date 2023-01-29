import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const enum ThemeMode {
  Light = 'light',
  Dark = 'dark',
}

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

export const { toggle, setMode } = themeSlice.actions;

export const selectMode = (state: RootState) => state.theme.mode;

export default themeSlice.reducer;
