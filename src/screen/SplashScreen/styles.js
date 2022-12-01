import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDDE67',
  },
  image: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    resizeMode: 'stretch',
    position: 'relative',
    zIndex: -1,
  },
  content: {
    flex: 1,
  },
  button: {
    backgroundColor: '#304B3B',
    alignSelf: 'center',
    width: '80%',
    position: 'absolute',
    top: '85%',
    height: 50,
  },
});
