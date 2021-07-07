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
  const [isEditingInitalInfo, setIsEditingInitalInfo] = useState(false);
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
        Alert.alert('User added');
      });
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
function FirstNameButton(){
var FName = window.prompt ("update First name: ");
updateFirstName = FName;
}
function LastNameButton(){
var LName = window.prompt ("update Last name: ");
updateLastName = LName;
}
function GenderButton(){
var Gen = window.prompt ("update Gender: ");
updateGender = Gen;
}
function DOBButton(){
var DateB = window.prompt ("Date of Birth: ");
updateDOB = DateB;
}
function AllergyButton(){
var Allergy = window.prompt ("update Allergins: ");
updateAllergies = Allergy;
}
function DisButton(){
var Dis = window.prompt ("update Disabilites: ");
updateKnownDis= Dis;
}
function VacButton(){
var Vac = window.prompt ("update Vacinations: ");
updateVacc = Vac;
}
function MedButton(){
var Med = window.prompt ("update medications: ");
updateMeds = Med;
}
function HCButton(){
var HC = window.prompt ("update Health Conditions: ");
updateHealthConditions = HC;
}
function DocButton(){
var Doc = window.prompt ("update Doctor(s): ");
updateDoctors = Doc;
}
function HeartButton(){
var Hea = window.prompt ("update Heart problems: ");
updateHeart = Hea;
}
function SmokeButton(){
var Smo = window.prompt ("update Smoking condition: ");
updateSmoke = Smo;
}
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
           <button onclick="FirstNameButton()">Click me</button>
           <button onclick="LastNameButton()">Click me</button>
          <button onclick="GenderButton()">Click me</button>
           <button onclick="DOBButton()">Click me</button>
           <button onclick="AllergyButton()">Click me</button>
           <button onclick="DisButton()">Click me</button>
           <button onclick="VacButton()">Click me</button>
           <button onclick="MedButton()">Click me</button>
           <button onclick="HCButton()">Click me</button>
           <button onclick="DocButton()">Click me</button>
           <button onclick="HeartButton()">Click me</button>
           <button onclick="SmokeButton()">Click me</button>
        </View>
        <TouchableOpacity
          onPress={() => {
            if (isEditingInitalInfo) {
              storeData();
            }
            setIsEditingInitalInfo(!isEditingInitalInfo);
          }}
          style={styles.editButton}>
          <Text>{isEditingInitalInfo ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    // additonal content can be added
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
