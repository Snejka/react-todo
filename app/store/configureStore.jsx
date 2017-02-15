import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {nameReducer, hobbyReducer, movieReducer, mapReducer} from './../reducers/index';

export const configure = () => {

	const reducer = combineReducers({
	    name: nameReducer,
	    hobbies: hobbyReducer,
	    movies: movieReducer,
	    map: mapReducer
	})

	const store = createStore(reducer, compose(
		applyMiddleware(thunk),
	    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	);

	return store;
};
