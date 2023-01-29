import { configureStore } from '@reduxjs/toolkit';
import UserReducer from './slices/UserSlice';
import NavigationReducer from './slices/NavigationSlice';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    navigation: NavigationReducer,
  },
});
