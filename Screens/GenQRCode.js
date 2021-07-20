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
import QRCode from 'react-native-qrcode-svg';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Colors from './config/Colors.js';

const GenQRCode = ({navigation}) => {
  const [values, setValues] = useState({});
  const userID = auth().currentUser.email;

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        setValues(documentSnapshot.data());
      });
  }, []);
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.BlueGrotto,
        height: '100%',
      }}>
      <SideMenuToggle navigation={navigation} />
      <Text
        style={{
          fontFamily: 'times new roman',
          fontSize: 30,
          marginBottom: 20,
          color: 'white',
        }}>
        QR Code
      </Text>
      <QRCode value={JSON.stringify(values)} size={300} />
      <TouchableOpacity
        style={{
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: Colors.MidnightBlue,
          width: '80%',
          height: 45,
          borderBottomEndRadius: 10.4,
          borderTopStartRadius: 10.4,
          justifyContent: 'center',
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text
          style={{color: 'white', fontSize: 20, fontFamily: 'times new roman'}}>
          Back
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GenQRCode;
