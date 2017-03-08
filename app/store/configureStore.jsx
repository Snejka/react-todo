import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { searchTextReducer, todosReducer, showCompletedReducer } from 'reducers';
import thunk from 'redux-thunk'; //middelware

export const configure = (initialState ={}) => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    const store = createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}
