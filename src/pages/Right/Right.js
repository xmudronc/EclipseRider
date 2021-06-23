import React from 'react';

import {View} from 'react-native';

import RightStyles from './RightStyles';

const Right = () => {
  return (
    <View style={RightStyles.view}>
      <View style={RightStyles.inside}></View>
    </View>
  );
};

export default Right;
