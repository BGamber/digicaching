import setActiveUserToken from "../actions/userActions";
import store from "../store";

let authFetch = async (url, fetchObject={}) => {
  let {activeUserToken:authToken} = store.getState();
  let authHeaders = {
    authorization: `Bearer ${authToken}`
  };
  let fetchHeader = {...fetchObject["headers"], ...authHeaders};

  let authedFetchObject = {...fetchObject, headers:fetchHeader};

  let response =  await fetch(url, authedFetchObject);
  if (response.status === 200) {
    return response;
  } else if (response.status === 401) {
    store.dispatch(setActiveUserToken());
  }
  return response;
};

export default authFetch;
