import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {allBooks} from '../../store/bookStoreStore/thunkBookStore';
import {loginUserByToken} from '../../store/userStore/thunkUser';
// import {FilterState} from '../filterComponent/filterReducer';
import BooksAll from './BooksAll';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ShoppingCart from './ShoppingCart';
import Notifications from '../notifications/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {ScrollView, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Drawer, List, WhiteSpace} from '@ant-design/react-native';
import FilterComponent from '../filterScreen/FilterComponent';

const Tab = createMaterialBottomTabNavigator();

const HomeScreen: React.FC = () => {
  //const value = route.params?.filterParams;
  const dispatch = useDispatch();
  const nav = useNavigation();

  const onOpenChange = (isOpen: boolean) => {
    console.log('Drawer', isOpen.toString());
  };

  const sidebar = (
    <ScrollView style={[styles.container]}>
      <List>
        <FilterComponent />
      </List>
    </ScrollView>
  );

  useEffect(() => {
    let drawer: any;

    nav.setOptions({
      headerRight: () => (
        <View style={styles.wrapperHeaderRight}>
          <Drawer
            sidebar={sidebar}
            position="left"
            open={false}
            drawerRef={(el) => (drawer = el)}
            onOpenChange={onOpenChange}
            drawerBackgroundColor="#ccc">
            <View style={styles.wrapperButton}>
              <TouchableOpacity onPress={() => drawer && drawer.openDrawer()}>
                <MaterialCommunityIcons
                  name="filter"
                  style={styles.materialIcons}
                  size={26}
                />
              </TouchableOpacity>
              <WhiteSpace />
            </View>
          </Drawer>
          <TouchableOpacity onPress={() => nav.navigate('AccountUser')}>
            <MaterialCommunityIcons
              name="account"
              style={styles.materialIcons}
              size={26}
            />
          </TouchableOpacity>
        </View>
      ),
    });
    dispatch(loginUserByToken());
    dispatch(allBooks({page: 1, pageSize: 6}));
  }, [dispatch, nav, sidebar]);

  // const [filterState, filterDispatch] = useReducer(
  //   filterReducer,
  //   value as FilterState,
  //   getInitialFilterState,
  // );

  return (
    <Tab.Navigator initialRouteName="Book All" shifting activeColor="white">
      <Tab.Screen
        name="Home"
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
  materialIcons: {marginRight: 20, color: '#606061'},
  container: {
    flex: 1,
  },
  firstElement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wrapperButton: {flex: 1, marginTop: 114, padding: 8},
});
