

export let claimCache = (id, currentLat, currentLng, activeUserToken) => {
  let headers = {
    authorization: `Bearer ${activeUserToken}`,
    "Content-Type": "application/json"
  };

  let requestBody = JSON.stringify(
    {latitude:currentLat,
      longitude:currentLng});
  let requestObject = {
    headers,
    method:"PUT",
    body:requestBody
  };

  fetch(`${process.env.REACT_APP_BACKEND}/api/caches/${id}/claim`,requestObject);
};
