import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import MainScreen from './MainScreen';
import LoginPage from './main-login';
import CreateAccount from './CreateAccount';

import Footer from './Footer';
import store from '../store';

let App = () => { return <Provider store={store}>
  <div className="App">
      <Router>
        <div>
          <Route exact path="/login-page" component={LoginPage} />
          <Route path="/create-account" exact component={CreateAccount} />  
          <Route path="/main" component={MainScreen} />
        </div>
      </Router>
    </div>
  </Provider>
};

export default App;
