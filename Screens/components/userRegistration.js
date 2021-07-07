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

    //get the user
    static getSingleUser() 
    {
        return this.instance;
    }

    //register the user
    createUserWithEmailAndPassword(email, pass)
    {
        return this.#firebaseUserRegistration.createUserWithEmailAndPassword(email, pass);
    }
}