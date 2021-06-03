/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Node} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import LoginScreen from './Screens/Login-Screen.js';
import RegistrationScreen from './Screens/Registration-Screen.js';
import InitialInfoScreen from './Screens/InitalInfo-Screen.js';
import Homescreen from './Screens/Homescreen.js';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Homescreen" component={Homescreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="InitialInfo" component={InitialInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
