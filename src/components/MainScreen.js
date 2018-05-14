import React from "react";
import {Route, Switch} from "react-router-dom";
import Footer from "./Footer";
// import ProfileScreen from "./ProfileScreen";
import ProfilePage from './profilePage';
import MyMapComponent from "./Map";
import Collections from "./CollectionScreen";
import FriendsLookup from "./friends-lookup";
import SearchPage from "./SearchPage";
import LoginRedirect from "./LoginRedirect";
import ItemPage from './ItemPage';

let MainScreen = () => {
  return(
    <div className='route-container'>
      <div className="content-container">
        <LoginRedirect/>
        <Switch>
          <Route path='/profile' component={ProfilePage}/>
          <Route path='/collections' component={Collections} />
          <Route path='/friends-lookup' component={FriendsLookup} />
          <Route path='/search' component={SearchPage} />
          <Route exact path='/item' component={ItemPage} />
          <Route path='/(map)?' component={MyMapComponent} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default MainScreen;
