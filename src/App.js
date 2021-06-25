import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import List from './pages/List/List';

import CharacterSheet from './pages/CharacterSheet/CharacterSheet';

import Options from './Options';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CharacterSheet"
          component={CharacterSheet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
