import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
// import {FilterState} from '../filterComponent/filterReducer';
import BooksAll from './BooksAll';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import NavigationScreen from '../navigation/NavigationScreen';
import ShoppingCart from './ShoppingCart';
import Notifications from '../notifications/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen: React.FC = () => {
  //const value = route.params?.filterParams;
  const dispatch = useDispatch();
  const nav = useNavigation();
  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="account"
          style={{marginRight: 20}}
          size={26}
          onPress={() => nav.navigate('AccountUser')}
        />
      ),
    });
  });

  // const [filterState, filterDispatch] = useReducer(
  //   filterReducer,
  //   value as FilterState,
  //   getInitialFilterState,
  // );
  dispatch(allBooks({page: 1, pageSize: 8}));

  useEffect(() => {
    dispatch(allBooks({page: 1, pageSize: 8}));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Book All"
      activeColor="#e91e63"
      style={{backgroundColor: 'tomato'}}>
      <Tab.Screen name="Navigation" component={NavigationScreen} />
      <Tab.Screen
        name="Book All"
        component={BooksAll}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarLabel: 'Updates',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeScreen;
