import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {StyleSheet} from 'react-native';
import {logOut} from '../../store/userStore/actionCreatedUser';
import {UserData} from '../../models/User/userData';
import {getFocusedRouteNameFromRoute, Route} from '@react-navigation/native';

interface IAccountButton {
  route: Route<'AccountUser', object | undefined>;
  user: UserData | null;
}

const AccountButton: React.FC<IAccountButton> = ({route, user}) => {
  const dispatch = useDispatch();
  const routeName = user
    ? getFocusedRouteNameFromRoute(route) ?? 'Profile'
    : undefined;
  const onLogOut = () => {
    const onAsyncStorage = async () => {
      await AsyncStorage.multiRemove(['token', 'refreshToken']);
    };
    onAsyncStorage();
    dispatch(logOut());
  };

  const content = (
    <TouchableOpacity onPress={() => onLogOut()}>
      <MaterialCommunityIcons
        name="account-minus"
        style={styles.materialIcons}
        size={26}
      />
    </TouchableOpacity>
  );

  const button = () => {
    switch (routeName) {
      case 'Profile':
        return content;
      case 'ChangePassword':
        return content;
      default:
        return undefined;
    }
  };

  return <>{button()}</>;
};

export default AccountButton;

const styles = StyleSheet.create({
  materialIcons: {marginRight: 20, color: '#606061'},
});
