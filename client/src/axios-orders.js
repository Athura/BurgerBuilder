import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-f171d.firebaseio.com/'
});

export default instance;