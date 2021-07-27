import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  StatusBar,
  TextInput,
} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AppTextButton from './components/AppTextButton.js';
import Colors from './config/Colors.js';
import {ScreenStackHeaderSearchBarView} from 'react-native-screens';

const Homescreen = ({navigation}) => {
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
  const [search, setSearch] = useState('');

  const userID = auth().currentUser.email;

  // Deals with updating DB based on values object
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
    setValues({...values, knownDis: value});
  };

  const updateVacc = value => {
    setValues({...values, vacc: value});
  };

  const updateMeds = value => {
    setValues({...values, meds: value});
  };

  const updateHealthConditions = value => {
    setValues({...values, healthConditions: value});
  };

  const updateDoctors = value => {
    setValues({...values, doctors: value});
  };

  const updateHeart = value => {
    setValues({...values, heart: value});
  };

  const updateSmoke = value => {
    setValues({...values, smoke: value});
  };

  const updateAddress = value => {
    setValues({
      ...values,
      address: value,
    });
  };

  const updatePhoneNumber = value => {
    let newPhone = {...values, phoneNumber: value};
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

  const renderFirstName = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="First Name"
          editable={isEditingBasicInfo}
          callback={updateFirstName}
          initText={typeof values !== 'undefined' ? values.firstName : ''}
        />
      );
    } else return <View></View>;
  };

  const renderLastName = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Last Name"
          editable={isEditingBasicInfo}
          callback={updateLastName}
          initText={typeof values !== 'undefined' ? values.lastName : ''}
        />
      );
    } else return <View></View>;
  };

  const renderGender = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Gender"
          editable={isEditingBasicInfo}
          callback={updateGender}
          initText={typeof values !== 'undefined' ? values.gender : ''}
        />
      );
    } else return <View></View>;
  };

  const renderAddress = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Address"
          editable={isEditingBasicInfo}
          callback={updateAddress}
          initText={typeof values !== 'undefined' ? values.address : ''}
        />
      );
    } else return <View></View>;
  };

  const renderDOB = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Date of Birth"
          editable={isEditingBasicInfo}
          callback={updateDOB}
          initText={typeof values !== 'undefined' ? values.DOB : ''}
        />
      );
    } else return <View></View>;
  };

  const renderPhoneNumber = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Phone Number"
          editable={isEditingBasicInfo}
          callback={updatePhoneNumber}
          initText={typeof values !== 'undefined' ? values.phoneNumber : ''}
        />
      );
    } else return <View></View>;
  };

  const renderEmail = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Email"
          editable={isEditingBasicInfo}
          callback={null}
          initText={userID}
        />
      );
    } else return <View></View>;
  };

  const renderEContactName = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Emergency Contact Name"
          editable={isEditingBasicInfo}
          callback={updateEmergContactName}
          initText={
            typeof values !== 'undefined' ? values.emergContactName : ''
          }
        />
      );
    } else return <View></View>;
  };

  const renderEContactPhone = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Emergency Contact Phone"
          editable={isEditingBasicInfo}
          callback={updateEmergContactPhone}
          initText={
            typeof values !== 'undefined' ? values.emergContactPhone : ''
          }
        />
      );
    } else return <View></View>;
  };

  const renderEContactEmail = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Emergency Contact Email"
          editable={isEditingBasicInfo}
          callback={updateEmergContactEmail}
          initText={
            typeof values !== 'undefined' ? values.emergContactEmail : ''
          }
        />
      );
    } else return <View></View>;
  };

  const renderInsuredName = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Name of Insured Individual"
          editable={isEditingInsurance}
          callback={updateInsuredName}
          initText={typeof values !== 'undefined' ? values.insuredName : ''}
        />
      );
    } else return <View></View>;
  };

  const renderInsuredDOB = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Date of Birth"
          editable={isEditingInsurance}
          callback={updateInsuredDOB}
          initText={typeof values !== 'undefined' ? values.insuredDOB : ''}
        />
      );
    } else return <View></View>;
  };

  const renderEmployer = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Employer"
          editable={isEditingInsurance}
          callback={updateInsuredEmployer}
          initText={typeof values !== 'undefined' ? values.insuredEmployer : ''}
        />
      );
    } else return <View></View>;
  };

  const renderInsuredAddress = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Address"
          editable={isEditingInsurance}
          callback={updateInsuredAddress}
          initText={typeof values !== 'undefined' ? values.insuredAddress : ''}
        />
      );
    } else return <View></View>;
  };

  const renderInsuranceCompany = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Primary Insurance Company"
          editable={isEditingInsurance}
          callback={updatePrimaryInsurance}
          initText={
            typeof values !== 'undefined' ? values.primaryInsurance : ''
          }
        />
      );
    } else return <View></View>;
  };

  const renderInsuranceAddress = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Address"
          editable={isEditingInsurance}
          callback={updateInsuranceAddress}
          initText={typeof values !== 'undefined' ? values.insuranceAdress : ''}
        />
      );
    } else return <View></View>;
  };

  const renderInsuredID = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Insured ID"
          editable={isEditingInsurance}
          callback={updateInsuredID}
          initText={typeof values !== 'undefined' ? values.insuredID : ''}
        />
      );
    } else return <View></View>;
  };

  const renderInsuredContact = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Contact"
          editable={isEditingInsurance}
          callback={updateInsuranceContact}
          initText={
            typeof values !== 'undefined' ? values.insuranceContact : ''
          }
        />
      );
    } else return <View></View>;
  };

  const renderNotes = label => {
    if (label.toLowerCase().includes(search)) {
      return (
        <ToggleableText
          type="Notes"
          editable={isEditingInsurance}
          callback={updateInsuranceNotes}
          initText={typeof values !== 'undefined' ? values.insuranceNotes : ''}
        />
      );
    } else return <View></View>;
  };

  //--------------------
  // Gets Data from DB
  //--------------------
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(userID)
      .onSnapshot(documentSnapshot => {
        setValues(documentSnapshot.data());
      });
  }, []);
  return (
    //Returns screen w/ all components
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
        <View
          style={{
            marginTop: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search"
            value={search}
            onChangeText={value => setSearch(value)}
          />
          <TouchableOpacity
            style={{
              width: 50,
              height: 50,
              marginLeft: 5,
              backgroundColor: Colors.MidnightBlue,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 10,
            }}
            onPress={() => setSearch('')}>
            <Text
              style={{
                color: 'white',
                fontSize: 35,
              }}>
              X
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.basicInfo}>
          <Text style={styles.basicInfoHeader}>Basic Information</Text>
          {renderFirstName('First Name')}
          {renderLastName('Last Name')}
          {renderGender('Gender')}
          {renderAddress('Address')}
          {renderDOB('DOB Date Of Birth')}
          {renderPhoneNumber('Phone Number')}
          {renderEmail('Email')}
          {renderEContactName('Emergency Contact Name')}
          {renderEContactPhone('Emergency Contact Phone')}
          {renderEContactEmail('Emergency Contact Email')}
        </View>

        {/* button */}
        <View style={{width: '50%', marginBottom: 30, marginTop: 20}}>
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

        <View style={[styles.basicInfo, {marginTop: 5}]}>
          <Text style={styles.basicInfoHeader}>Insurance Information</Text>

          {renderInsuredName('Insured Name')}
          {renderInsuredDOB('Insured Date Of Birth DOB')}
          {renderEmployer('Employer')}
          {renderInsuredAddress('Insurance address')}
          {renderInsuranceCompany('primary insurance company')}
          {renderInsuranceAddress('Insurance address')}
          {renderInsuredID('insured ID')}
          {renderInsuredContact('contact')}
          {renderNotes('Notes')}
        </View>

        {/* button */}
        <View style={{width: '50%', marginBottom: 30, marginTop: 20}}>
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
  searchBar: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default Homescreen;
