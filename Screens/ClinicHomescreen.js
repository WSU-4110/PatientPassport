import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AppTextButton from './components/AppTextButton.js';

const ClinicHomescreen = () => {
  return (
    <View>
      <Text>Clinic Home</Text>
    </View>
  );
};

export default ClinicHomescreen;
