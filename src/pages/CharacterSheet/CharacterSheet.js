import React from 'react';

import {View, Animated, Easing, Text, TouchableOpacity, Dimensions} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import changeNavigationBarColor from 'react-native-navigation-bar-color';

import CharacterSheetStyles from './CharacterSheetStyles';

import Left from '../Left/Left';
import Right from '../Right/Right';
import Center from '../Center/Center';

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPosition: new Animated.Value(0),
      rightPosition: new Animated.Value(0),
    };
    changeNavigationBarColor('transparent', true);
  }

  getDimensions() {
    return {
      x: Dimensions.get('window').width,
      y: Dimensions.get('window').height,
    };
  }

  maximizeLeft() {
    Animated.spring(this.state.leftPosition, {
      toValue: this.getDimensions().x,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    Animated.spring(this.state.rightPosition, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  minimizeLeft() {
    Animated.spring(this.state.leftPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    Animated.spring(this.state.rightPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  maximizeRight() {
    Animated.spring(this.state.rightPosition, {
      toValue: -this.getDimensions().x,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    Animated.spring(this.state.leftPosition, {
      toValue: -100,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  minimizeRight() {
    Animated.spring(this.state.rightPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    Animated.spring(this.state.leftPosition, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
  }

  render() {
    return (
      <View style={CharacterSheetStyles.view}>
        <Center></Center>
        <Animated.View style={{
          transform: [
            {
              translateX: this.state.leftPosition
            }
          ],
          width: '110%',
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '-98%',
        }}>
          <TouchableOpacity 
            style={CharacterSheetStyles.leftOverhang}
            onPress={() => this.maximizeLeft()}>
            <Text>
              <Icon name="bag-personal-outline" size={30} color={"#000000"} />
            </Text>
          </TouchableOpacity >
          <TouchableOpacity 
            style={CharacterSheetStyles.leftClose}
            onPress={() => this.minimizeLeft()}>
            <Text style={CharacterSheetStyles.icon}>
              <Icon name="arrow-collapse-left" size={30} color={"#000000"} />
            </Text>
          </TouchableOpacity >
          <Animated.View style={CharacterSheetStyles.leftHeader}>
            <Text style={{fontSize: 20}}>Inventory</Text>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles.leftContent}>
            <Left></Left>
          </Animated.View>
        </Animated.View>
        <Animated.View style={{
          transform: [
            {
              translateX: this.state.rightPosition
            }
          ],
          width: '110%',
          height: '100%',
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: '-98%',
        }}>
          <TouchableOpacity 
            style={CharacterSheetStyles.rightOverhang}
            onPress={() => this.maximizeRight()}>
            <Text>
              <Icon name="dice-5-outline" size={30} color={"#000000"} />
            </Text>
          </TouchableOpacity >
          <TouchableOpacity 
            style={CharacterSheetStyles.rightClose}
            onPress={() => this.minimizeRight()}>
            <Text style={CharacterSheetStyles.icon}>
              <Icon name="arrow-collapse-right" size={30} color={"#000000"} />
            </Text>
          </TouchableOpacity >
          <Animated.View style={CharacterSheetStyles.rightHeader}>
            <Text style={{fontSize: 20}}>Roll Dice</Text>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles.rightContent}>
            <Right></Right>
          </Animated.View>
        </Animated.View>
      </View>
    );
  }
}

export default CharacterSheet;
