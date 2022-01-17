import { combineReducers, createStore, applyMiddleware } from "redux";
import contractReducer from "./reducers/contract";
import alertReducer from "./reducers/alert";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const reducer = combineReducers({
  contract: contractReducer,
  alert: alertReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
