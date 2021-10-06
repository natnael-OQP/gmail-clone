import {  createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    SendMessageIsOpen: false,
  },
  reducers: {
    OpenSendMessage: (state) => {      
      state.SendMessageIsOpen = true;
    },
    CloseSendMessage: (state) => {
      state.SendMessageIsOpen = false;
    },
  },
});

export const { OpenSendMessage, CloseSendMessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;



export default mailSlice.reducer;
