import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const Homescreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.button}>
        <Text>To Login Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Registration')}
        style={styles.button}>
        <Text>To Registration Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('InitialInfo')}
        style={styles.button}>
        <Text>To Initial Info Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Homescreen')}
        style={styles.button}>
        <Text>To Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: '60%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 5,
    margin: '5%',
  },
});

export default Homescreen;
