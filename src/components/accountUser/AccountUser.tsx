import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import SignIn from './SignIn';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SignUp from './SignUp';

const Tab = createMaterialBottomTabNavigator();

const AccountUser: React.FC = () => {
  return (
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
  );
};

export default AccountUser;
