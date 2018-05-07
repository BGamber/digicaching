import { createStore, combineReducers } from 'redux';
import mainReducer from './reducers/reducers';
const store = createStore(mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;