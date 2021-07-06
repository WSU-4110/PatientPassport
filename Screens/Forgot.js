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
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import logo from './assets/img/PatientPassportLogo.png';

//setting variables for screen dimensions
let {height, width} = Dimensions.get('screen');

const ForgotPassword = () => {

const [email, setEmail] = useState('');
const [showLoading, setShowLoading] = useState(false);

//function to trigger firebase to send email reset
const reset = async() => {
    setShowLoading(true);
    try {
        await auth().sendPasswordResetEmail(email);
        Alert.alert('Email Sent')
        setShowLoading(false);
    } catch (e) {
        setShowLoading(false);
        Alert.alert(
            e.message
        );
    }
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
          resizeMethod="auto"
          style={{marginBottom: 40, width: 166, height: 130}}
          source={logo}
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
           paddingVertical: 20,
           color: '#fff',
       }}>
     <Text style={styles.heading}>Password Reset</Text>
     </View>

     <View
       style={{
            ...styles.inputContainer,
            marginTop: 80,
       }}>
    <TextInput
       style={styles.input}
       value={email}
       onChangeText={val => setEmail(val)}
       placeholder="Enter Email Here"
       placeholderTextColor="#fff"
    />
    </View>

    <View
       style={{
       marginTop: 40,
       width: '100%',
       justifyContent: 'center',
       alignItems: 'center',
     }}>

     <TouchableOpacity onPress={reset} style={styles.button}>
       <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>
         Send Email
       </Text>
     </TouchableOpacity>
    </View>
    </View>
    </ScrollView>
    );
};

export default ForgotPassword

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
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
