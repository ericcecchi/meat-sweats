import axios from 'axios';
import moment from 'moment';

export function getLocations(address, near_me=false) {
    let query_params = "?";
    if (address) {
        query_params += "address=" + encodeURIComponent(address) + "&";
    } else if (near_me) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lng = position.coords.latitude;
        });
        query_params += "lat=" + encodeURIComponent(lat) + "&";
        query_params += "lng=" + encodeURIComponent(lng) + "&";
    }
    query_params += "current_time=" + moment().format();
    console.log(query_params);


    return new Promise((resolve) => {
        // axios.get('https://base_url:base_port/locations'+query_params)
        axios.get('/fixtures/locations.json')
            .then((response) => {
                resolve(response.data);
            });
    });
}
