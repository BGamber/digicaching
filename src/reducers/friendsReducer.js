import { FRIENDS_SET } from '../actions/friendActions';


let friendsReducer = (state = { searchedFriend: null }, action) => {
  switch(action.type){
    case FRIENDS_SET:
      return {
        ...state,
        searchedFriend: action.payload
      }
      break;
    default:
      return state
  }
}


friendsReducer.toString = () => FRIENDS_SET;
export default friendsReducer;
