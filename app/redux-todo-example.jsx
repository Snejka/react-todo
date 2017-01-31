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

const store = redux.createStore(reducer);

const curentState = store.getState();
console.log(curentState);

const changeSerchText = {
    type: 'CHANGE_SEARCH_TEXT',
    searchText: 'New Search Text'
}

store.dispatch(changeSerchText);

console.log('New State', store.getState());
