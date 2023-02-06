import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlice';
import NavigationReducer from './slices/NavigationSlice';
import ReportReducer from './slices/ReportSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    navigation: NavigationReducer,
    report: ReportReducer,
  },
});
