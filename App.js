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
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './Screens/config/Colors.js';
import Settings from './Screens/settings.js';
import ClinicHomescreen from './Screens/ClinicHomescreen.js';
import Camera from './Screens/Camera.js';
import GenQRCode from './Screens/GenQRCode.js';
import ClinicFilters from './Screens/clinicFilters.js';
import ForgotPassword from './Screens/Forgot.js';
import PatientSubNavigator from './PatientSubNavigator.js';
import ClinicSubNavigator from './ClinicSubNavigator.js';

const Stack = createStackNavigator();

//--------------------
//   MAIN FUNCTION
//--------------------
const App = () => {
  // return (
  //   <NavigationContainer>
  //     <Drawer.Navigator
  //       screenOptions={{headerShown: false}}
  //       drawerStyle={{
  //         backgroundColor: 'white',
  //       }}
  //       drawerContentOptions={{
  //         contentContainerStyle: {
  //           marginTop: 50,
  //         },
  //         activeBackgroundColor: Colors.MidnightBlue,
  //         activeTintColor: Colors.white,
  //         labelStyle: {
  //           fontSize: 20,
  //         },
  //       }}>
  //       <Drawer.Screen
  //         name="Login"
  //         component={LoginScreen}
  //         options={() => {
  //           return {swipeEnabled: false};
  //         }}
  //       />
  //       <Drawer.Screen
  //         name="Registration"
  //         component={RegistrationScreen}
  //         options={() => {
  //           return {swipeEnabled: false};
  //         }}
  //       />
  //       <Drawer.Screen name="Homescreen" component={Homescreen} />
  //       <Drawer.Screen name="Initial Info" component={InitialInfoScreen} />
  //       <Drawer.Screen
  //         name="Forgot"
  //         component={Forgot}
  //         options={() => {
  //           return {swipeEnabled: false};
  //         }}
  //       />
  //       <Drawer.Screen name="Settings" component={Settings} />
  //       <Drawer.Screen name="Clinic Homescreen" component={ClinicHomescreen} />
  //       <Drawer.Screen name="Camera" component={Camera} />
  //       <Drawer.Screen name="Generate QR Code" component={GenQRCode} />
  //       <Drawer.Screen name="Clinic Filters" component={ClinicFilters} />
  //     </Drawer.Navigator>
  //   </NavigationContainer>
  // );

  return (
    <NavigationContainer>
      <Stack.Navigator
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
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Initial Info" component={InitialInfoScreen} />
        <Stack.Screen
          name="Patient Sub Navigator"
          component={PatientSubNavigator}
        />
        <Stack.Screen
          name="Clinic Sub Navigator"
          component={ClinicSubNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
