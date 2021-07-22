import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
const ClinicHomescreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Camera');
        }}>
        <Text>Scan Code</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Clinic Filters');
        }}>
        <Text>Set Data Filters</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClinicHomescreen;
