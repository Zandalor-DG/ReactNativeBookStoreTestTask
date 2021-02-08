import React, {useEffect} from 'react';
// import {FilterState} from '../filterComponent/filterReducer';
import HomeScreen from './HomeScreen';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import Notifications from '../notifications/Notifications';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tab = createMaterialBottomTabNavigator();

const HomeContainer: React.FC = () => {
  const nav = useNavigation();

  useEffect(() => {
    nav.setOptions({
      headerRight: () => (
        <View style={styles.wrapperHeaderRight}>
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
  }, [nav]);

  return (
    <>
      <Tab.Navigator initialRouteName="Book All" shifting activeColor="white">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
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
    </>
  );
};

export default HomeContainer;

const styles = StyleSheet.create({
  wrapperHeaderRight: {
    display: 'flex',
    flexDirection: 'row',
  },
  materialIcons: {marginRight: 20, color: '#606061'},
});
