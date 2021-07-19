/*
Defines a Singleton Class represeting the 
current user
*/

import auth from '@react-native-firebase/auth';

class SingleUser {
  constructor() {
    this.firebaseUser = auth().currentUser;
    this.instance = new SingleUser();
  }

  static getSingleUser() {
    return this.instance;
  }

  getEmail() {
    return this.firebaseUser.email;
  }

  sendEmailVerification() {
    this.firebaseUser.sendEmailVerification();
  }

  isVerified() {
    return this.firebaseUser.emailVerified;
  }

  updateUsername(newUserName) {
    this.firebaseUser.updateUsername(newUserName);
  }
}
