import { combineReducers } from "redux";
import { PROFILE_GET, PROFILE_LOADING } from "../actions/action-types";
import userReducer from "./userReducer";

const initialState = {
  profile: null,
  loading: false
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case PROFILE_LOADING:
    return {
      ...state, loading: true
    };
  case PROFILE_GET:
    return {
      ...state,
      profile: action.payload,
      loading: false
    };
  default: return state;
  }
};

const allReducers = {
  [profileReducer]: profileReducer,
  [userReducer]:userReducer
};

let mainReducer = combineReducers(allReducers);

export default mainReducer;
