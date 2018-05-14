import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import mainReducer from "./reducers/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const savedState = localStorage.getItem("savedState");

const hydratedState = JSON.parse(savedState || "{}");

const store = createStore(mainReducer, hydratedState, composeEnhancers(
  applyMiddleware(ReduxThunk)
));

export default store;
