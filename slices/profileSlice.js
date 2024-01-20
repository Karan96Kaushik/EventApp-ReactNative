// slices/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: 'Karan Kaushik',
    isLoggedIn: 'True',
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = 'True';
    },
    logout: (state) => {
      state.isLoggedIn = 'False';
    },
  },
});

export const { login, logout } = profileSlice.actions;

export default profileSlice.reducer;
