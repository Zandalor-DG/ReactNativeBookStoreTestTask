import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {logOut} from '../../store/userStore/actionCreatedUser';
import ChangeAvatarUser from './ChangeAvatarUser';
import ChangeDataUser from './ChangeDataUser';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const onLogOut = () => {
      const onAsyncStorage = async () => {
        await AsyncStorage.multiRemove(['token', 'refreshToken']);
      };
      onAsyncStorage();
      dispatch(logOut());
    };

    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => onLogOut()}>
          <MaterialCommunityIcons
            name="account-minus"
            style={styles.materialIcons}
            size={26}
          />
        </TouchableOpacity>
      ),
    });
  }, [dispatch, navigation]);

  return (
    <ScrollView>
      <ChangeAvatarUser />
      <ChangeDataUser />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  materialIcons: {marginRight: 20, color: 'tomato'},
});
