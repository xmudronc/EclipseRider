import React from 'react';

import {View} from 'react-native';

import {RightStyles} from './RightStyles';

class Right extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
    };
  }

  render () {
    return (
      <View style={RightStyles(this.state.mode).view}>
        <View style={RightStyles(this.state.mode).inside}></View>
      </View>
    );
  };
};

export default Right;
