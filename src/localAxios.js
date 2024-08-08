import axios from "axios";

const token = 'BQBfDbwzcVTBVNwO6NP-JT1SW9cvQl_a2gjuHxD_Pdz_1eigbeUYNr0OLfDO6FPzarrkcP9Y0RaylFkbkAFi4r1v86Iua3HC_xHjmu8eN7sYzKYrpn4';

/* const token = '1POdFZRZbvb...qqillRxMr2z'; */


const localAxios = axios.create({
    baseURL: 'https://api.spotify.com/v1/'
});

// Request interceptors for API calls
localAxios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default localAxios;