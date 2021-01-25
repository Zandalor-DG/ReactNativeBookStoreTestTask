import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
import {FilterState} from '../filterComponent/filterReducer';
import BooksAll from './BooksAll';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import NavigationScreen from '../navigation/NavigationScreen';
import ShoppingCart from './ShoppingCart';
import Notifications from '../notifications/Notifications';

interface Props {
  route: {
    params?: {
      post: string;
      filterParams: FilterState;
    };
  };
  navigation: any;
}

const Tab = createBottomTabNavigator();

const HomeScreen: React.FC<Props> = ({route}: Props) => {
  //const value = route.params?.filterParams;
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (route.params?.post) {
    }
  }, [route.params]);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Navigation" component={NavigationScreen} />
      <Tab.Screen name="AllBooks" component={BooksAll} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
      <Tab.Screen name="Notifications" component={Notifications} />
    </Tab.Navigator>
  );
};

export default HomeScreen;
