import {StyleSheet} from 'react-native';

const RightStyles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingLeft: '2%',
    paddingRight: '9%',
    paddingTop: 0,
    paddingBottom: 0,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  inside: {
    width: '100%',
    height: '100%',
  },
});

export default RightStyles;
