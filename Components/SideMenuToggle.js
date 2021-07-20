import {View, TouchableOpacity} from 'react-native';
import React from 'react';

const SideMenuToggle = ({navigation}) => {
  return (
    <TouchableOpacity
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        width: 70,
        position: 'absolute',
        left: 5,
        top: -15,
      }}
      onPress={() => {
        navigation.toggleDrawer();
      }}>
      <View
        style={{
          backgroundColor: 'white',
          width: '35%',
          height: 1.5,
        }}></View>
      <View
        style={{
          backgroundColor: 'white',
          width: '35%',
          height: 1.5,
          marginTop: 7,
        }}></View>
      <View
        style={{
          backgroundColor: 'white',
          width: '35%',
          height: 1.5,
          marginTop: 7,
        }}></View>
    </TouchableOpacity>
  );
};

export default SideMenuToggle;
