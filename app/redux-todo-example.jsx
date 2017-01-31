var redux = require('redux');

console.log("Starting the app");

const stateDefault = {
    searchText: '',
    showCompleted: false,
    todo: []
}

const reducer = (state = stateDefault, action) => {

    switch (action.type){
        case 'CHANGE_SEARCH_TEXT':
            return {
                ...state,
                searchText: action.searchText
            };
        default:
            return state;
    }
}

const store = redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subscribe to changes
store.subscribe(() => {
    let state = store.getState();
    console.log('New State is: ', state.searchText);
    document.getElementById('app').innerHTML = state.searchText;
});

const curentState = store.getState();
console.log(curentState);

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'New Search Text'
});

store.dispatch({
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'Another Search Text'
});
