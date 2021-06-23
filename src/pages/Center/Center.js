import React, {createRef} from 'react';

import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import CenterStyles from './CenterStyles';

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollRef: createRef(),
    };
  }

  scrollToTop = () => {
    this.state.scrollRef.current.scrollTo({
        y: 0,
        animated: true,
    });
  };

  render() {
    return (
      <ScrollView
        style={CenterStyles.view}
        ref={this.state.scrollRef}>
        <View style={CenterStyles.container}>
          <View style={CenterStyles.inside}></View>
          <TouchableOpacity
            style={CenterStyles.toTop}
            onPress={() => this.scrollToTop()}>
            <Text style={CenterStyles.icon}>
              <Icon name="chevron-up" size={30} color={"#000000"} />
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Center;
