/*
Defines a Singleton Class to represent user registration.
*/

import auth from '@react-native-firebase/auth';

class userRegistration
{
    //variable for the user
    #firebaseUserRegistration;

    //constructor for the class
    constructor()
    {
        this.#firebaseUserRegistration = auth().currentUser;
        this.instance = new userRegistration();
    }

    //get the user method 1
    static getSingleUser() 
    {
        return this.instance;
    }

    //get user email method 2
    getEmail(email)
    {
        return this.#firebaseUserRegistration(email);
    }

    //get user password method 3
    getPass(pass)
    {
        return this.#firebaseUserRegistration(pass);
    }

    //register the user method 4
    createUserWithEmailAndPassword(email, pass)
    {
        return this.#firebaseUserRegistration.createUserWithEmailAndPassword(email, pass);
    }

    //email already in use check method 5
    alreadyUseEmail()
    {
        if(error.code === 'auth/email-already-in-use')
            return(Alert.alert('Email Already in Use'));
        return(navigation.navigate('Login'));
    }

    //invalid email check method 6
    invalidEmail()
    {
        if (error.code === 'auth/invalid-email') 
            return(Alert.alert('Invalid Email'));
        return(navigation.navigate('Login'));
    }

}