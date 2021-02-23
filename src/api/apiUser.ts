import AsyncStorage from '@react-native-community/async-storage';
import {PropsSignIn} from '../components/accountUser/SignIn';
import {ISignUp} from '../components/accountUser/SignUp';
import {UserData} from '../models/User/userData';
import {PropsUpdateUserData} from '../store/userStore/thunkUser';
import axios from './axios';

type UserDataAndToken = {
  token: {accessToken: string; refreshToken: string};
  userData: UserData;
};
export type onChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export const postLoginUser = async (loginDataUser: PropsSignIn): Promise<UserData> => {
  const res = await axios.post('/account/signin', loginDataUser);
  const data: UserDataAndToken = res.data;
  await AsyncStorage.setItem('token', data.token.accessToken);
  await AsyncStorage.setItem('refreshToken', data.token.refreshToken);
  return data.userData;
};

export const postRegisterUser = async (registerDataUser: ISignUp): Promise<void> => {
  const res = await axios.post('/account/signup', registerDataUser);
  const data: UserDataAndToken = res.data;
  await AsyncStorage.setItem('token', data.token.accessToken);
  await AsyncStorage.setItem('refreshToken', data.token.refreshToken);
};

export const putProfilePage = async (user: PropsUpdateUserData): Promise<UserData> => {
  const res = await axios.put('/user/putuser', {user});
  const data: UserData = res.data;
  return data;
};

export const getLoginByToken = async (): Promise<UserData> => {
  const res = await axios.get('/account/signinbytoken');
  const data: UserDataAndToken = res.data;
  await AsyncStorage.setItem('token', data.token.accessToken);
  return data.userData;
};

export const putUploadAvatar = async (formData: FormData): Promise<string> => {
  const res = await axios.post('/user/uploadavatar', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const avatarUrl: string = res.data.avatar;
  return avatarUrl;
};

export const postChangePassword = async (
  {oldPassword, newPassword}: onChangePassword,
  user: UserData | null,
): Promise<UserData> => {
  const res = await axios.put('/user/putuser', {
    oldPassword,
    newPassword,
    user,
  });
  const data: UserData = res.data.userData;
  return data;
};
