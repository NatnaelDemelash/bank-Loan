import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalID: "",
  createdAt: "",
};

const reducerAccount = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
};

const reducerCustomer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return { ...state, fullName: action.payload };
    default:
      return state;
  }
};

const allReducers = combineReducers({
  customer: reducerCustomer,
  account: reducerAccount,
});

const store = createStore(allReducers);

// store.dispatch({ type: "account/deposit", payload: 5000 });
// store.dispatch({ type: "account/withdraw", payload: 1000 });

// store.dispatch({
//   type: "account/requestLoan",
//   payload: {
//     amount: 25000,
//     purpose: "Buy a car",
//   },
// });

const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};

const payLoan = () => {
  return { type: "account/payLoan" };
};

const createCustomer = (fullName, nationalID) => {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalID,
      createdAt: new Date().toISOString(),
    },
  };
};

const updateName = (fullName) => {
  return { type: "customer/updateName", payload: fullName };
};

// store.dispatch(deposit(5000));
// store.dispatch(withdraw(1000));

store.dispatch(createCustomer("Natnael", "348246"));
store.dispatch(requestLoan(35_000, "Buy a car"));

console.log(store.getState());
