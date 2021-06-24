import {StyleSheet} from 'react-native';

const ListStylesLight = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
});

const ListStylesDark = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#263240',
  },
});

const ListStyles = (mode) => {
    if (mode === Mode.dark) {
        return ListStylesDark;
    } else {
        return ListStylesLight;
    }
};

const Mode = {
    dark: 'dark',
    light: 'light',
};

export {ListStyles, Mode};
