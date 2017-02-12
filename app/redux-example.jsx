var redux = require('redux');

console.log('Starting redux Example');

// var oldReducer = (state = {name: 'Anonymos'}, action) => {
//     //state = state || {name: 'Anonymos'};

//     //console.log('New Action', action);

//     switch (action.type){
//         case 'CHANGE_NAME':
//         return {
//             ...state,
//             name: action.name
//         };
//         default:
//             return state; //Always return the state
//     }
// }

let hobbyID = 1;
let moveID =1;

const nameReducer = (state = 'Anonimus', action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

const hobbyReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_HOBBY':
            return [
                ...state,
                {   
                    id: hobbyID++,
                    hobby: action.hobby
                }
            ];
        case 'REMOVE_HOBBY':
            return state.filter((hobby) => hobby.id !== action.id);
        default:
            return state;
    }
}

const movieReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_MOVIE':
            return [
                ...state,
                {
                    id: movieID++,
                    title: action.title,
                    genre: action.ganre
                }
            ];
        case 'REMOVE_MOVIE':
            return state.filter((movie) => movie.id !== action.id);
        default:
            return state;
    }
}

const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    movies: movieReducer
})

const store = redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subscribe to changes
var unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log('Name is: ',state.name);
    document.getElementById('app').innerHTML = state.name;
    console.log ('Current State', state);

});
// unsubscribe();

// var currentState = store.getState();
// console.log ('Current State', currentState);


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Snezhana'
});


store.dispatch({
    type: 'CHANGE_NAME',
    name: 'Jane'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Running'
});

store.dispatch({
    type: 'ADD_HOBBY',
    hobby: 'Suimming'
});

store.dispatch({
    type: 'REMOVE_HOBBY',
    id: 1
});

store.dispatch({
    type: 'ADD_MOVE',
    title: 'Star Wars',
    genre: 'Fantasy'
});

store.dispatch({
    type: 'ADD_MOVE',
    title: 'Fyull House',
    genre: 'Comedy'
});

store.dispatch({
    type: 'REMOVE_MOVE',
    id:2
});
