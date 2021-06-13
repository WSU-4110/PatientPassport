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
} from 'react-native';
let {height, width} = Dimensions.get('screen');

let loginCredentials = [];

const handleSuccessfulRegistration = (name, email, pass) => {
  //Use this function to push new data to registration database
  loginCredentials.push({Name: name, Email: email, Pass: pass});
  Alert.alert(loginCredentials[0].Name);
};

const RegistrationScreen = ({navigation}) => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');
  let [cpass, setCpass] = useState('');

  const onSingup = () => {
    if (name && email && pass && cpass && pass === cpass) {
      handleSuccessfulRegistration(name, email, pass);
      navigation.navigate('Initial Info');
    } else if (pass != cpass)
      Alert.alert('Error', 'Passwords do not match', [{text: 'OK'}]);
    else Alert.alert('Error', 'All fields are required.', [{text: 'OK'}]);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: '#001F3D'}}>
      <View
        style={{
          paddingVertical: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../AppDesignDocs/PatientPassport_Logo.png')}
          style={{height: height * 0.18, width: width * 0.5}}
        />
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: width,
        }}>
        <View
          style={{
            width: '80%',
            borderBottomWidth: 2,
            borderBottomColor: '#067593',
            paddingVertical: 10,
            color: '#fff',
          }}>
          <Text style={styles.heading}>Register</Text>
        </View>
        <View
          style={{
            ...styles.inputContainer,
            marginTop: 40,
          }}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={val => setName(val)}
            placeholder="Name"
            placeholderTextColor="#fff"
          />
        </View>
        <View
          style={{
            ...styles.inputContainer,
            marginTop: 20,
          }}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={val => setEmail(val)}
            placeholder="Email"
            placeholderTextColor="#fff"
            keyboardType="email-address"
          />
        </View>
        <View
          style={{
            ...styles.inputContainer,
            marginTop: 20,
          }}>
          <TextInput
            style={styles.input}
            value={pass}
            onChangeText={val => setPass(val)}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            ...styles.inputContainer,
            marginTop: 20,
          }}>
          <TextInput
            style={styles.input}
            value={cpass}
            onChangeText={val => setCpass(val)}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            marginTop: 40,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={onSingup} style={styles.button}>
            <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegistrationScreen;

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  inputContainer: {
    width: '80%',
    borderBottomWidth: 2,
    borderBottomColor: '#067593',
  },
  input: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#067593',
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
