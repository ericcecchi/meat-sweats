import axios from 'axios';

export function getLocations() {
    return new Promise((resolve) => {
        axios.get('/fixtures/locations.json')
            .then((response) => {
                resolve(response.data);
            });
    });
}
