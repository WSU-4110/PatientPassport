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
    </View>
  );
};

export default ClinicHomescreen;
