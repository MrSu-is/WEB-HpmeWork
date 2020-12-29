import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import product from "../Link/request/things";

const rootReducer = combineReducers({
  product
});

export default createStore(rootReducer, compose(applyMiddleware(...[thunk]))); 