import {StyleSheet} from 'react-native';

const CenterStyles = StyleSheet.create({
  view: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'hidden',
    flex: 1,
    flexDirection: 'column',
  },
  container: {
    height: 1000,
    width: '90%',
    margin: '5%',
    marginTop: '15%',
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inside: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 50,
    right: 0,
    left: 0,
    borderRadius: 5,
    elevation: 5,
  },
  toTop: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    elevation: 5,
    backgroundColor: 'white',
  },
  icon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

export default CenterStyles;
