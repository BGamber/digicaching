
const PROFILE ="PROFILE_";

let profile =  {}

let profileReducer = (state=profile, action) => {
  console.error('reducer4');
  let type = action.type.replace(PROFILE, "");
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

  default:
    return state;
  }

};


profileReducer.toString = () => PROFILE;
export default profileReducer;