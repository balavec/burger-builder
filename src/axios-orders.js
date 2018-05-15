import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-35fc1.firebaseio.com/'
});

// instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export default instance;
