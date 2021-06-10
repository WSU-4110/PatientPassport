import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import ToggleableText from '../Components/ToggleableText.js';
import SideMenuToggle from '../Components/SideMenuToggle.js';

const Homescreen = ({navigation}) => {
  const [isEditingBasicInfo, setIsEditingBasicInfo] = useState(false);
  const [isEditingInsurance, setIsEditingInsurance] = useState(false);

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
          <ToggleableText type="Name" editable={isEditingBasicInfo} />
          <ToggleableText type="Address" editable={isEditingBasicInfo} />
          <ToggleableText type="Date of Birth" editable={isEditingBasicInfo} />
          <ToggleableText type="Phone Number" editable={isEditingBasicInfo} />
          <ToggleableText type="Email" editable={isEditingBasicInfo} />
          <ToggleableText
            type="Emergency Contact Name"
            editable={isEditingBasicInfo}
          />
          <ToggleableText
            type="Emergency Contact Phone"
            editable={isEditingBasicInfo}
          />
          <ToggleableText
            type="Emergency Contact Email"
            editable={isEditingBasicInfo}
          />
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
          />
          <ToggleableText type="Date of Birth" editable={isEditingInsurance} />
          <ToggleableText type="Employer" editable={isEditingInsurance} />
          <ToggleableText type="Address" editable={isEditingInsurance} />
          <ToggleableText
            type="Primary Insurance Company"
            editable={isEditingInsurance}
          />
          <ToggleableText type="Address" editable={isEditingInsurance} />
          <ToggleableText type="Insured ID" editable={isEditingInsurance} />
          <ToggleableText type="Contact" editable={isEditingInsurance} />
          <ToggleableText type="Notes" editable={isEditingInsurance} />
          <ToggleableText
            type="Secondary Insurance"
            editable={isEditingInsurance}
          />
          <ToggleableText type="Address" editable={isEditingInsurance} />
          <ToggleableText type="Insured ID" editable={isEditingInsurance} />
          <ToggleableText type="Contact" editable={isEditingInsurance} />
          <ToggleableText type="Notes" editable={isEditingInsurance} />
        </View>
        <TouchableOpacity
          onPress={() => setIsEditingInsurance(!isEditingInsurance)}
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
