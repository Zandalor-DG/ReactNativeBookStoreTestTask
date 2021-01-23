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
import NavigationScreen from './src/components/navigation/NavigationScreen';
import CreatePostScreen from './src/components/createPostScreen/createPostScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
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
          name="Navigation"
          component={NavigationScreen}
          options={{title: 'Navigation Page', headerTintColor: '#fff'}}
        />
        <Stack.Screen
          name="CreatePost"
          component={CreatePostScreen}
          options={{
            title: 'Create post',
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
