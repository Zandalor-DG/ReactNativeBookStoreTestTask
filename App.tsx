/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FilterScreen from './src/components/filterScreen/FilterScreen';
import AccountUser from './src/components/accountUser/AccountUser';
import {
  setAccountScreenHeaderColor,
  setAccountScreenHeaderTitle,
} from './src/utils/setAccountScreen';
import HomeContainer from './src/components/home/HomeContainer';
import {
  setHomeScreenHeaderColor,
  setHomeScreenHeaderTitle,
} from './src/utils/setHomeScreen';
import Book from './src/components/books/Book';
import {StateReduxType} from './src/store/reducers';
import {useSelector} from 'react-redux';
import AccountButton from './src/components/accountUser/AccountButton';
import {Alert, BackHandler} from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const user = useSelector((state: StateReduxType) => state.userState.user);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0f0d0d',
        },
        headerTintColor: '#606061',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Filter" component={FilterScreen} />
      <Stack.Screen
        name="AccountUser"
        component={AccountUser}
        options={({route}) => ({
          headerTitle: setAccountScreenHeaderTitle(route, user),
          headerStyle: {
            backgroundColor: setAccountScreenHeaderColor(route, user),
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => <AccountButton user={user} route={route} />,
        })}
      />
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={({route}) => ({
          headerTitle: setHomeScreenHeaderTitle(route),
          headerStyle: {
            backgroundColor: setHomeScreenHeaderColor(route),
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
      <Stack.Screen
        name="Book"
        component={Book}
        options={{
          title: 'Book',
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
