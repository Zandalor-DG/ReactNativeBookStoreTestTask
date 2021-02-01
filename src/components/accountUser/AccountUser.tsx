import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import SignIn from './SignIn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from './SignUp';
import {useSelector} from 'react-redux';
import {StateReduxType} from '../../store/reducers';
import ProfileScreen from './ProfileScreen';

const Tab = createMaterialBottomTabNavigator();

const AccountUser: React.FC = () => {
  const isInitialized = useSelector(
    (state: StateReduxType) => state.userState.user,
  );
  console.log(isInitialized);

  const isAuthorize = !isInitialized ? (
    <>
      <Tab.Navigator initialRouteName="SignIn" shifting activeColor="white">
        <Tab.Screen
          name="SignIn"
          component={SignIn}
          options={{
            tabBarLabel: 'Sign in',
            tabBarColor: '#3cc753',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-check"
                color={color}
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="SignUp"
          component={SignUp}
          options={{
            tabBarLabel: 'Sign up',
            tabBarColor: '#c5c73c',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="account-plus"
                color={color}
                size={26}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  ) : (
    <>
      <ProfileScreen />
    </>
  );

  return <React.Fragment>{isAuthorize}</React.Fragment>;
};

export default AccountUser;
