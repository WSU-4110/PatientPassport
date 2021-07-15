import React from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Alert, StatusBar, Image } from 'react-native';
import auth, { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import AppTextButton from './components/AppTextButton';
import Colors from './config/Colors';
import SideMenuToggle from '../Components/SideMenuToggle';

const Settings = ({ navigation }) => {
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
      <StatusBar backgroundColor={'#001F3D'} />
      <View style={styles.header1}>
        <Image
          style={styles.upperLogo}
          source={require('../AppDesignDocs/PatientPassport_Logo.png')}
        />
        <SideMenuToggle navigation={navigation} />
      </View>


      <View style={styles.header}>
        <Text style={styles.headerText}>Settings</Text>
      </View>
      {/* button */}
      <View style={{ marginTop: 40, width: '50%', flex: 1, alignItems: 'flex-end' }}>
        <AppTextButton
          name="Delete Account"
          borderRadius={10.4}
          onSubmit={() => handlePress()}
          backgroundColor={"#c92222"}
          width="100%"
          height={45}
        />
      </View>
    </View>
  );
};


// ----------------------
//    STYLESHEET
// ----------------------
const styles = StyleSheet.create({
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
    backgroundColor: 'white',
    height: '100%',
  },
  header1: {
    height: 56,
    width: "100%",
    backgroundColor: '#001F3D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 100,
  },
  headerText: {

    color: 'black',
    fontSize: 48,
    fontFamily: 'times new roman',
    paddingTop: 60,
  },
  upperLogo: {
    position: 'absolute',
    height: 50,
    width: 50,
    right: 20,
  },
});

export default Settings;
