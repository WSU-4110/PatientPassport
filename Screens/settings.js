import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Alert} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Settings = ({navigation}) => {
  const handlePress = () => {
    Alert.alert(
      'Are you sure?',
      'Deleting an account cannot be undone. All data will be lost.',
      [
        {
          text: 'Cancel',
          onPress: () => {
            return;
          },
        },
        {
          text: 'Confirm',
          onPress: () => {
            userID = auth().currentUser.email;

            firestore().collection('users').doc(userID).delete();

            auth()
              .currentUser.delete()
              .then(() => {
                navigation.navigate('Login');
              })
              .catch(error => {
                Alert.alert('Error.');
              });
          },
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      <TouchableOpacity style={styles.deleteButton} onPress={handlePress}>
        <Text>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
};

styles = StyleSheet.create({
  deleteButton: {
    marginTop: 200,
    backgroundColor: 'red',
    color: 'black',
    height: 60,
    width: 120,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#055772',
    height: '100%',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  headerText: {
    color: 'white',
    fontSize: 48,
    fontFamily: 'times new roman',
    paddingTop: 60,
  },
});

export default Settings;
