import React from 'react';
import { Image, View } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import Welcome from '../Welcome';
import Login from '../Login';
import DrawerLayout from '../DrawerLayout';
import Diabetes from '../Diabetes';
import Stroke from '../Stroke';
import EyeTumors from '../EyeTumors';
import Sickle from '../Sickle';
import SignUp from '../SignUp';

  
const Screens = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="welcome" component={Welcome} initial hideNavBar />
        <Scene key="login" component={Login} hideNavBar />
        <Scene key="drawerlayout" component={DrawerLayout} hideNavBar />
        <Scene key="diabetes" component={Diabetes} hideNavBar />
        <Scene key="stroke" component={Stroke} hideNavBar />
        <Scene key="eyetumors" component={EyeTumors} hideNavBar />
        <Scene key="sickle" component={Sickle} hideNavBar />
        <Scene key="signup" component={SignUp} hideNavBar />
      </Scene>
    </Router>
  );
};

export default Screens;
