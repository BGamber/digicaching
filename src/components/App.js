import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProfileScreen from "./ProfileScreen";
import Footer from "./Footer";
import store from "../store";
import "../styles.css";
import Map from "./Map";

let App = () =>
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/profile" component={ProfileScreen} />
        <Footer />
        <Map caches={[{longitude:-84.37277,latitude:33.847279, name:"Farm Burger"},
          {latitude:33.848460,longitude:-84.37360, name:"ATV"}]}/>
      </div>
    </Router>
  </Provider>;

export default App;
