import React, {useState} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image, StyleSheet,} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';
const InitialInfoScreen = ({navigation}) => {
const [isEditingInitalInfo, setIsEditingInitalInfo] = useState(false);


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
                  <ToggleableText type="Full Name" editable={isEditingInitalInfo} />
                  <ToggleableText type="Gender" editable={isEditingInitalInfo} />
                  <ToggleableText type="Date of Birth" editable={isEditingInitalInfo} />
                  <ToggleableText type="Alergies" editable={isEditingInitalInfo} />
                  <ToggleableText type="Known Disabilites" editable={isEditingInitalInfo} />
                  <ToggleableText type="Known Vacinations" editable={isEditingInitalInfo} />
                  <ToggleableText type="Heart conditions" editable={isEditingInitalInfo} />
                  <ToggleableText type="currently taken medications" editable={isEditingInitalInfo} />
                  <ToggleableText type="Do You Smoke?" editable={isEditingInitalInfo} />
                  <ToggleableText type="Known Doctors and locations" editable={isEditingInitalInfo} />
                  <ToggleableText type="Any Additional Health Concerns #1" editable={isEditingInitalInfo} />
                  <ToggleableText type="Any Additional Health Concerns #2" editable={isEditingInitalInfo} />
                  <ToggleableText type="Any Additional Health Concerns #3" editable={isEditingInitalInfo} />


                </View>
                <TouchableOpacity
                  onPress={() => {
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
  },);


export default InitialInfoScreen;
