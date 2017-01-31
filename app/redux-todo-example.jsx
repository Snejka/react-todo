var redux = require('redux');

console.log("Starting the app");

const stateDefault = {
    searchText: '',
    showCompleted: false,
    todo: []
}

const reducer = (state = stateDefault, action) => {

    return state;
}

const store = redux.createStore(reducer);

const curentState = store.getState();
console.log(curentState);
