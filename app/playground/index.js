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


const firebaseRef = firebase.database().ref();

firebaseRef.set({
    appName: 'toDoApp',
    somethingElse: 'Else'
});

var notesRef = firebaseRef.child('notes');

notesRef.on('child_added', (snapshot) => {
    console.log("child Added", snapshot.key, snapshot.val());
});

notesRef.on('child_changed', (snapshot) => {
    console.log("child Changed", snapshot.key, snapshot.val());
});

notesRef.on('child_removed', (snapshot) => {
    console.log("child Removed", snapshot.key, snapshot.val());
});

var newNoteRef = notesRef.push({
    text: 'Walk the Dog'
});

 console.log("NoteRef", newNoteRef.key);

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log("child Added", snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot) => {
    console.log("child Changed", snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot) => {
    console.log("child Removed", snapshot.key, snapshot.val());
});

var newTodo1Ref = todosRef.push({
    text: 'todo 1'
});

var newTodo2Ref = todosRef.push({
    text: 'todo 2'
});
