/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './Screens/Login-Screen.js';
import RegistrationScreen from './Screens/Registration-Screen.js';
import InitialInfoScreen from './Screens/InitalInfo-Screen.js';
import Forgot from './Screens/Forgot.js';
import Homescreen from './Screens/Homescreen.js';
import Settings from './Screens/settings';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

//--------------------
//   MAIN FUNCTION
//--------------------
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerStyle={{
          backgroundColor: '#09A9C8',
        }}
        drawerContentOptions={{
          labelStyle: {
            color: 'white',
            fontSize: 20,
          },
        }}>
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Homescreen" component={Homescreen} />
        <Drawer.Screen name="Registration" component={RegistrationScreen} />
        <Drawer.Screen name="Initial Info" component={InitialInfoScreen} />
        <Drawer.Screen name="Forgot" component={Forgot} />
        <Drawer.Screen name="Settings" component={Settings} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
