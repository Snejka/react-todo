import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAB6KjPELSU0FrANqoyOEupB3f-2rGN8Dg",
    authDomain: "mead-todo-app-7d4f4.firebaseapp.com",
    databaseURL: "https://mead-todo-app-7d4f4.firebaseio.com",
    storageBucket: "mead-todo-app-7d4f4.appspot.com",
    messagingSenderId: "1096004053420"
  };
  firebase.initializeApp(config);

firebase.database().ref().set({
    appName: 'toDoApp',
    somethingElse: 'Else'
})
