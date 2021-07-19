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
import QRCodeScanner from 'react-native-qrcode-scanner';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AppTextButton from './components/AppTextButton.js';

const Camera = ({navigation}) => {
  const barcodeRecognized = async e => {
    await Alert.alert(e.data);
  };
  return (
    <QRCodeScanner
      onRead={barcodeRecognized}
      checkAndroid6Permissions={true}
      ref={elem => {
        this.scanner = elem;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
});

export default Camera;
