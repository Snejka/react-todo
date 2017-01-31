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
            return state; //Always return the state
    }
}

const store = redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('Name is: ',state.name);
    document.getElementById('app').innerHTML = state.name;
});
// unsubscribe();

var currentState = store.getState();
console.log ('Current State', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Snezhana'
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Jane'
});
