import React from 'react';
import {BookInfo} from './BookInfo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import CommentsBook from './CommentsBook';

const Book: React.FC = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <>
      <Tab.Navigator initialRouteName="Book" shifting activeColor="white">
        <Tab.Screen
          name="Home"
          component={BookInfo}
          options={{
            tabBarLabel: 'Book info',
            tabBarColor: '#843cc7',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="book" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="ShoppingCart"
          component={CommentsBook}
          options={{
            tabBarLabel: 'Comments',
            tabBarBadge: 3,
            tabBarColor: '#4a3cc7',
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="comment" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Book;
