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
    marginTop: '10%',
  },
  header: {
    fontFamily: 'Roboto-Regular',
    fontSize: 36,
    fontWeight: '700',
    marginTop: 24,
    color: 'white',
    alignSelf: 'center',
  },
  subheader: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 21,
    color: 'white',
    marginBottom: 15,
    alignSelf: 'center',
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
  forgot: {
    fontFamily: 'Roboto-Regular',
    fontSize: 12,
    color: 'white',
    marginBottom: 15,
    alignSelf: 'flex-end',
    paddingRight: 50,
  },
  button: {
    height: 50,
    width: '80%',
    alignSelf: 'center',
  },
  signup: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 5,
    color: 'white',
    marginBottom: 15,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textStyle: {
    color: 'black',
  },
});
