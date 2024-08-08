import axios from "axios";

const token = 'BQCtZ4OcEo-mk12kxRf9r51R4V9nGBzb7zINI5Y_tF2XSYcDylJfO2jSR24U3scKvjH_-E63Psi47ExweltVT55Y303NS5wJTcZuf1k0ptGGIOt_bUw';

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