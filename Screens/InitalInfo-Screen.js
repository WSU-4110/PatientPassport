import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import auth, {firebase} from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
const InitialInfoScreen = ({navigation}) => {
  const [isEditingInitalInfo, setIsEditingInitalInfo] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [DOB, setDOB] = useState('');
  const [allergies, setAllergies] = useState('');
  const [knownDis, setKnownDis] = useState('');
  const [vacc, setVacc] = useState('');
  const [meds, setMeds] = useState('');
  const [healthConditions, setHealthConditions] = useState('');
  const [doctors, setDoctors] = useState('');
  const [heart, setHeart] = useState('');
  const [smoke, setSmoke] = useState('');

  const storeData = () => {
    //Checks to make sure all fields are filled out
    if (!verifyComplete()) {
      Alert.alert('Please fill out all fields');
      return;
    }

    //Stores data
    var email = auth().currentUser.email;

    firestore()
      .collection('users')
      .doc(email)
      .set({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        DOB: DOB,
        allergies: allergies,
        knownDis: knownDis,
        vaccinations: vacc,
        meds: meds,
        healthConditions: healthConditions,
        doctors: doctors,
        heartConditions: heart,
        smoke: smoke,
      })
      .then(() => {
        navigation.navigate('Homescreen');
      });
  };

  const verifyComplete = () => {
    //Verifies all fields are filled out
    return (
      firstName != '' &&
      lastName != '' &&
      gender != '' &&
      DOB != '' &&
      allergies != '' &&
      knownDis != '' &&
      vacc != '' &&
      meds != '' &&
      healthConditions != '' &&
      doctors != '' &&
      heart != '' &&
      smoke != ''
    );
  };

  const updateFirstName = value => {
    setFirstName(value);
  };

  const updateLastName = value => {
    setLastName(value);
  };

  const updateGender = value => {
    setGender(value);
  };

  const updateDOB = value => {
    setDOB(value);
  };

  const updateAllergies = value => {
    setAllergies(value);
  };

  const updateKnownDis = value => {
    setKnownDis(value);
  };

  const updateVacc = value => {
    setVacc(value);
  };

  const updateMeds = value => {
    setMeds(value);
  };

  const updateHealthConditions = value => {
    setHealthConditions(value);
  };

  const updateDoctors = value => {
    setDoctors(value);
  };

  const updateHeart = value => {
    setHeart(value);
  };

  const updateSmoke = value => {
    setSmoke(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.upperLogo}
          source={require('../AppDesignDocs/PatientPassport_Logo.png')}
        />
        <SideMenuToggle navigation={navigation} />
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
          <Text style={styles.basicInfoHeader}>Inital Information</Text>
          <ToggleableText
            type="First Name"
            editable={isEditingInitalInfo}
            callback={updateFirstName}
            initText=""
          />
          <ToggleableText
            type="Last Name"
            editable={isEditingInitalInfo}
            callback={updateLastName}
            initText=""
          />
          <ToggleableText
            type="Gender"
            editable={isEditingInitalInfo}
            callback={updateGender}
            initText=""
          />
          <ToggleableText
            type="Date of Birth"
            editable={isEditingInitalInfo}
            callback={updateDOB}
            initText=""
          />
          <ToggleableText
            type="Allergies"
            editable={isEditingInitalInfo}
            callback={updateAllergies}
            initText=""
          />
          <ToggleableText
            type="Known Disabilites"
            editable={isEditingInitalInfo}
            callback={updateKnownDis}
            initText=""
          />
          <ToggleableText
            type="Known Vaccinations"
            editable={isEditingInitalInfo}
            callback={updateVacc}
            initText=""
          />
          <ToggleableText
            type="Heart Conditions"
            editable={isEditingInitalInfo}
            callback={updateHeart}
            initText=""
          />
          <ToggleableText
            type="Current Medications"
            editable={isEditingInitalInfo}
            callback={updateMeds}
            initText=""
          />
          <ToggleableText
            type="Do You Smoke?"
            editable={isEditingInitalInfo}
            callback={updateSmoke}
            initText=""
          />
          <ToggleableText
            type="Primary Care Physician"
            editable={isEditingInitalInfo}
            callback={updateDoctors}
            initText=""
          />
          <ToggleableText
            type="Additional Health Concerns #1"
            editable={isEditingInitalInfo}
            callback={updateHealthConditions}
            initText=""
          />
          <ToggleableText
            type="Additional Health Concerns #2"
            editable={isEditingInitalInfo}
            callback={updateHealthConditions}
            initText=""
          />
          <ToggleableText
            type="Additional Health Concerns #3"
            editable={isEditingInitalInfo}
            callback={updateHealthConditions}
            initText=""
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            if (isEditingInitalInfo) {
              storeData();
            }
          }}
          style={styles.editButton}>
          <Text>{isEditingInitalInfo ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

//--------------------
//    STYLESHEET
//--------------------
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
    height: 90,
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
    right: 5,
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
    color: '#000000',
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
    marginTop: 20,
    borderRadius: 10,
    marginBottom: '10%',
  },
});

export default InitialInfoScreen;
