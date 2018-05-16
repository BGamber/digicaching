import React from 'react';

 let Spinner = () => {
  return (
    <div>
    <h3>...Loading...</h3>
    <div style={{ background:'url("https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif") no-repeat', backgroundSize:'contain', width:'70px', height:'70px' }}></div>
    {/* <img
      className="loading-photo"
      src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
      alt="...loading..."
    /> */}
  </div>
  )
}
export default Spinner;