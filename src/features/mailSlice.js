import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    mail: null,
  },
  reducers: {
    setMail: (state,action) => {      
      state.mail = action.payload;
    },
  },
});

export const { increment, decrement } = mailSlice.actions;

export const selectCount = (state) => state.mail.mail;



export default mailSlice.reducer;
