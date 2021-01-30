import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const baseURL = 'http://192.168.31.18:4000';

const instance = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json', 'x-access-token': ''},
});

instance.interceptors.request.use((config) => {
  const token = AsyncStorage.getItem('token');
  if (!token) {
    return config;
  }
  config.headers['x-access-token'] = token;
  return config;
});

export default instance;
