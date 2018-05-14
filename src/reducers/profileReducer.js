
const PROFILE ="PROFILE_";

let profile =  {
  "email": "joe@shmoe.net",
  "name": "joeshmoe",
  "image_url": null,
  "password": "$2b$10$zXEQLTI6Wd3S6YuJtl.mbuF9BuZM3VQypp/pLhoEQNxejoxzC4Xqa"
}

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
      profile: action.payload,
      loading: false
    };
  case "SET":
    return action.payload;

  default:
    return state;
  }
};


export default profileReducer;

profileReducer.toString = () => PROFILE;
