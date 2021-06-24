import 'react-native-gesture-handler';

import React, {useState} from 'react';

import {useDarkMode} from 'react-native-dynamic'

import {Switch, View} from 'react-native';

const Options = () => {
  //const[dark, setDark] = useState(useDarkMode());
  const[dark, setDark] = useState(false);

  const toggleSwitch = val => {
    global.dark = val;
  };

  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Switch
            onValueChange={toggleSwitch}
            value={global.dark}
        />
    </View>
  );
};

export default Options;
