var assert = require('assert');
 import{render, fireEvent} from '@testing-library/react-native';
 import React from 'react';
 import InitalInfo-Screen from '../Screens/InitalInfo-Screen';
 import ToggleableText from '../Components/ToggleableText';
 import firestore from @react-native-firebase/firestore';


describe('inital Info Screen Test', function(){
    test ('testing Verifiy fields are filled', function (){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        tester.setFirstName('Ryan');
        tester.setLastName('West');
        tester.setGender('male');
        tester.setDOB('yes');
        tester.setAllergies('yes');
        tester.setKnownDis('no');
        tester.setVacc('s');
        tester.setMeds('nh');
        tester.setHealthConditions('who lives in a pineapple');
        tester.setDoctors('no');
        tester.setHeart('p');
        tester.setSmoke('no')
        assert.ok(tester.verifyComplete() == true);
    });
    test('testing catch empty fields',function(){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        assert.ok(tester.verifyComplete() == false);
     });


    test('testing partially filled fields', function(){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        tester.setFirstName('Ryan');
        tester.setLastName('West');
        tester.setGender('male');
        tester.setDOB('yes');
        tester.setAllergies('yes');
        assert.ok(tester.verifyComplete() == false);
     });

    test('Testing store call', function(){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        assert(tester.storeData() == 0);
    });
    test('Testing store call filled fields but no email', function(){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        tester.setFirstName('Ryan');
        tester.setLastName('West');
        tester.setGender('male');
        tester.setDOB('yes');
        tester.setAllergies('yes');
        tester.setKnownDis('no');
        tester.setVacc('s');
        tester.setMeds('nh');
        tester.setHealthConditions('who lives in a pineapple');
        tester.setDoctors('no');
        tester.setHeart('p');
        tester.setSmoke('no')
        assert(tester.storeData() == 1&& tester.email == '');
    });
    test('Testing store value to new user', function(){
        const tester = render(<InitalInfo-Screen></InitalInfo-Screen>);
        tester.email = 'testingEmail@gmail.com';
        tester.setFirstName('Ryan');
        tester.setLastName('West');
        tester.setGender('male');
        tester.setDOB('yes');
        tester.setAllergies('yes');
        tester.setKnownDis('no');
        tester.setVacc('s');
        tester.setMeds('nh');
        tester.setHealthConditions('who lives in a pineapple');
        tester.setDoctors('no');
        tester.setHeart('p');
        tester.setSmoke('no')
        assert(tester.storeData() == 1 && tester.email)
    });

    });