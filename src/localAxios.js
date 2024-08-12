import axios from "axios";

const authUrl = 'https://accounts.spotify.com/api/token';
const clientId = '52dd07aefe5147f7bed88258d1ad7af7';
const clientSecret = '83115b146b204cf0ad23314e43f1ba2d';
const tokenOne = 'BQDRToCbGWAR5M9HuBBqAAe0lmhJEsR0XfnNRwenB9xOzrNaui7d7AdFkS59WQ12tUAREnuHbOl860b1tEMP3W6Z8NXNFZW_Z1Qzo2mcwnH1SFj8xpY'


const localAxios = axios.create({
    baseURL: 'https://api.spotify.com/v1/' 
});

const getToken = async () => {
    const response = await fetch(authUrl, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });

    const data = await response.json();
    return data.access_token;
};

setInterval(getToken, 180000);

const getTokenAccount = async () => {
    try {
        const token = await getToken();
        console.log('Token de acceso:', token);
        const tokenAccount = token;
        return tokenAccount;
    } catch (error) {
        console.error('Error obteniendo el token:', error);
    }
}
setTimeout(getTokenAccount, 1)

getTokenAccount().then(tokenAccount => {
    console.log('Token Account:', tokenAccount);
    localAxios.interceptors.request.use(
        config => {
            config.headers['Authorization'] = `Bearer ${tokenAccount}`;
            config.headers['Content-Type'] = 'application/json';
            return config;
        },
        error => {
            console.log(error)
            return Promise.reject(error);
        }
    );
});


// Request interceptors for API calls

/* localAxios.interceptors.request.use(
    config => {
        config.headers['Authorization'] = `Bearer ${tokenOne}`;
        config.headers['Content-Type'] = 'application/json';
        return config;
    },
    error => {
        console.log(error)
        return Promise.reject(error);
    }
); */

export default localAxios;