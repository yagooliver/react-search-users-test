import axios from 'axios';

const instance = axios.create({
  baseURL: `/`,
  timeout: 180000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept':  '*/*',
  },
});

export default instance;