import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

// Add other slices and reducers as needed

export const { setUser } = userSlice.actions;

const rootReducer = {
  user: userSlice.reducer,
  // Add other reducers here
};

export default rootReducer;
