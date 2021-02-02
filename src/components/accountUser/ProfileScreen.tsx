import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {logOut} from '../../store/userStore/actionCreatedUser';
import ChangeDataUser from './ChangeDataUser';

const ProfileScreen: React.FC = () => {
  const nav = useNavigation();
  const dispatch = useDispatch();
  const onLogOut = () => {
    const onAsyncStorage = async () => {
      await AsyncStorage.multiRemove(['token', 'refreshToken']);
      await AsyncStorage.removeItem('token');
      await AsyncStorage.removeItem('refreshToken');
    };
    onAsyncStorage();
    dispatch(logOut());
  };

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onLogOut}>
          <MaterialCommunityIcons
            name="account-minus"
            style={styles.materialIcons}
            size={26}
          />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ScrollView>
      <ChangeDataUser />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  materialIcons: {marginRight: 20, color: '#606061'},
});
