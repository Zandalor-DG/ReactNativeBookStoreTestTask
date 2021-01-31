// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import {useDispatch} from 'react-redux';
// import {logOut} from '../../store/userStore/actionCreatedUser';

const ProfileScreen: React.FC = () => {
  const nav = useNavigation();
  // const dispatch = useDispatch();
  // const onLogOut = () => {
  //   AsyncStorage.multiRemove(['token', 'refreshToken']);
  //   AsyncStorage.removeItem('token');
  //   AsyncStorage.removeItem('refreshToken');
  //   dispatch(logOut());
  // };

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="account-minus"
          style={styles.materialIcons}
          size={26}
          onPress={() => nav.navigate('')}
        />
      ),
    });
  });

  return (
    <View>
      <Text>Profile Page</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  materialIcons: {marginRight: 20, color: '#606061'},
});
