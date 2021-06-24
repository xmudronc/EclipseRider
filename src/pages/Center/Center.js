import React, {createRef} from 'react';

import {View, Text, TouchableOpacity, Animated} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {CenterStyles, Mode} from './CenterStyles';

class Center extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollRef: createRef(),
      scale: new Animated.Value(0),
      mode: this.props.mode,
    };
  }

  scrollToTop() {
    this.state.scrollRef.current.scrollTo({
        y: 0,
        animated: true,
    });
  }

  render() {
    const scale = this.state.scale.interpolate({
      inputRange: [1, 70],
      outputRange: [1, 0.87],
      extrapolate: 'clamp',
    });

    const offsetRight = this.state.scale.interpolate({
      inputRange: [1, 70],
      outputRange: [1, 20],
      extrapolate: 'clamp',
    });

    const offsetLeft = this.state.scale.interpolate({
      inputRange: [1, 70],
      outputRange: [1, -20],
      extrapolate: 'clamp',
    });

    const header = this.props.header;

    return (
      <View
        style={CenterStyles(this.state.mode).view}>
        <Animated.View style={{
          transform: [
            {
              scaleX: scale,
            }
          ],
          position: 'absolute',
          right: '5%',
          left: 90,
          top: 50,
          height: 50,
          backgroundColor: this.state.mode === Mode.dark ? '#263240' : 'white',
          borderRadius: 5,
          zIndex: 0,
          elevation: 4,
        }}></Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: offsetLeft,
              }
            ],
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            position: 'absolute',
            top: 50,
            left: 130,
            right: '5%',
            height: 50,
            zIndex: 2,
            elevation: 4,
          }}
          pointerEvents="none">
          <Text style={{fontSize: 20, color: this.state.mode === Mode.dark ? 'white' : 'black',}} numberOfLines={1}>{header}</Text>
        </Animated.View>
        <Animated.View
          style={{
            transform: [
              {
                translateX: offsetRight,
              }
            ],
            position: 'absolute',
            backgroundColor: this.state.mode === Mode.dark ? '#263240' : 'white',
            borderRadius: 5,
            top: 50,
            left: '5%',
            height: 50,
            width: 50,
            zIndex: 1,
            elevation: 4,
          }}>
          <TouchableOpacity style={CenterStyles(this.state.mode).goBack}
            onPress={() => this.props.navigation.goBack()}>
            <Text style={CenterStyles(this.state.mode).icon}>
              <Icon name="arrow-left" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <View style={CenterStyles(this.state.mode).goBackBgr}></View>
        <Animated.ScrollView
          ref={this.state.scrollRef}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: this.state.scale}}}],
            {useNativeDriver: true}
          )}>
          <View style={CenterStyles(this.state.mode).container}>
            <View style={CenterStyles(this.state.mode).inside}></View>
            <TouchableOpacity
              style={CenterStyles(this.state.mode).toTop}
              onPress={() => this.scrollToTop()}>
              <Text style={CenterStyles(this.state.mode).icon}>
                <Icon name="chevron-up" size={30} color={this.state.mode === Mode.dark ? 'white' : 'black'} />
              </Text>
            </TouchableOpacity>
            <View style={CenterStyles(this.state.mode).toTopBgr}></View>
          </View>
        </Animated.ScrollView>
      </View>
    );
  }
}

export default Center;
