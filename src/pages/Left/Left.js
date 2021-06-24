import React from 'react';

import {View} from 'react-native';

import {LeftStyles} from './LeftStyles';

class Left extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.mode,
    };
  }

  render () {
    return (
      <View style={LeftStyles(this.state.mode).view}>
        <View style={LeftStyles(this.state.mode).inside}></View>
      </View>
    );
  };
};

export default Left;
