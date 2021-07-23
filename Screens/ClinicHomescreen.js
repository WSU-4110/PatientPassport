import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import SideMenuToggle from '../Components/SideMenuToggle';
import Colors from './config/Colors';
import auth from '@react-native-firebase/auth';

const ClinicHomescreen = ({navigation}) => {
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

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text style={styles.buttonText}>Scan Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Clinic Filters');
        }}>
        <Text style={styles.buttonText}>Set Data Filters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          auth().signOut();
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicHomescreen;

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
    width: '60%',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 40,
    borderBottomEndRadius: 10.4,
    borderTopStartRadius: 10.4,
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'times new roman',
  },
});
