import { GET_ERRORS, SET_CURRENT_USER } from './types';
import { SET_CURRENT_USER } from './action-types';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};