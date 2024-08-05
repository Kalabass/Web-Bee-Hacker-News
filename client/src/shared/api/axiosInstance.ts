import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5252/',
});

export default instance;
