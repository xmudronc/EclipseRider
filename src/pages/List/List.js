import React from 'react';

import {Button, View, StatusBar} from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {ListStyles, Mode} from './ListStyles';

import Options from '../../Options';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: Mode.light,
    }; 
    this.state.mode = this.getMode();
    changeNavigationBarColor('transparent', this.state.mode === Mode.dark ? false : true);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params) {
        if (this.props.route.params.refresh) {
          this.state.mode = this.getMode();
          this.forceUpdate();
          changeNavigationBarColor('transparent', this.state.mode === Mode.dark ? false : true);
        }
      }
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  getMode() {
    if (this.props.route.params) {
      if (this.props.route.params.mode != undefined) {
        return this.props.route.params.mode;
      } else {
        return this.getData('dark');
      }
    } else {
      return this.getData('dark');
    }
  }
  
  getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? value : Mode.light;
    } catch(e) {
      console.error(e);
      return Mode.light;
    }
  }

  render () {
    const navigation = this.props.navigation;
    const mode = this.state.mode;

    return (
      <View style={ListStyles(this.state.mode).view}>
        <StatusBar
          animated={true}
          backgroundColor={"rgba(0,0,0,0)"}
          barStyle={this.state.mode === Mode.dark ? 'light-content' : 'dark-content'}
          showHideTransition={'slide'}
          hidden={false}
          translucent={true} />
        <Button title="Go to Options" onPress={() => navigation.navigate('Options', {
            mode: mode,
          })} />
        <Button
          title="Go to CharacterSheet"
          onPress={() => navigation.navigate('CharacterSheet', {
            mode: mode,
          })}
        />
      </View>
    );
  };
};

export default List;