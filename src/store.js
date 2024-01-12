import { combineReducers, createStore } from "redux";

import reducerCustomer from "./features/customers/customerSlice";
import reducerAccount from "./features/accounts/accountSlice";

const rootReducer = combineReducers({
  customer: reducerCustomer,
  account: reducerAccount,
});

const store = createStore(rootReducer);

export default store;
