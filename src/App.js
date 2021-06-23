import 'react-native-gesture-handler';

import React from 'react';

import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './pages/Home';

import DetailsScreen from './pages/Details';

import Center from './pages/Center/Center';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        animated={true}
        backgroundColor={"rgba(0,0,0,0)"}
        barStyle={'dark-content'}
        showHideTransition={'slide'}
        hidden={false}
        translucent={true} />
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name="Center"
          component={Center}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
