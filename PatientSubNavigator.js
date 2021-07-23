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
import GenQRCode from './Screens/GenQRCode.js';
import ClinicFilters from './Screens/clinicFilters.js';

const Drawer = createDrawerNavigator();

const PatientSubNavigator = () => {
  return (
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
      <Drawer.Screen name="Homescreen" component={Homescreen} />
      <Drawer.Screen name="Generate QR Code" component={GenQRCode} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default PatientSubNavigator;
