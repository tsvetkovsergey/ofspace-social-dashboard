import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlice';
import settingsReducer from './settingsSlice';

const store = configureStore({
  reducer: {
    theme: themeReducer,
    settings: settingsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
