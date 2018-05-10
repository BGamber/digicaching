import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import mainReducer from "./reducers/reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(mainReducer,  composeEnhancers(
  applyMiddleware(ReduxThunk)
));

export default store;
