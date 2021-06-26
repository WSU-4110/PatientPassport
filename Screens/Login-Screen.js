import React, {useState} from 'react';
import {
  StatusBar,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Alert,
} from 'react-native';

import AppTextInput from './components/AppTextInput';
import AppTextButton from './components/AppTextButton';

import colors from './config/Colors';
import logo from './assets/img/PatientPassportLogo.png';

import auth from '@react-native-firebase/auth';

function LoginScreen({navigation}) {
  const [indicator, setIndicator] = useState(false);
  const [feilds, setFeilds] = useState([
    {
      id: 0,
      placeHolder: 'Email',
      value: '',
      secure: false,
    },
    {
      id: 1,
      placeHolder: 'Password',
      value: '',
      secure: true,
    },
  ]);

  // !-----------------------------
  // !      BACKEND FUNCTION
  // !-----------------------------
  const validateUser = (email, pass) => {
    //Authenticates user from database
    auth()
      .signInWithEmailAndPassword(email, pass)
      .then(() => {
        navigation.navigate('Homescreen');
      })
      .catch(error => {
        if (
          error.code === 'auth/invalid-email' ||
          error.code === 'auth/wrong-password'
        )
          Alert.alert('Invalid credentials.');
        if (error.code === 'auth/user-not-found') Alert.alert('User not found');
        if (error.code === 'auth/user-disabled')
          Alert.alert('Account disabled');
      });
  };

  const handleChange = (text, id) => {
    const tempFeilds = [...feilds];
    tempFeilds[id].value = text;
    setFeilds(tempFeilds);
  };

  const handleSubmit = async () => {
    let email = feilds[0].value;
    let password = feilds[1].value;
    validateUser(email, password);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={colors.MidnightBlue} />

      {/* Top container */}
      <View
        style={{
          backgroundColor: colors.MidnightBlue,
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

      {indicator ? (
        <View
          style={{
            marginTop: -56,
            borderTopLeftRadius: 64,
            backgroundColor: colors.lightGrey,
            width: '100%',
            flex: 1.8,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator color={colors.MidnightBlue} size={48} />
        </View>
      ) : (
        <>
          {/* Bottom Contaienr */}
          <View
            style={{
              marginTop: -56,
              borderTopLeftRadius: 64,
              backgroundColor: colors.lightGrey,
              width: '100%',
              flex: 1.8,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View style={{marginTop: 52, width: '85%', alignItems: 'center'}}>
              <Text
                style={{
                  color: colors.MidnightBlue,
                  fontSize: Platform.OS === 'ios' ? 28 : 44,
                }}>
                Login
              </Text>
            </View>

            {/* Text feilds */}
            {feilds.map((item, i) => (
              <View key={i} style={{marginTop: i == 0 ? 80 : 32, width: '85%'}}>
                <AppTextInput
                  placeHolder={item.placeHolder}
                  width="100%"
                  value={item.value}
                  onChange={text => handleChange(text, item.id)}
                  secure={item.secure}
                />
              </View>
            ))}

            {/* Login button */}
            <View style={styles.loginButton}>
              <AppTextButton
                name="LOGIN"
                borderRadius={10.4}
                onSubmit={() => handleSubmit()}
                backgroundColor={colors.MidnightBlue}
                width="100%"
                height={44}
              />
            </View>
          </View>

          {/* Login text */}
          <View style={{width: '100%', backgroundColor: colors.lightGrey}}>
            <View
              style={{
                marginBottom: 40,
                marginLeft: '7.5%',
                width: '85%',
                flexDirection: 'row',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'grey', fontSize: 14}}>
                Dont't have an account?{' '}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Registration')}>
                <Text
                  style={{
                    color: colors.BabyBlue,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  loginButton: {marginTop: 40, width: '85%', flex: 1, alignItems: 'flex-end'},
});

export default LoginScreen;
