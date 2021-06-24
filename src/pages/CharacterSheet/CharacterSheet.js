import React, {useContext} from 'react';

import {View, Animated, Easing, Text, TouchableOpacity, Dimensions, BackHandler} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CharacterSheetStyles, Mode} from './CharacterSheetStyles';

import Left from '../Left/Left';
import Right from '../Right/Right';
import Center from '../Center/Center';

class CharacterSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftPosition: new Animated.Value(0),
      rightPosition: new Animated.Value(0),
      side: sides.none,
      mode: this.props.route.params.mode,
    };
    BackHandler.addEventListener("hardwareBackPress", () => {
      if (this.state.side === sides.none) {
        return false;
      } else {
        if (this.state.side === sides.left) {
          this.minimizeLeft();
        } else {
          this.minimizeRight();
        }
        return true;
      }
    });
  }

  getDimensions() {
    return {
      x: Dimensions.get('window').width,
      y: Dimensions.get('window').height,
    };
  }

  maximizeLeft() {
    this.state.side = sides.left;
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
    this.state.side = sides.none;
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
    this.state.side = sides.right;
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
    this.state.side = sides.none;
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
      <View style={CharacterSheetStyles(this.state.mode).view}>
        <Center
          navigation={this.props.navigation}
          header={'12345678910111213141516'}
          mode={this.state.mode}
        ></Center>
        <Animated.View
          style={{
            transform: [
              {
                translateX: this.state.leftPosition
              }
            ],
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '-98%',
            zIndex: 2,
          }}>
          <TouchableOpacity 
            style={CharacterSheetStyles(this.state.mode).leftClose}
            onPress={() => this.minimizeLeft()}>
            <Text style={CharacterSheetStyles(this.state.mode).icon}>
              <Icon name="arrow-collapse-left" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
            </Text>
          </TouchableOpacity>
          <Animated.View style={CharacterSheetStyles(this.state.mode).leftCloseBgr}></Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).leftHeader}>
            <Text style={{fontSize: 20, color: this.state.mode === Mode.dark ? 'white' : 'black',}}>Inventory</Text>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).leftContent}>
            <Left mode={this.state.mode}></Left>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).leftOverhang}></Animated.View>
        </Animated.View>
        <TouchableOpacity 
          style={{
            transform: [
              {
                translateX: this.state.leftPosition
              }
            ],
            padding: 10,
            position: 'absolute',
            bottom: 50,
            left: '2%',
            borderBottomRightRadius: 5,
            borderTopRightRadius: 5,
            zIndex: 2,
          }}
          onPress={() => this.maximizeLeft()}>
          <Text>
            <Icon name="bag-personal-outline" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
          </Text>
        </TouchableOpacity>
        <Animated.View
          style={{
            transform: [
              {
                translateX: this.state.rightPosition
              }
            ],
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: '-98%',
            zIndex: 2,
          }}>
          <TouchableOpacity 
            style={CharacterSheetStyles(this.state.mode).rightClose}
            onPress={() => this.minimizeRight()}>
            <Text style={CharacterSheetStyles(this.state.mode).icon}>
              <Icon name="arrow-collapse-right" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
            </Text>
          </TouchableOpacity>
          <Animated.View style={CharacterSheetStyles(this.state.mode).rightCloseBgr}></Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).rightHeader}>
            <Text style={{fontSize: 20, color: this.state.mode === Mode.dark ? 'white' : 'black',}}>Roll Dice</Text>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).rightContent}>
            <Right mode={this.state.mode}></Right>
          </Animated.View>
          <Animated.View style={CharacterSheetStyles(this.state.mode).rightOverhang}></Animated.View>
        </Animated.View>
        <TouchableOpacity 
          style={{
            transform: [
              {
                translateX: this.state.rightPosition
              }
            ],
            padding: 10,
            position: 'absolute',
            bottom: 50,
            right: '2%',
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            zIndex: 2,
          }}
          onPress={() => this.maximizeRight()}>
          <Text>
            <Icon name="dice-5-outline" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const sides = {
  left: 'left',
  right: 'right',
  none: 'none',
}

export default CharacterSheet;
