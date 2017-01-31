var redux = require('redux');

console.log('Starting redux Example');

var reducer = (state = {name: 'Anonymos'}, action) => {
    //state = state || {name: 'Anonymos'};

    //console.log('New Action', action);

    switch (action.type){
        case 'CHANGE_NAME':
        return {
            ...state,
            name: action.name
        };
        default:
            return state;
    }                                         //Always return the state
}

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log ('Current State', currentState);


const action = {
    type: 'CHANGE_NAME',
    name: 'Snezhana'
};

store.dispatch(action);

console.log('Name should be changed', store.getState());
