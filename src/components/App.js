import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProfileScreen from './ProfileScreen';
import CreateProfileScreen from './CreateProfileScreen';
import Footer from './Footer';
import store from '../store';
import '../index.css';

let App = () =>
  <Provider store={store}>
    <Router>
      <div className="App">
        <Route exact path="/profile" component={ProfileScreen} />
        <Route exact path="/create-profile" component={CreateProfileScreen} />   
        <Footer />
      </div>
    </Router>
  </Provider>;

export default App;
