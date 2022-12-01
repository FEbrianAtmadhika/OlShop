import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#304B3B',
    paddingHorizontal: 45,
    borderRadius: 20,
  },
  iconpass: {
    width: 20,
    height: 20,
    right: '5%',
    alignSelf: 'flex-end',
    bottom: 30,
    position: 'absolute',
  },
  icondate: {
    width: 20,
    height: 20,
    right: '5%',
    alignSelf: 'flex-end',
    position: 'absolute',
    bottom: 30,
  },
  checkboxcontainer: {
    flex: 1.5,
    flexDirection: 'row',
    marginTop: 0,
    marginLeft: 20,
    justifyContent: 'flex-start',
  },
  checkbox: {
    alignSelf: 'flex-start',
  },
  content: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  button: {
    height: 40,
    width: '90%',
    marginTop: 20,
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
});
