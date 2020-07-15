import axios from 'axios';
import store from '../store';
import { LOGOUT, CLEAR_DASHBOARD } from '../redux/types';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
      store.dispatch({ type: CLEAR_DASHBOARD });
    }
    return Promise.reject(err);
  }
);

export default api;
