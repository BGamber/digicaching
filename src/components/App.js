import React from "react";
import { BrowserRouter as Router, Route , Switch} from "react-router-dom";
import { Provider } from "react-redux";

import MainScreen from "./MainScreen";
import LoginPage from "./main-login";
import CreateAccount from "./CreateAccount";
import store from "../store";

let App = () =>
  <Provider store={store}>
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route path="/create-account" exact component={CreateAccount} />
            <Route path="/" component={MainScreen} />
          </Switch>
        </div>
      </Router>
    </div>
  </Provider>;

export default App;
