import reducerCustomer from "./features/customers/customerSlice";
import reducerAccount from "./features/accounts/accountSlice";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    customer: reducerCustomer,
    account: reducerAccount,
  },
});

export default store;
