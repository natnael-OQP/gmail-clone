import {  createSlice } from '@reduxjs/toolkit';



export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    MailSelected:null,
    SendMessageIsOpen: false,
  },
  reducers: {
    OpenSendMessage: (state) => {      
      state.SendMessageIsOpen = true;
    },
    CloseSendMessage: (state) => {
      state.SendMessageIsOpen = false;
    },
    MailSelected: (state, action) => {
      state.MailSelected = action.payload;
    }
  },
});

export const { OpenSendMessage, CloseSendMessage,MailSelected } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.SendMessageIsOpen;
export const SelectMailSelected = (state) => state.mail.MailSelected;



export default mailSlice.reducer;
