import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import ProfileScreen from "./ProfileScreen";
import Footer from "./Footer";
import store from "../store";
import "../styles.css";
import Map from "./Map";
import moment from "moment";


let now = moment().toISOString();
let yesterday = moment();
yesterday = yesterday.subtract(1,"days").toISOString();
let App = () =>
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/profile" component={ProfileScreen} />
        <Footer />
        <Map caches={[{longitude:-84.37277,latitude:33.847279,createdOn:now, name:"Farm Burger", id:"31648bf2-537c-11e8-9809-a81e84057a84"},
          {latitude:33.848460,longitude:-84.37360, name:"ATV",createdOn:yesterday, id:"4ffd4fa6-537f-11e8-bfe7-a81e84057a84" }]}/>
      </div>
    </Router>
  </Provider>;

export default App;
