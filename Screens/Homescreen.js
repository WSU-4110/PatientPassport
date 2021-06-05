import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
} from 'react-native';

let personObj = {
  Name: '',
  Address: '',
};

const Homescreen = ({navigation}) => {
  const [isEditing, setIsEditing] = useState(true);
  const [nameState, setNameState] = useState('Enter Name');
  const [addressState, setAddressState] = useState('Enter Address');
  const [DOBState, setDOBState] = useState('Enter DOB');
  const [phoneState, setPhoneState] = useState('Enter Phone Number');
  const [emailState, setEmailState] = useState('Enter Email');
  const [emergencyState, setEmergencyState] = useState(
    'Enter Emergency Contact',
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.upperLogo}
          source={require('../AppDesignDocs/PatientPassport_Logo.png')}
        />
        <Text style={styles.headerText}>Patient Passport</Text>
      </View>
      <ScrollView
        style={styles.scrollable}
        contentContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.basicInfo}>
          <Text style={styles.basicInfoHeader}>Basic Information</Text>
          <ToggleableText type="Name" editable={isEditing} />
          <ToggleableText type="Address" editable={isEditing} />
          <ToggleableText type="Date of Birth" editable={isEditing} />
          <ToggleableText type="Phone Number" editable={isEditing} />
          <ToggleableText type="Email" editable={isEditing} />
          <ToggleableText type="Emergency Contact" editable={isEditing} />
        </View>
        <TouchableOpacity
          onPress={() => setIsEditing(!isEditing)}
          style={styles.editButton}>
          <Text>{isEditing ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const ToggleableText = props => {
  const [text, setText] = useState('');
  return (
    <View style={styles.toggleableStyles}>
      <Text style={{color: 'white'}}>{props.type}: </Text>
      {props.editable ? (
        <TextInput
          style={styles.textInputStyles}
          placeholder={`Enter ${props.type}`}
          value={text}
          onChangeText={text => setText(text)}
        />
      ) : (
        <Text>{text}</Text>
      )}
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
  container: {
    height: '100%',
  },
  header: {
    height: '10%',
    backgroundColor: '#001F3D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'relative',
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'times new roman',
  },
  upperLogo: {
    position: 'absolute',
    height: 70,
    width: 70,
    left: 0,
  },
  scrollable: {
    backgroundColor: '#055772',
  },
  basicInfo: {
    marginTop: '10%',
    width: '70%',
    display: 'flex',
    justifyContent: 'center',
  },
  basicInfoHeader: {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'times new roman',
    marginBottom: '5%',
  },
  editButton: {
    backgroundColor: '#09A9C8',
    height: 40,
    width: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
    borderRadius: 10,
  },
  textInputStyles: {
    borderWidth: 1,
    color: 'white',
    height: 40,
    width: 200,
    marginLeft: 10,
  },
  toggleableStyles: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default Homescreen;
