import axios from 'axios';

export function getLocations(address) {
    if (address) {
        console.log(address);
    } else {
        console.log("NO ADDRESS");
    }
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    } else {
        /* geolocation IS NOT available */
        console.log("geolocation is not available in this browser");
    }


    return new Promise((resolve) => {
        axios.get('/fixtures/locations.json')
            .then((response) => {
                resolve(response.data);
            });
    });
}
