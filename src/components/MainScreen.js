import React from "react";
import {Route, Switch} from "react-router-dom";
import Footer from "./Footer";
import ProfileScreen from "./ProfileScreen";
import ProfilePage from './profilePage';
import MyMapComponent from "./Map";
import Collections from "./CollectionScreen";
import FriendsLookup from "./friends-lookup";
import SearchPage from "./SearchPage";
// import MagicLoader from "./loaders/MagicLoader";

let MainScreen = () => {
  return(
    <div className='route-container'>
      <div className="content-container">
        {/* <LoginRedirect/> */}
        <Switch>
          <Route path='/profile' exact component={ProfilePage}/>
          <Route path='/collections' component={Collections} />
          <Route path='/friends-lookup' component={FriendsLookup} />
          <Route path='/search' component={SearchPage} />
          <Route path='/(map)?' exact component={MyMapComponent} />
          <Route path='/tester' exact component={ProfileScreen} />
        </Switch>
      </div>
      <Footer />
    </div>
  )
}

export default MainScreen;
