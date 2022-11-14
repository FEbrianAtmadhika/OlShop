import {Dimensions, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
export default StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#FDDE67',
  },
  shop: {
    fontFamily: 'HennyPenny-Regular',
    fontSize: 64,
    fontWeight: '400',
    alignSelf: 'center',
    marginTop: 35,
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
    height: 40,
  },
  statusbar: {
    backgroundColor: '#FDDE67',
  },
});
