
//Name Reducer
//-------------------------------------
export const nameReducer = (state = 'Anonimus', action) => {
    switch(action.type){
        case 'CHANGE_NAME':
            return action.name;
        default:
            return state;
    }
}

//Hobby Reducer
//-------------------------------------
let hobbyID = 1;
export const hobbyReducer = (state = [], action) => {
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

//Movie Reducer
//-------------------------------------
let movieID =1;
export const movieReducer = (state = [], action) => {
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

//Map Reducer
//-------------------------------------
export const mapReducer = (state = { isFatching: false, url: undefined }, action) => {
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