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
import {Alert, Button} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/store';
import Book from './src/components/home/Book';
import AccountUser from './src/components/accountUser/AccountUser';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          // options={({navigation, route}: any) => ({
          //   headerTitle: (props: any) => <LogoTitle {...props} />,
          // })}
          screenOptions={{
            headerStyle: {
              backgroundColor: '#0f0d0d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerRight: () => (
              <Button
                onPress={() => Alert.alert('This is a button!')}
                title="Info"
                color="#fff"
              />
            ),
          }}>
          <Stack.Screen name="AccountUser" component={AccountUser} />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'Home page',
              // headerStyle: {
              //   backgroundColor: '#f4511e',
              // },
            }}
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
