let address = "https://reaganogrady-nearbyplaces-api.herokuapp.com/";

let getPlaces = () => {
    return fetch(address + './places')
    .then(response => response.json());
};

let addPlace = (place) => {
    return fetch(address + '/place', {
        method: 'post',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(place)
    });
}

let searchPlace = (place, street, city, state, postalcode) => {
    return fetch(address + `/search/${place}/${street}/${city}/${state}/${postalcode}`)
    .then(response => response.json());
}

let reviewPlace = (review, place) => {
    return fetch(address + `/review/${place}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
}

// Might not use
let login = (username, password) => {
    return fetch(address + `/login/${username}/${password}`)
    .then(response => response.json());
}

let api = {
    getPlaces: getPlaces,
    addPlace: addPlace,
    searchPlace: searchPlace,
    reviewPlace: reviewPlace
};

export default api;