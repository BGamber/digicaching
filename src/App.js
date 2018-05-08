import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProfileScreen from './components/ProfileScreen';
import Footer from './components/Footer';
import store from './store';
import './index.css';

let App = () =>
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/profile" component={ProfileScreen} />
        <Footer />
      </div>
    </Router>
  </Provider>;

export default App;
