
const PROFILE ="PROFILE_";

let profile =  {}

let profileReducer = (state=profile, action) => {
  let type = action.type.replace(PROFILE, "");
  switch (type) {
  case "LOADING":
    return {
      ...state, loading: true
    };
  case "GET":
    return {


      ...state,
      currentUser: action.payload,
      loading: false
    };

  default:
    return state;
  }

};


profileReducer.toString = () => PROFILE;
export default profileReducer;
