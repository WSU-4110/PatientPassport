import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import firestore from '@react-native-firebase/firestore';
import auth, { firebase } from '@react-native-firebase/auth';
import AppTextButton from './components/AppTextButton.js';
import Colors from './config/Colors.js';

const Homescreen = ({ navigation }) => {
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);
  const [isEditingInsurance, setIsEditingInsurance] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    address: '',
    DOB: '',
    phoneNumber: '',
    email: '',
    emergContactName: '',
    emergContactPhone: '',
    emergContactEmail: '',
    insuredName: '',
    insuredEmployer: '',
    insuredAddress: '',
    primaryInsurance: '',
    insuredID: '',
    insuranceContact: '',
    insuranceNotes: '',
  });
  const userID = auth().currentUser.email;

  const setCurrentStatus = () => {
    firestore()
      .collection('users')
      .doc(userID)
      .update(values)
      .catch(error => {
        if (error.code === 'firestore/not-found') {
          firestore().collection('users').doc(userID).set(values);
        }
      });
  };

  const updateFirstName = value => {
    setValues({
      ...values,
      firstName: value,
    });
  };

  const updateLastName = value => {
    setValues({
      ...values,
      lastName: value,
    });
  };

  const updateGender = value => {
    setValues({
      ...values,
      gender: value,
    });
  };

  const updateDOB = value => {
    setValues({
      ...values,
      DOB: value,
    });
  };

  const updateAllergies = value => {
    setValues({
      ...values,
      allergies: value,
    });
  };

  const updateKnownDis = value => {
    setValues({ ...values, knownDis: value });
  };

  const updateVacc = value => {
    setValues({ ...values, vacc: value });
  };

  const updateMeds = value => {
    setValues({ ...values, meds: value });
  };

  const updateHealthConditions = value => {
    setValues({ ...values, healthConditions: value });
  };

  const updateDoctors = value => {
    setValues({ ...values, doctors: value });
  };

  const updateHeart = value => {
    setValues({ ...values, heart: value });
  };

  const updateSmoke = value => {
    setValues({ ...values, smoke: value });
  };

  const updateAddress = value => {
    setValues({
      ...values,
      address: value,
    });
  };

  const updatePhoneNumber = value => {
    let newPhone = { ...values, phoneNumber: value };
    setValues(newPhone);
  };

  const updateEmergContactName = value => {
    setValues({
      ...values,
      emergContactName: value,
    });
  };

  const updateEmergContactPhone = value => {
    setValues({
      ...values,
      emergContactPhone: value,
    });
  };

  const updateEmergContactEmail = value => {
    setValues({
      ...values,
      emergContactEmail: value,
    });
  };

  const updateInsuredName = value => {
    setValues({
      ...values,
      insuredName: value,
    });
  };

  const updateInsuredDOB = value => {
    setValues({
      ...values,
      insuredDOB: value,
    });
  };
  const updateInsuredEmployer = value => {
    setValues({
      ...values,
      insuredEmployer: value,
    });
  };

  const updateInsuredAddress = value => {
    setValues({
      ...values,
      insuredAddress: value,
    });
  };

  const updatePrimaryInsurance = value => {
    setValues({
      ...values,
      primaryInsurance: value,
    });
  };

  const updateInsuranceAddress = value => {
    setValues({
      ...values,
      insuranceAdress: value,
    });
  };

  const updateInsuredID = value => {
    setValues({
      ...values,
      insuredID: value,
    });
  };

  const updateInsuranceContact = value => {
    setValues({
      ...values,
      insuranceContact: value,
    });
  };

  const updateInsuranceNotes = value => {
    setValues({
      ...values,
      insuranceNotes: value,
    });
  };

  useEffect(() => {
    firestore()
      .collection('users')
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        setValues(documentSnapshot.data());
      });
  }, []);
  return (
    <View style={styles.container}>

      <StatusBar backgroundColor={'#001F3D'} />
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
            type="First Name"
            editable={isEditingBasicInfo}
            callback={updateFirstName}
            initText={typeof values !== 'undefined' ? values.firstName : ''}
          />
          <ToggleableText
            type="Last Name"
            editable={isEditingBasicInfo}
            callback={updateLastName}
            initText={typeof values !== 'undefined' ? values.lastName : ''}
          />
          <ToggleableText
            type="Gender"
            editable={isEditingBasicInfo}
            callback={updateGender}
            initText={typeof values !== 'undefined' ? values.gender : ''}
          />
          <ToggleableText
            type="Address"
            editable={isEditingBasicInfo}
            callback={updateAddress}
            initText={typeof values !== 'undefined' ? values.address : ''}
          />
          <ToggleableText
            type="Date of Birth"
            editable={isEditingBasicInfo}
            callback={updateDOB}
            initText={typeof values !== 'undefined' ? values.DOB : ''}
          />
          <ToggleableText
            type="Phone Number"
            editable={isEditingBasicInfo}
            callback={updatePhoneNumber}
            initText={typeof values !== 'undefined' ? values.phoneNumber : ''}
          />
          <ToggleableText
            type="Email"
            editable={isEditingBasicInfo}
            callback={null}
            initText={userID}
          />
          <ToggleableText
            type="Emergency Contact Name"
            editable={isEditingBasicInfo}
            callback={updateEmergContactName}
            initText={
              typeof values !== 'undefined' ? values.emergContactName : ''
            }
          />
          <ToggleableText
            type="Emergency Contact Phone"
            editable={isEditingBasicInfo}
            callback={updateEmergContactPhone}
            initText={
              typeof values !== 'undefined' ? values.emergContactPhone : ''
            }
          />
          <ToggleableText
            type="Emergency Contact Email"
            editable={isEditingBasicInfo}
            callback={updateEmergContactEmail}
            initText={
              typeof values !== 'undefined' ? values.emergContactEmail : ''
            }
          />
        </View>

        {/* button */}
        <View style={{ width: "50%", marginBottom: 30, marginTop: 20 }} >
          <AppTextButton
            name={isEditingBasicInfo ? 'Save' : 'Edit'}
            borderRadius={10}
            onSubmit={() => {
              if (isEditingBasicInfo) {
                setCurrentStatus();
              }
              setIsEditingBasicInfo(!isEditingBasicInfo);
            }}
            backgroundColor={Colors.MidnightBlue}
            width="100%"
            height={45}
          />
        </View>

        <View style={[styles.basicInfo, { marginTop: 5 }]}>
          <Text style={styles.basicInfoHeader}>Insurance Information</Text>
          <ToggleableText
            type="Name of Insured Individual"
            editable={isEditingInsurance}
            callback={updateInsuredName}
            initText={typeof values !== 'undefined' ? values.insuredName : ''}
          />
          <ToggleableText
            type="Date of Birth"
            editable={isEditingInsurance}
            callback={updateInsuredDOB}
            initText={typeof values !== 'undefined' ? values.insuredDOB : ''}
          />
          <ToggleableText
            type="Employer"
            editable={isEditingInsurance}
            callback={updateInsuredEmployer}
            initText={
              typeof values !== 'undefined' ? values.insuredEmployer : ''
            }
          />
          <ToggleableText
            type="Address"
            editable={isEditingInsurance}
            callback={updateInsuredAddress}
            initText={
              typeof values !== 'undefined' ? values.insuredAddress : ''
            }
          />
          <ToggleableText
            type="Primary Insurance Company"
            editable={isEditingInsurance}
            callback={updatePrimaryInsurance}
            initText={
              typeof values !== 'undefined' ? values.primaryInsurance : ''
            }
          />
          <ToggleableText
            type="Address"
            editable={isEditingInsurance}
            callback={updateInsuranceAddress}
            initText={
              typeof values !== 'undefined' ? values.insuranceAdress : ''
            }
          />
          <ToggleableText
            type="Insured ID"
            editable={isEditingInsurance}
            callback={updateInsuredID}
            initText={typeof values !== 'undefined' ? values.insuredID : ''}
          />
          <ToggleableText
            type="Contact"
            editable={isEditingInsurance}
            callback={updateInsuranceContact}
            initText={
              typeof values !== 'undefined' ? values.insuranceContact : ''
            }
          />
          <ToggleableText
            type="Notes"
            editable={isEditingInsurance}
            callback={updateInsuranceNotes}
            initText={
              typeof values !== 'undefined' ? values.insuranceNotes : ''
            }
          />
        </View>

        {/* button */}
        <View style={{ width: "50%", marginBottom: 30, marginTop: 20 }} >
          <AppTextButton
            name={isEditingInsurance ? 'Save' : 'Edit'}
            borderRadius={10}
            onSubmit={() => {
              if (isEditingInsurance) setCurrentStatus();
              setIsEditingInsurance(!isEditingInsurance);
            }}
            backgroundColor={Colors.MidnightBlue}
            width="100%"
            height={45}
          />
        </View>
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
    height: 56,
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
    height: 50,
    width: 50,
    right: 20,
  },
  scrollable: {
    backgroundColor: 'white',
  },
  basicInfo: {
    marginTop: '10%',
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
  },
  basicInfoHeader: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'times new roman',
    marginBottom: '10%',
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
