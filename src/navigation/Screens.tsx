import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Home, Sheet, Inventory, Roll} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: t('navigation.home')}}
      />

      <Stack.Screen
        name="Sheet"
        component={Sheet}
        options={screenOptions.sheet}
      />

      <Stack.Screen
        name="Inventory"
        component={Inventory}
        options={screenOptions.inventory}
      />

      <Stack.Screen
        name="Roll"
        component={Roll}
        options={screenOptions.roll}
      />
    </Stack.Navigator>
  );
};
