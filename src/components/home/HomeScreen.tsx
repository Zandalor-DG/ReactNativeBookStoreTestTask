import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
// import {FilterState} from '../filterComponent/filterReducer';
import BooksAll from './BooksAll';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ShoppingCart from './ShoppingCart';
import Notifications from '../notifications/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen: React.FC = () => {
  //const value = route.params?.filterParams;
  const dispatch = useDispatch();
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <View style={styles.wrapperHeaderRight}>
          <MaterialCommunityIcons
            name="filter"
            style={{marginRight: 20, color: '#606061'}}
            size={26}
            onPress={() => nav.navigate('Filter')}
          />

          <MaterialCommunityIcons
            name="account"
            style={{marginRight: 20, color: '#606061'}}
            size={26}
            onPress={() => nav.navigate('AccountUser')}
          />
        </View>
      ),
    });

    dispatch(allBooks({page: 1, pageSize: 8}));
  });

  // const changeColorHeader =() => {
  //   nav.navigate('Home', {
  //     color: ,
  //   })
  // }

  // const [filterState, filterDispatch] = useReducer(
  //   filterReducer,
  //   value as FilterState,
  //   getInitialFilterState,
  // );

  return (
    <Tab.Navigator initialRouteName="Book All" shifting activeColor="white">
      {/* <Tab.Screen
        name="Filter"
        component={FilterScreen}
        options={{
          tabBarLabel: 'Filter',
          tabBarColor: '#c73c81',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="filter" color={color} size={26} />
          ),
        }}
      /> */}
      <Tab.Screen
        name="Book All"
        component={BooksAll}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#843cc7',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 3,
          tabBarColor: '#4a3cc7',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#34a5c2',
          tabBarBadge: 3,
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  wrapperHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
  },
});
