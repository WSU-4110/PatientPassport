import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Alert,
  StatusBar,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import SideMenuToggle from '../Components/SideMenuToggle';
import Colors from './config/Colors';

const Camera = ({navigation}) => {
  const [filters, setFilters] = useState([]);

  const barcodeRecognized = async e => {
    // ----------------------------
    // BACKEND - Parses JSON string,
    //  stores data in clinic side
    //  of DB
    // ----------------------------
    try {
      values = JSON.parse(e.data);

      console.log(filters);
      let toBeStored = {};
      filters.forEach(filter => {
        if (values[filter]) {
          toBeStored[filter] = values[filter];
        }
      });

      console.log(toBeStored);

      firestore()
        .collection('clinics')
        .doc(auth().currentUser.email)
        .collection('users')
        .doc(values.email)
        .set(values)
        .then(() => {
          Alert.alert('User info entered.', '', [
            {text: 'OK', onPress: () => scanner.reactivate()},
          ]);
        })
        .catch(e => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
      Alert.alert('Code not recognized', 'Please try again.', [
        {
          text: 'OK',
          onPress: () => {
            scanner.reactivate();
          },
        },
      ]);
    }
  };

  useEffect(() => {
    firestore()
      .collection('clinics')
      .doc(auth().currentUser.email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists)
          setFilters(documentSnapshot.data().filters);
      });
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'#001F3D'} />
      <View style={styles.header}>
        <Image
          style={styles.upperLogo}
          source={require('../AppDesignDocs/PatientPassport_Logo.png')}
        />
        <SideMenuToggle navigation={navigation} />
        <Text style={styles.headerText}>Patient Passport</Text>
      </View>

      <QRCodeScanner
        onRead={barcodeRecognized}
        checkAndroid6Permissions={true}
        ref={elem => {
          scanner = elem;
        }}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Clinic Homescreen');
        }}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Camera;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  header: {
    width: '100%',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#001F3D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'times new roman',
  },
  upperLogo: {
    position: 'absolute',
    height: 50,
    width: 50,
    right: 20,
  },
  button: {
    backgroundColor: Colors.MidnightBlue,
    height: 50,
    width: '60%',
    borderTopStartRadius: 10.4,
    borderBottomEndRadius: 10.4,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: 'times new roman',
    fontSize: 20,
  },
});
