import { combineReducers, createStore, compose } from 'redux';
import { searchTextReducer, todosReducer, showCompletedReducer } from 'reducers';

export const configure = () => {
    const reducer = combineReducers({
        searchText: searchTextReducer,
        showCompleted: showCompletedReducer,
        todos: todosReducer
    });

    const store = createStore(
        reducer,
        compose(
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    return store;
}
