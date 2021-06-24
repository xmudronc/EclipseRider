import {StyleSheet} from 'react-native';

const CenterStylesLight = StyleSheet.create({
    view: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'column',
      zIndex: 1,
    },
    container: {
      height: 1000,
      width: '90%',
      margin: '5%',
      marginTop: 50,
      marginBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inside: {
      backgroundColor: 'white',
      position: 'absolute',
      top: 70,
      bottom: 70,
      right: 0,
      left: 0,
      borderRadius: 5,
      elevation: 2,
    },
    toTop: {
      position: 'absolute',
      bottom: 0,
      zIndex: 1,
      elevation: 2,
    },
    toTopBgr: {
      position: 'absolute',
      bottom: 0,
      width: 50,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 5,
      zIndex: 0,
      elevation: 2,
    },
    goBack: {
      position: 'absolute',
      top: 0,
      left: 0,
      elevation: 4,
    },
    icon: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
});

const CenterStylesDark = StyleSheet.create({
    view: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      overflow: 'hidden',
      flex: 1,
      flexDirection: 'column',
      zIndex: 1,
    },
    container: {
      height: 1000,
      width: '90%',
      margin: '5%',
      marginTop: 50,
      marginBottom: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inside: {
      backgroundColor: '#263240',
      position: 'absolute',
      top: 70,
      bottom: 70,
      right: 0,
      left: 0,
      borderRadius: 5,
      elevation: 2,
    },
    toTop: {
      position: 'absolute',
      bottom: 0,
      zIndex: 1,
      elevation: 2,
    },
    toTopBgr: {
      position: 'absolute',
      bottom: 0,
      width: 50,
      height: 50,
      backgroundColor: '#263240',
      borderRadius: 5,
      zIndex: 0,
      elevation: 2,
    },
    goBack: {
      position: 'absolute',
      top: 0,
      left: 0,
      elevation: 4,
    },
    icon: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },
});

const CenterStyles = (mode) => {
    if (mode === Mode.dark) {
        return CenterStylesDark;
    } else {
        return CenterStylesLight;
    }
};

const Mode = {
    dark: 'dark',
    light: 'light',
};

export {CenterStyles, Mode};
