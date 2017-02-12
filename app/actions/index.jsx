const axios = require('axios');
//Name Actions
//-------------------------------------
export const changeName = (name) => {
    return {
        type: 'CHANGE_NAME',
        name
    }
};

//Hobby Actions
//-------------------------------------
export const addHobby = (hobby) => {
    return {
    type: 'ADD_HOBBY',
    hobby
    }
}

export const removeHobby = (id) => {
    return {
        type: 'REMOVE_HOBBY',
        id
    }
}

//Movie Actions
//-------------------------------------
export const addMovie = (title, genre) => {
    return{
        type: 'ADD_MOVIE',
        title,
        genre
    }
}

export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        id
    }
}

//Location Actions
//-------------------------------------
export const startLocationFetch = () => {
    return {
        type: 'START_LOCATION_FETCH',
    }
}

export const comleteLocationFetch = (url) => {
    return {
        type: 'COMPLETE_LOCATION_FETCH',
        url
    }
}

export const fetchLocation = () => {
    return (dispatch, getState) => {
        dispatch(startLocationFetch());

        axios.get('http://ipinfo.io').then(function (res) {
            let loc = res.data.loc;
            let url = 'https://maps.google.com?q=';

        dispatch(comleteLocationFetch(url + loc));
        });
    }
};
