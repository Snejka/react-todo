var redux = require('redux');

console.log('Starting redux Example');

var reducer = (state = {name: 'Anonymos'}, action) => {
    //state = state || {name: 'Anonymos'};

    return state;                                           //Always return the state
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log ('Current State', currentState);
