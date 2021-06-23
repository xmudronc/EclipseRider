import {StyleSheet} from 'react-native';

const LeftStyles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    paddingLeft: '9%',
    paddingRight: '2%',
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

export default LeftStyles;
