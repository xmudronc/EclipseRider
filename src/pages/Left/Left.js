import React from 'react';

import {View} from 'react-native';

import LeftStyles from './LeftStyles';

const Left = () => {
  return (
    <View style={LeftStyles.view}>
      <View style={LeftStyles.inside}></View>
    </View>
  );
};

export default Left;
