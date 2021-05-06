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

let searchPlace = (place, location) => {
    return fetch(address + '/search/${place}/${location}')
    .then(response => response.json());
}

let reviewPlace = (reivew, place) => {
    return fetch(address + '/review/${place}', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(review)
    });
}


let api = {
    getPlaces: getPlaces,
    addPlace: addPlace,
    searchPlace: searchPlace,
    reviewPlace: reviewPlace
};

export default api;