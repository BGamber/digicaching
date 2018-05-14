import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";
import store from "./store";

ReactDOM.render(<App />, document.getElementById("root"));

window.addEventListener("unload", () => {
  localStorage.setItem("savedState", JSON.stringify(store.getState()));
});
