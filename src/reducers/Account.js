import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        customerName: "Waad Ajawneh",
        accountNumber: "123456",
        accountType: "Savings account",
      },
      {
        id: 2,
        customerName: "Norman Alzawahreh",
        accountNumber: "987654",
        accountType: "Current account",
      },
      {
        id: 3,
        customerName: "Dareen Hiasat",
        accountNumber: "944454",
        accountType: "Student account",
      },
      {
        id: 4,
        customerName: "Dana Alomari",
        accountNumber: "987777",
        accountType: "Savings account",
      },
      {
        id: 5,
        customerName: "Raneem Hamed",
        accountNumber: "984556",
        accountType: "Salary account",
      },
];

const accountSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    deleUser: (state, action) => {
      let newState = state.filter((e) => {
        return e.id != action.payload;
      });
      return (state = newState);
    },
  },
});
export const accountState = (state) => state.accounts;
export const { addUser, deleUser } = accountSlice.actions;
export default accountSlice.reducer;