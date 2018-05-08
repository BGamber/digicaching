import { combineReducers } from 'redux';
import { GET_PROFILE, PROFILE_LOADING } from '../actions/action-types';

const initialState = {
  profile: null,
  loading: false
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_LOADING: 
      return {
        ...state, loading: true
      };
    case GET_PROFILE:
    return {
      ...state, 
      profile: action.payload,
      loading: false
    }
    default: return state;
  }
}

const allReducers = {
  profile: profileReducer
}

let mainReducer = combineReducers(allReducers);

export default mainReducer;