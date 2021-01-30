import {UserState} from '../models/userState';
import AsyncStorage from '@react-native-community/async-storage';

const getInitialState = (): UserState => {
  const token = AsyncStorage.getItem('token');
  if (!token) {
    return {
      user: null,
      isInitialize: true,
      isOpenModal: false,
    };
  }
  return {
    user: null,
    isInitialize: false,
    isOpenModal: false,
  };
};

export const userInitialState = getInitialState();
