import React, {useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useEffect} from 'react/cjs/react.development';

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
    <ScrollView>
      <Text>Clinic Filters</Text>
      {filterList.map((elem, idx) => {
        return (
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
            key={idx}>
            <CheckBox
              value={elem['active']}
              onChange={() => {
                handleChange(elem);
              }}
            />
            <Text>{elem['display']}</Text>
          </View>
        );
      })}
      <TouchableOpacity onPress={saveAndExit}>
        <Text>Save and Exit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ClinicFilters;
