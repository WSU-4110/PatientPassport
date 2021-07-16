import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import auth, {firebase} from '@react-native-firebase/auth';
import Colors from './config/Colors';
import AppTextButton from './components/AppTextButton';

import logo from './assets/img/PatientPassportLogo.png';
import AppTextInput from './components/AppTextInput';

let {height, width} = Dimensions.get('screen');

const RegistrationScreen = ({navigation}) => {
  const [indicator, setIndicator] = useState(false);
  const [feilds, setFeilds] = useState([
    {
      id: 0,
      placeHolder: 'Name',
      value: '',
    },
    {
      id: 1,
      placeHolder: 'Email',
      value: '',
    },
    {
      id: 2,
      placeHolder: 'Password',
      value: '',
      secure: true,
    },
    {
      id: 3,
      placeHolder: 'Confirm Password',
      value: '',
      secure: true,
    },
  ]);

  // !-----------------------------
  // !      BACKEND FUNCTION
  // !-----------------------------
  const handleSuccessfulRegistration = (email, pass) => {
    //Pushed registration information to the database
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        auth().currentUser.sendEmailVerification();
        Alert.alert('Email verification sent!');
        navigation.navigate('Login');
        setIndicator(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use')
          Alert.alert('Email already in use');
        if (error.code === 'auth/invalid-email') Alert.alert('Invalid email');

        setIndicator(false);
      });
  };

  const onSingup = () => {
    setIndicator(true);

    let name = feilds[0].value;
    let email = feilds[1].value;
    let pass = feilds[2].value;
    let cpass = feilds[3].value;
    console.log('email......: ', name, email, pass, cpass);
    if (name && email && pass && cpass && pass === cpass) {
      handleSuccessfulRegistration(email, pass);
    } else if (pass != cpass)
      Alert.alert('Error', 'Passwords do not match', [{text: 'OK'}]);
    else Alert.alert('Error', 'All fields are required.', [{text: 'OK'}]);

    setIndicator(false);
  };

  const handleChange = (text, id) => {
    const tempFeilds = [...feilds];
    tempFeilds[id].value = text;
    setFeilds(tempFeilds);
  };

  return (
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
            style={{marginBottom: 60, width: 166, height: 130}}
            source={logo}
          />
        </View>
      </View>

      {indicator ? (
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
          <ActivityIndicator color={Colors.MidnightBlue} size={48} />
        </View>
      ) : (
        <>
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
            <ScrollView style={{width: '85%'}}>
              {/* Text feilds */}
              {feilds.map((item, i) => (
                <View
                  key={i}
                  style={{marginTop: i == 0 ? 80 : 32, width: '100%'}}>
                  <AppTextInput
                    placeHolder={item.placeHolder}
                    width="100%"
                    value={item.value}
                    onChange={text => handleChange(text, item.id)}
                    secure={item.secure}
                  />
                </View>
              ))}

              {/* SignUp button */}
              <View
                style={{
                  marginTop: 40,
                  width: '100%',
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <AppTextButton
                  name="Sign Up"
                  borderRadius={10.4}
                  onSubmit={() => onSingup()}
                  backgroundColor={Colors.MidnightBlue}
                  width="100%"
                  height={45}
                />
              </View>

              {/* Login text */}
              <View
                style={{
                  marginTop: 20,
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'grey', fontSize: 14}}>
                  Already have an account?{' '}
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                  <Text
                    style={{
                      color: Colors.BabyBlue,
                      fontWeight: 'bold',
                      fontSize: 14,
                    }}>
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default RegistrationScreen;
