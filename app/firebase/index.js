import * as firebase from 'firebase';

try {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAB6KjPELSU0FrANqoyOEupB3f-2rGN8Dg",
        authDomain: "mead-todo-app-7d4f4.firebaseapp.com",
        databaseURL: "https://mead-todo-app-7d4f4.firebaseio.com",
        storageBucket: "mead-todo-app-7d4f4.appspot.com",
        messagingSenderId: "1096004053420"
    };

    firebase.initializeApp(config);
} catch (e) {
    console.log('Error! 1 ')
}

export const firebaseRef = firebase.database().ref();
export default firebase;
