import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import SideMenuToggle from '../Components/SideMenuToggle';
import Colors from './config/Colors';

const HEIGHT = Dimensions.get('window').height;

const ClinicFilters = ({navigation}) => {
  const [filterList, setFilterList] = useState([
    {display: 'DOB', id: 0, DBName: 'DOB', active: false},
    {display: 'Address', id: 1, DBName: 'address', active: false},
    {display: 'Allergies', id: 2, DBName: 'allergies', active: false},
    {display: 'Doctors', id: 3, DBName: 'doctors', active: false},
    {display: 'Email', id: 4, DBName: 'email', active: false},
    {display: 'First Name', id: 5, DBName: 'firstName', active: false},
    {display: 'Gender', id: 6, DBName: 'gender', active: false},
    {
      display: 'Health Conditions',
      id: 7,
      DBName: 'healthConditions',
      active: false,
    },
    {
      display: 'Heart Conditions',
      id: 8,
      DBName: 'heartConditions',
      active: false,
    },
    {display: 'Known Disabilities', id: 9, DBName: 'knownDis', active: false},
    {display: 'Last Name', id: 10, DBName: 'lastName', active: false},
    {display: 'Medications', id: 11, DBName: 'meds', active: false},
    {display: 'Phone Number', id: 12, DBName: 'phoneNumber', active: false},
    {display: 'Smoker', id: 13, DBName: 'smoke', active: false},
    {display: 'Vaccinations', id: 14, DBName: 'vaccinations', active: false},
    {display: 'Allergies', id: 15, DBName: 'allergies', active: false},
    {display: 'Allergies', id: 16, DBName: 'allergies', active: false},
    {display: 'Allergies', id: 17, DBName: 'allergies', active: false},
    {display: 'Allergies', id: 18, DBName: 'allergies', active: false},
    {display: 'Allergies', id: 19, DBName: 'allergies', active: false},
    {display: 'Allergies', id: 20, DBName: 'allergies', active: false},
  ]);

  const handleChange = elem => {
    let tempFeilds = [...filterList];
    tempFeilds[elem.id]['active'] = !tempFeilds[elem.id]['active'];
    setFilterList(tempFeilds);
  };

  const saveAndExit = () => {
    filters = [];
    filterList.forEach(item => {
      if (item['active']) filters.push(item['DBName']);
    });

    firestore()
      .collection('clinics')
      .doc(auth().currentUser.email)
      .update({
        filters: filters,
      })
      .then(() => {
        navigation.navigate('Clinic Homescreen');
      });
  };

  const getFiltersFromDB = () => {
    firestore()
      .collection('clinics')
      .doc(auth().currentUser.email)
      .get()
      .then(documentSnapshot => {
        if (documentSnapshot.exists) {
          tempList = [...filterList];
          documentSnapshot.data().filters.forEach(filter => {
            tempList.forEach(localFilter => {
              if (localFilter['DBName'] == filter) localFilter['active'] = true;
            });
          });
          setFilterList(tempList);
        } else console.log('No data');
      })
      .catch(error => {});
  };

  useEffect(() => {
    getFiltersFromDB();
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

      <View style={styles.scrollContainer}>
        <ScrollView>
          <Text style={styles.subHeader}>
            Select which data to recieve from patients:
          </Text>
          {filterList.map((elem, idx) => {
            return (
              <View
                style={{
                  marginLeft: 20,
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                key={idx}>
                <CheckBox
                  style={styles.check}
                  value={elem['active']}
                  onChange={() => {
                    handleChange(elem);
                  }}
                />
                <Text style={styles.checkText}>{elem['display']}</Text>
              </View>
            );
          })}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.saveAndExit} onPress={saveAndExit}>
              <Text style={styles.buttonText}>Save and Exit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default ClinicFilters;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'lightgray',
    height: '100%',
  },
  header: {
    width: '100%',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: '#001F3D',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
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
  scrollContainer: {
    position: 'absolute',
    width: '100%',
    height: HEIGHT - 56,
    bottom: 0,
  },
  subHeader: {
    marginTop: 15,
    marginBottom: 15,
    width: '80%',
    fontFamily: 'times new roman',
    fontSize: 20,
    marginLeft: 20,
  },
  check: {
    height: 40,
    width: 40,
  },
  checkText: {
    fontSize: 20,
  },
  buttonWrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveAndExit: {
    margin: 20,
    height: 50,
    width: '60%',
    backgroundColor: Colors.MidnightBlue,
    borderBottomEndRadius: 10.4,
    borderTopStartRadius: 10.4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'times new roman',
  },
});
