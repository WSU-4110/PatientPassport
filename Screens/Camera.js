import React, {useEffect, useState} from 'react';
import {StyleSheet, Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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
    <QRCodeScanner
      onRead={barcodeRecognized}
      checkAndroid6Permissions={true}
      ref={elem => {
        scanner = elem;
      }}
    />
  );
};

export default Camera;
