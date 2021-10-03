import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const userSlice = createSlice({
  name: 'loggedUser',
  initialState: {
    user: null,
  },
  reducers: {
    increment: (state,action) => {      
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { increment, decrement } = userSlice.actions;

export const selectCount = (state) => state.loggedUser.user;



export default userSlice.reducer;
