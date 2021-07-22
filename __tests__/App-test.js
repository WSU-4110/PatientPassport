import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

import { TestScheduler } from '@jest/core';
import {onSingup} from '../Screens/Registration-Screen';
import {handleSuccessfulRegistration} from '../Screens/Registration-Screen';
import {onSingup, onFailedSignUp, onPasswordMatch, onPasswordNotMatch} from '../Screens/functions';

test ('successful signup', () => {
  expect(onSingup(name, email, pass, cpass));
  
})

test ('unsuccessful signup', () => {
  expect(onSingup(null, null, null, null));

  
})

test ('successful passwords', () => {
  onPasswordMatch ;pass = new onPasswordMatch('password');
  onPasswordMatch ;cpass = new onPasswordMatch('password');
  expect(onSingup(pass, cpass));
  
})

test ('unsuccessful passwords', () => {
  onPasswordMatch ;pass = new onPasswordMatch('password1');
  onPasswordMatch ;cpass = new onPasswordMatch('password');
  expect(onSingup(pass, cpass));
  
})

test ('short passwords', () => {
  onPasswordMatch ;pass = new onPasswordMatch('pas');
  expect(onSingup(pass));
  
})

test ('long passwords', () => {
  onPasswordMatch ;pass = new onPasswordMatch('passwordpassword1');
  expect(onSingup(pass));
  
})