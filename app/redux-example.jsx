const redux = require('redux');
const axios = require('axios');

console.log('Starting redux Example');

let hobbyID = 1;
let movieID =1;

//Name Reducer and Action Generators
//-------------------------------------
const nameReducer = (state = 'Anonimus', action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

//Hobby Reducer and Action Generators
//-------------------------------------
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

const addHobby = (hobby) => {
    return {
    type: 'ADD_HOBBY',
    hobby
    }
}

const removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}

//Movie Reducer and Action Generators
//-------------------------------------
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

const addMovie = (title, genre) => {
    return{
        type: 'ADD_MOVIE',
        title,
        genre
    }
}

const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}

//Map Reducer
//-------------------------------------
const mapReducer = (state = { isFatching: false, url: undefined }, action) => {
    switch (action.type){
        case 'START_LOCATION_FETCH':
            return{
                isFetching: true,
                url: undefined
            };
        case 'COMPLETE_LOCATION_FETCH':
            return {
                isFetching: false,
                url: action.url
            };
        default:
            return state;
    }
}

const startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH',
    }
}

const comleteLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}

const fetchLocation = () => {
    store.dispatch(startLocationFetch());

    axios.get('http://ipinfo.io').then(function (res) {
        let loc = res.data.loc;
        let url = 'https://maps.google.com?q=';

        store.dispatch(comleteLocationFetch(url + loc));
    });
};

//Combine Reducer into one Store Object
//-------------------------------------
const reducer = redux.combineReducers({
    name: nameReducer,
    hobbies: hobbyReducer,
    movies: movieReducer,
    map: mapReducer
})

const store = redux.createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Subscribe to changes
//-------------------------------------
var unsubscribe = store.subscribe(() => {
    let state = store.getState();
    console.log ('Current State', state);

    if(state.map.isFetching){
        document.getElementById('app').innerHTML = 'Loading...';
    } else if (state.map.url){
        document.getElementById('app').innerHTML = '<a href="'+ state.map.url +'" target="_blank">View your location</a>'
    }

});


//Action dispatchers
//-------------------------------------
fetchLocation();

store.dispatch(changeName('Snezhana'));

store.dispatch(changeName('Jane'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Swimming'));

store.dispatch(removeHobby(1));

store.dispatch(addMovie('Star Wars', 'Fantasy'));

store.dispatch(addMovie('Fyull House', 'Comedy'));

store.dispatch(removeMovie(2));
