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
import {createDrawerNavigator} from '@react-navigation/drawer';
import Colors from './Screens/config/Colors.js';
import Settings from './Screens/settings.js';
import ClinicHomescreen from './Screens/ClinicHomescreen.js';
import Camera from './Screens/Camera.js';

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
          backgroundColor: 'white',
        }}
        drawerContentOptions={{
          contentContainerStyle: {
            marginTop: 50,
          },
          activeBackgroundColor: Colors.MidnightBlue,
          activeTintColor: Colors.white,
          labelStyle: {
            fontSize: 20,
          },
        }}>
        <Drawer.Screen
          name="Login"
          component={LoginScreen}
          options={() => {
            return {swipeEnabled: false};
          }}
        />
        <Drawer.Screen
          name="Registration"
          component={RegistrationScreen}
          options={() => {
            return {swipeEnabled: false};
          }}
        />
        <Drawer.Screen name="Homescreen" component={Homescreen} />
        <Drawer.Screen name="Initial Info" component={InitialInfoScreen} />
        <Drawer.Screen
          name="Forgot"
          component={Forgot}
          options={() => {
            return {swipeEnabled: false};
          }}
        />
        <Drawer.Screen name="Settings" component={Settings} />
        <Drawer.Screen name="Clinic Homescreen" component={ClinicHomescreen} />
        <Drawer.Screen name="Camera" component={Camera} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
