import React from 'react';

import {Button, Text, View, StatusBar} from 'react-native';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import {ListStyles, Mode} from './ListStyles';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: this.props.route.params.dark ? Mode.dark : Mode.light,
    };
    changeNavigationBarColor('transparent', this.state.mode === Mode.dark ? false : true);
  }

  render () {
    const navigation = this.props.navigation;

    return (
      <View style={ListStyles(this.state.mode).view}>
        <StatusBar
          animated={true}
          backgroundColor={"rgba(0,0,0,0)"}
          barStyle={this.state.mode === Mode.dark ? 'light-content' : 'dark-content'}
          showHideTransition={'slide'}
          hidden={false}
          translucent={true} />
        <Button title="Go to Options" onPress={() => navigation.navigate('Options')} />
        <Button
          title="Go to CharacterSheet"
          onPress={() => navigation.navigate('CharacterSheet', {
            mode: this.state.mode,
          })}
        />
      </View>
    );
  };
};

export default List;