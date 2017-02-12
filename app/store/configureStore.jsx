const redux = require('redux');
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
const {nameReducer, hobbyReducer, movieReducer, mapReducer} = require('./../reducers/index');

export const configure = () => {
	//Combine Reducer into one Store Object
	//-------------------------------------
	const reducer = redux.combineReducers({
	    name: nameReducer,
	    hobbies: hobbyReducer,
	    movies: movieReducer,
	    map: mapReducer
	})

	const store = redux.createStore(reducer, redux.compose(
		applyMiddleware(thunk),
	    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)		
	);

	return store;
};