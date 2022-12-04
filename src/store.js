import { configureStore } from "@reduxjs/toolkit";

import AccountsReducer from "./reducers/Account";

const store = configureStore({
  reducer: {
    accounts: AccountsReducer,
  },
});

export default store;