var assert = require('assert');
import {render, fireEvent} from '@testing-library/react-native';
import React from 'react';
import Homescreen from '../Screens/Homescreen';
import ToggleableText from '../Components/ToggleableText';
import firestore from '@react-native-firebase/firestore';

describe('Homescreen Test Suite', function () {
  test('Testing setFirstName', function () {
    const s = render(<Homescreen></Homescreen>);
    s.setFirstName({firstName: 'Jeremy'});
    assert.ok(s.values['firstName'] === 'Jeremy');
  });

  test('Testing setLastName', function () {
    const s = render(<Homescreen></Homescreen>);
    s.setLastName({lastName: 'Cavallo'});
    assert.ok(s.values['lastName'] === 'Cavallo');
  });

  test('Testing setCurrentStatus', function () {
    const s = render(<Homescreen></Homescreen>);
    s.setCurrentStatus({firstName: 'Jeremy', lastName: 'Cavallo'});
    const fromDatabase = firestore()
      .collection('users')
      .doc('jcbball58@gmail.com')
      .get();
    assert.ok(fromDatabase === {firstName: 'Jeremy', lastName: 'Cavallo'});
  });

  test('Testing toggleableText changeText event', function () {
    const {getByPlaceholderText, getAllByText} = render(
      <ToggleableText></ToggleableText>,
    );
    fireEvent.changeText(getByPlaceholderText('Enter First Name'), 'Jeremy');
    fireEvent.press(getAllByText('Save'));
    assert.ok(getByPlaceholderText('Enter First Name').value === 'Jeremy');
  });

  test('Testing toggleableText button press event', function () {
    const {getByPlaceholderText, getAllByText} = render(
      <ToggleableText></ToggleableText>,
    );
    fireEvent.press(getAllByText('Save'));
    assert.ok(getByPlaceholderText('Enter First Name').value === '');
    fireEvent.changeText(getByPlaceholderText('Enter First Name'), 'Jeremy');
    fireEvent.press(getAllByText('Save'));
    assert.ok(getByPlaceholderText('Enter First Name').value === 'Jeremy');
  });

  test('Testing passage of data between toggleable Text and Homescreen', function () {
    const {getByPlaceholderText, getAllByText} = render(
      <ToggleableText></ToggleableText>,
    );
    fireEvent.changeText(getByPlaceholderText('Enter First Name'), 'Jeremy');
    fireEvent.press(getAllByText('Save'));
    const home = render(<Homescreen></Homescreen>);
    assert.ok(home.values['firstName'] === 'Jeremy');
  });
});
