import React from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';

import Footer from './Footer';
import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';
import Collections from './CollectionScreen';

let MainScreen = () => {   
    return(
        <div className='route-container'>
            <div className="content-container">
            <Switch>
                <Route exact path='/main/profile' component={ProfileScreen}/>
                <Route exact path='/main/map' component={MapScreen} />
                <Route exact path='/main/collections' component={Collections} />
                
                {/* <Route exact path='/main/something/:somthing render={ (props) => {
                    let profileUserId = props.match.params.userid
                    return <ProfilePage profileUserId={profileUserId}/>
                }} /> */}

            </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default MainScreen;
