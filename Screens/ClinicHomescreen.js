import React, {useState} from 'react';
import {
  View,
  Input,
  Button,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import logo from './assets/img/PatientPassportLogo.png';
import AppTextInput from './components/AppTextInput';
import AppTextButton from './components/AppTextButton';
import Colors from './config/Colors';
import auth from '@react-native-firebase/auth';

const ClinicHomescreen = ({navigation}) => {
  return (
    //designing the UI
    <View style={styles.container}>
      <StatusBar
        position="bottom"
        style="light"
        backgroundColor={Colors.MidnightBlue}
      />

      {/* top container */}
      <View
        style={{
          backgroundColor: Colors.MidnightBlue,
          width: '100%',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
          <Image
            resizeMethod="auto"
            style={{marginBottom: 40, width: 166, height: 130}}
            source={logo}
          />
        </View>
      </View>

      {/* Bottom Contaienr */}
      <View
        style={{
          marginTop: -56,
          borderTopLeftRadius: 64,
          backgroundColor: Colors.lightGrey,
          width: '100%',
          flex: 1.8,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* Text feilds */}
        <View style={{marginTop: 120, width: '80%'}}></View>
        <View style={{marginTop: -60, width: '85%', alignItems: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 44,
              fontFamily: 'times new roman',
            }}>
            Welcome Clinic!
          </Text>
        </View>

        {/* SignUp button */}
        <View
          style={{
            marginTop: 60,
            marginBottom: 60,
            width: '80%',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <AppTextButton
            name="Scan QR Code"
            borderRadius={10.4}
            onSubmit={() => navigation.navigate('Camera')}
            backgroundColor={Colors.MidnightBlue}
            width="100%"
            height={45}
          />
        </View>
        <View
          style={{
            marginBottom: 60,
            width: '80%',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <AppTextButton
            name="Set Filters"
            borderRadius={10.4}
            onSubmit={() => navigation.navigate('Clinic Filters')}
            backgroundColor={Colors.MidnightBlue}
            width="100%"
            height={45}
          />
        </View>
        <View
          style={{
            marginBottom: 100,
            width: '80%',
            flex: 1,
            alignItems: 'flex-end',
          }}>
          <AppTextButton
            name="Log Out"
            borderRadius={10.4}
            onSubmit={() => {
              auth().signOut();
              navigation.navigate('Login');
            }}
            backgroundColor={Colors.MidnightBlue}
            width="100%"
            height={45}
          />
        </View>
      </View>
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
