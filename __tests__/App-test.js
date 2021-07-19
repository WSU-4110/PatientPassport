var assert = require('assert');
import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Homescreen from '../Screens/Homescreen';
import ToggleableText from '../Components/ToggleableText';
import firestore from '@react-native-firebase/firestore';

describe('Homescreen Test Suite', function () {
  test('Testing GenderButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.GenderButton({Gender: 'Male'});
    assert.ok(s.values['firstName'] === 'Male');
  });
  test('Testing AllergyButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.AllergyButton({Allergies: 'None'});
    assert.ok(s.values['ALLER'] === 'None');
  });
  test('Testing DisButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.DisButton({Disabilities: 'None'});
    assert.ok(s.values['dis'] === 'None');
  });
  test('Testing VaccineButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.VaccineButton({Vaccinations: 'None'});
    assert.ok(s.values['Vaccine'] === 'None');
  });
  test('Testing MedButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.MedButton({Medications: 'None'});
    assert.ok(s.values['med'] === 'None');
  });
  test('Testing SmokeButton', function () {
    const s = render(<Homescreen></Homescreen>);
    s.SmokeButton({Smoke: 'No'});
    assert.ok(s.values['smk'] === 'No');
  });
  
});