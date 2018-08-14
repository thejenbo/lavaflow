import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyAcbD2eJjeJuWuNef7dEaPlY1hCWfWWIW4",
    authDomain: "jenbo-lavaflow.firebaseapp.com",
    databaseURL: "https://jenbo-lavaflow.firebaseio.com",
    projectId: "jenbo-lavaflow",
    storageBucket: "jenbo-lavaflow.appspot.com",
    messagingSenderId: "484593084636"
  };

firebase.initializeApp(config);

export const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
