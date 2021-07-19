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

const ClinicHomescreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text>Scan Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicHomescreen;
