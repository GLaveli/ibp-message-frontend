import axios from 'axios';

export const api = axios.create({
 // baseURL: 'https://ibp-message.herokuapp.com/'
 baseURL: 'http://localhost:3333/'
});