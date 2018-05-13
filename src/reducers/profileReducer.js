
const PROFILE ="PROFILE_";

let profile =  {}

let profileReducer = (state=profile, action) => {
  let type = action.type.replace(PROFILE, '');
  switch (type) {
  case "LOADING":
    return {
      ...state, loading: true
    };
  case "GET":
    return {
      ...state,
      users: action.payload,
      loading: false
    };
  case "SET":
    return action.payload
  default:
  return state;
  }
  
};


export default profileReducer;

profileReducer.toString = () => PROFILE;
