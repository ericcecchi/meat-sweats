import axios from 'axios';
import moment from 'moment';

function getLocations(address, near_me=false) {
    return new Promise((resolve) => {
        const apiUrl = 'http://ec2-54-218-0-220.us-west-2.compute.amazonaws.com:3000/locations.json';

        if (address) {
            const query_params = `?address=${encodeURIComponent(address)}&current_time=${moment().format()}`;
            axios.get(apiUrl + query_params)
                .then((response) => {
                    resolve(response.data);
                });
        } else if (near_me) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = String(position.coords.latitude);
                const lng = String(position.coords.longitude);
                const query_params = `?lat=${encodeURIComponent(lat)}&lng=${encodeURIComponent(lng)}&current_time=${moment().format()}`;

                axios.get(apiUrl + query_params)
                    .then((response) => {
                        resolve(response.data);
                    });
            });
        }
    });
}

export default {
    getLocations
};
