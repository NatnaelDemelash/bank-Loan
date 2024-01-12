import { applyMiddleware, combineReducers, createStore } from "redux";

import reducerCustomer from "./features/customers/customerSlice";
import reducerAccount from "./features/accounts/accountSlice";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  customer: reducerCustomer,
  account: reducerAccount,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
