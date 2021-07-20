/*
    Test File for userRegistration class
*/
import 'react-native';
import singleUser from '../Screens/components/userRegistration';
import auth from '@react-native-firebase/auth';

//create an assert variable
var assert = require('assert');

//create the test suit
describe('User Registration Test Suit', function() {

    //test first method
    it('Test Gets Current User', function() {
        var test = singleUser.getSingleUser();
        assert.ok(test == auth().currentUser);
        
    });

    //test second method
    it('Test Get Email', function() {
        var test = singleUser.getEmail({email: 'testmail@gmail.com'});
        assert.ok(test.value('email') == 'testmail@gmail.com');
    });

    //test third method
    it('Test Get Password', function() {
        var test = singleUser.getPass({pass: '12345678'});
        assert.ok(test.value('pass') =='12345678');

    });

    //test fourth method
    it('Test Create User With Email and Password', function() {
        var test = singleUser.
            createUserWithEmailAndPassword({email: 'testmail@gmail.com'}, {pass: '12345678'});
        assert.ok((test.value('email') == 'testmail@gmail.com') && 
            test.value('pass') == '12345678');
    });
    
    //test fifth method
    it('Test Email Already In Use', function() {
        var test = singleUser.alreadyUseEmail();
        assert.ok(test.value(singleUser.alreadyUseEmail()) == 
            'Email Already in Use');
        
    });

    //test sixth method
    it('Test Invalid Email', function() {
        var test = singleUser.invalidEmail();
        assert.ok(test.value(singleUser.invalidEmail()) == 
            'Invalid Email');
    });
});
  