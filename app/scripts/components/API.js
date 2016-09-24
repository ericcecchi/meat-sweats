import axios from 'axios';
import moment from 'moment';

export function getLocations(address, near_me=false) {
    return new Promise((resolve) => {
        let query_params = "?";
        if (address) {
            query_params += "address=" + encodeURIComponent(address) + "&";
            query_params += "current_time=" + moment().format();
            axios.get('http://ec2-54-218-0-220.us-west-2.compute.amazonaws.com:3000/locations.json'+query_params)
            // axios.get('http://ec2-54-218-0-220.us-west-2.compute.amazonaws.com:3000/locations.json')
                .then((response) => {
                    resolve(response.data);
                });
        } else if (near_me) {
            let lat, lng;
            navigator.geolocation.getCurrentPosition((position) => {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                query_params += "lat=" + encodeURIComponent(lat) + "&";
                query_params += "lng=" + encodeURIComponent(lng) + "&";
                query_params += "current_time=" + encodeURIComponent(moment().format());
                axios.get('http://ec2-54-218-0-220.us-west-2.compute.amazonaws.com:3000/locations.json'+query_params)
                // axios.get('http://ec2-54-218-0-220.us-west-2.compute.amazonaws.com:3000/locations.json')
                    .then((response) => {
                        resolve(response.data);
                    });
            });
        }
    });
}
