console.log('Starting redux Example');

const actions = require('./actions/index');
const store = require('./store/configureStore').configure();
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
store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Snezhana'));

store.dispatch(actions.changeName('Jane'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Swimming'));

store.dispatch(actions.removeHobby(1));

store.dispatch(actions.addMovie('Star Wars', 'Fantasy'));

store.dispatch(actions.addMovie('Fyull House', 'Comedy'));

store.dispatch(actions.removeMovie(2));
