import {StyleSheet} from 'react-native';

const RightStylesLight = StyleSheet.create({
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

const RightStylesDark = StyleSheet.create({
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
    backgroundColor: '#263240',
  },
  inside: {
    width: '100%',
    height: '100%',
  },
});

const RightStyles = (mode) => {
    if (mode === Mode.dark) {
        return RightStylesDark;
    } else {
        return RightStylesLight;
    }
};

const Mode = {
    dark: 'dark',
    light: 'light',
};

export {RightStyles, Mode};
