import React, { useEffect, useState } from 'react';
import { TextInput, Text, View, Alert } from 'react-native';
import AppTextInput from '../Screens/components/AppTextInput';
import Colors from '../Screens/config/Colors';

const ToggleableText = props => {
  const [text, setText] = useState('');

  useEffect(() => {
    setText(props.initText);
  }, [props.editable]);
  return (
    <View style={{ flexDirection: "column" }} >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 0,
        }}>
        <Text style={{ color: 'black', fontSize: 20 }}>{props.type}: </Text>
      </View>
      <View >
        {props.editable ? (
          <AppTextInput
            placeHolder={`Enter ${props.type}`}
            width="100%"
            style={{ marginTop: 10, marginBottom: 10 }}
            value={text}
            borderWidth={1}
            onChange={text => {
              setText(text);
              props.callback(text);
            }}
          />

        ) : (
          <Text style={{ marginTop: props.initText ? 7 : 0, color: Colors.BlueGrotto, marginBottom: props.initText ? 16 : 10, fontSize: props.initText ? 20 : 14 }}>
            {props.initText}
          </Text>
        )}
      </View>
    </View>
  );
};

export default ToggleableText;
