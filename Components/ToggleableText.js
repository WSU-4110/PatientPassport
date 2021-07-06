import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';

const ToggleableText = props => {
  const [text, setText] = useState('');

  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 0,
        }}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>{props.type}: </Text>
      </View>
      <View>
        {props.editable ? (
          <TextInput
            style={{
              borderWidth: 1,
              color: 'white',
              height: 40,
              width: '100%',
            }}
            placeholder={`Enter ${props.type}`}
            value={text}
            onChangeText={text => {
              setText(text);
              props.callback(text);
            }}
          />
        ) : (
          <Text style={{color: 'white', marginBottom: 10}}>{text}</Text>
        )}
      </View>
    </View>
  );
};

export default ToggleableText;
