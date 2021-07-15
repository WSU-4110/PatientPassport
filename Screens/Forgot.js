import React, { useState } from 'react';
import {
  View,
  Input,
  Button,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import logo from './assets/img/PatientPassportLogo.png';
import AppTextInput from './components/AppTextInput';
import AppTextButton from './components/AppTextButton';
import Colors from './config/Colors';

//setting variables for screen dimensions
let { height, width } = Dimensions.get('screen');

const ForgotPassword = () => {

  //setting default values to variables

  const [email, setEmail] = useState('');
  const [indicator, setIndicator] = useState(false);

  //function to trigger firebase to send email reset
  const reset = async () => {
    setIndicator(true);
    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Email Sent')
      setIndicator(false);
    } catch (e) {
      setIndicator(false);
      Alert.alert(
        e.message
      );
    }
  };
  return (
    //designing the UI
    <View style={styles.container}>
      <StatusBar position="bottom" style="light" backgroundColor={Colors.MidnightBlue} />

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
            style={{ marginBottom: 40, width: 166, height: 130 }}
            source={logo}
          />
        </View>
      </View>
      {indicator
        ? <View
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
          <ActivityIndicator color={Colors.MidnightBlue} size={48} />
        </View>
        : <>
          {/* Bottom Contaienr */}
          <View style={{ marginTop: -56, borderTopLeftRadius: 64, backgroundColor: Colors.lightGrey, width: "100%", flex: 1.8, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
            {/* Text feilds */}
            <View style={{ marginTop: 120, width: '80%', }}>
              <AppTextInput
                placeHolder={"Enter Email Here"}
                width="100%"
                value={email}
                onChange={text => setEmail(text)}
              />
            </View>

            {/* SignUp button */}
            <View style={{ marginTop: 60, width: '80%', flex: 1, alignItems: 'flex-end' }} >
              <AppTextButton
                name="Send Email"
                borderRadius={10.4}
                onSubmit={() => reset()}
                backgroundColor={Colors.MidnightBlue}
                width="100%"
                height={45}
              />
            </View>
          </View>
        </>
      }
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
})

export default ForgotPassword
