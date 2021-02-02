import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import SignIn from './SignIn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from './SignUp';
import {useSelector} from 'react-redux';
import {StateReduxType} from '../../store/reducers';
import ProfileScreen from './ProfileScreen';
import ChangePassword from './ChangePassword';

const Tab = createMaterialBottomTabNavigator();

const AccountUser: React.FC = () => {
  const isInitialized = useSelector(
    (state: StateReduxType) => state.userState.user,
  );

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
      <Tab.Navigator initialRouteName="Profile" shifting activeColor="white">
        <ProfileScreen />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: '#153e8a',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            tabBarLabel: 'ChangePassword',
            tabBarColor: '#96434e',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );

  return <React.Fragment>{isAuthorize}</React.Fragment>;
};

export default AccountUser;
