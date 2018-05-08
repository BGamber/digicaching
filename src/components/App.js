import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import ProfileScreen from './ProfileScreen';
import Footer from './Footer';
import store from '../store';
<<<<<<< HEAD
=======
import '../styles.css';
>>>>>>> b8a4c8ff8df3c351b012a855122723a26868817f

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
