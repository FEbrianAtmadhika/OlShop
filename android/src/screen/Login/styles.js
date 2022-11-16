import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#304B3B',
  },
  welcome: {
    width: 260,
    height: 176,
    alignSelf: 'center',
    marginTop: '5%',
  },
  tisty: {
    width: '80%',
    position: 'relative',
    alignSelf: 'center',
  },
  iconpass: {
    width: 20,
    height: 20,
    right: 60,
    alignSelf: 'flex-end',
    bottom: 30,
    position: 'absolute',
  },
  button: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  coulumb: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  textStyle: {
    color: 'black',
  },
  smallbut: {
    height: 52,
    width: 136,
    borderRadius: 10,
    marginHorizontal: 6,
    marginVertical: 5,
  },
  icon: {
    marginRight: 10,
  },
});
