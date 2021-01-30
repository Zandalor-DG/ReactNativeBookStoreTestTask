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
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/components/home/HomeScreen';
import {Provider} from 'react-redux';
import store from './src/store';
import Book from './src/components/home/Book';
import AccountUser from './src/components/accountUser/AccountUser';
import FilterScreen from './src/components/navigation/FilterScreen';
import {
  setHomeScreenHeaderColor,
  setHomeScreenHeaderTitle,
} from './src/utils/setHomeScreen';
import {
  setAccountScreenHeaderColor,
  setAccountScreenHeaderTitle,
} from './src/utils/setAccountScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
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
              headerTitle: setAccountScreenHeaderTitle(route),
              headerStyle: {
                backgroundColor: setAccountScreenHeaderColor(route),
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            })}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
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
      </NavigationContainer>
    </Provider>
  );
};

export default App;
