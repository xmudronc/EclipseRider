import 'react-native-gesture-handler';

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {useDarkMode} from 'react-native-dynamic'

import List from './pages/List/List';

import CharacterSheet from './pages/CharacterSheet/CharacterSheet';

import Options from './Options';

const Stack = createStackNavigator();

const App = () => {
  const dark = useDarkMode();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
          initialParams={{dark: dark}}
        />
        <Stack.Screen
          name="CharacterSheet"
          component={CharacterSheet}
          options={{headerShown: false}}
          initialParams={{dark: dark}}
        />
        <Stack.Screen
          name="Options"
          component={Options}
          options={{headerShown: false}}
          initialParams={{dark: dark}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
