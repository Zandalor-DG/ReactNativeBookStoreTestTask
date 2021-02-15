import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const baseURL = 'http://192.168.31.18:4000';
// export const baseURL = 'http://127.0.0.1:4000';

const instance = axios.create({
  baseURL,
  headers: {'Content-Type': 'application/json', 'x-access-token': ''},
});
export const asyncToken = async () => {
  try {
    return await AsyncStorage.getItem('token');
  } catch (err) {
    console.log(err.message);
  }
};

instance.interceptors.request.use(async (config) => {
  const token = await asyncToken();
  if (!token) {
    return config;
  }
  config.headers['x-access-token'] = token;
  return config;
});

export default instance;
