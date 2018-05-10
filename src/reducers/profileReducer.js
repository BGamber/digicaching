
const PROFILE ="PROFILE_";

let profileReducer = (state, action) => {
  let type = action.type.replace(PROFILE);
  switch (type) {
  case "LOADING":
    return {
      ...state, loading: true
    };
  case "GET":
    return {
      ...state,
      profile: action.payload,
      loading: false
    };
  default: return state;
  }
};


export default profileReducer;

profileReducer.toString = () => PROFILE;
