import React from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {Switch, View, BackHandler} from 'react-native';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: this.props.route.params.mode === 'dark',
    };
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.navigate('List', {
        refresh: true,
        mode: this.state.toggle ? 'dark' : 'light',
      });
      return true;
    });
  }

  getDark() {
    return this.state.toggle;
  }

  storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.error(e);
    }
  }

  render () {
    return (
      <View style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Switch
              onValueChange={val => {
                this.setState({toggle: val});
                this.storeData('dark',  val ? 'dark' : 'light');
              }}
              value={this.state.toggle}
          />
      </View>
    );
  }
};

export default Options;
