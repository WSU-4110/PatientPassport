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
import {firestore} from '@react-native-firebase/firestore';
import auth, {firebase} from '@react-native-firebase/auth';

const Homescreen = ({navigation}) => {
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);
  const [isEditingInsurance, setIsEditingInsurance] = useState(false);
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
  const [values, setValues] = useState({});

  const getCurrentStatus = () => {
    var user = auth().currentUser;
    Alert.alert(user.email);
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
var gen = window.prompt ("Update Gender: ");
updateGender = gen;
}

function DOBButton(){
var DOB = window.prompt ("Update Date of Birth: ");
updateDOB = DOB;
}

function AllergyButton(){
var ALLER = window.prompt ("Update Allergies: ");
updateAllergies = ALLER;
}

function DisButton(){
var dis = window.prompt ("Update Known Disabilities: ");
updateKownDis = dis;
}

function VaccineButton(){
var Vaccine = window.prompt ("Update Vaccinations: ");
updateVacc = Vaccine;
}

function MedButton(){
var med = window.prompt ("Update Medication: ");
updateMeds = med;
}

function HealthConButton(){
var con = window.prompt ("Update Health Conditions: ");
updateHealthConditions = con;
}

function DoctorButton(){
var doc = window.prompt ("Update Doctor: ");
updateDoctors = doc;
}

function HeartButton(){
var hrt = window.prompt ("Update Heart Health: ");
updateHeart = hrt;
}

function SmokeButton(){
var smk = window.prompt ("Do You Smoke Y/N: ");
updateSmoke = smk;
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
          <Text style={styles.basicInfoHeader}>Basic Information</Text>
        
          <ToggleableText
            type="Address"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Phone Number"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Email"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Emergency Contact Name"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Emergency Contact Phone"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Emergency Contact Email"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
          />

	   <button onclick="FirstNameButton()">Click me</button>
           <button onclick="LastNameButton()">Click me</button>
           <button onclick="GenderButton()">Click me</button>
           <button onclick="GenderButton()">Click me</button>
           <button onclick="DOBButton()">Click me</button>
           <button onclick="AllergyButton()">Click me</button>
           <button onclick="DisButton()">Click me</button>
           <button onclick="VaccineButton()">Click me</button>
           <button onclick="MedButton()">Click me</button>
           <button onclick="HealthConButton()">Click me</button>
           <button onclick="DoctorButton()">Click me</button>
           <button onclick="HeartButton()">Click me</button>
           <button onclick="SmokeButton()">Click me</button>
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsEditingBasicInfo(!isEditingBasicInfo);
          }}
          style={styles.editButton}>
          <Text>{isEditingBasicInfo ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>

        <View style={styles.basicInfo}>
          <Text style={styles.basicInfoHeader}>Insurance Information</Text>
          <ToggleableText
            type="Name of Insured Individual"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Date of Birth"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Employer"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Address"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Primary Insurance Company"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Address"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Insured ID"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Contact"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Notes"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Secondary Insurance"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Address"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Insured ID"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Contact"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
          <ToggleableText
            type="Notes"
            editable={isEditingInsurance}
            callback={updateFirstName}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            setIsEditingInsurance(!isEditingInsurance);
            getCurrentStatus();
          }}
          style={styles.editButton}>
          <Text>{isEditingInsurance ? 'Save' : 'Edit'}</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 20,
    borderRadius: 10,
    marginBottom: '10%',
  },
});

export default Homescreen;
