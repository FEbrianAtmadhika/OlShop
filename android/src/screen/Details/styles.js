import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  header: {
    height: 375,
    marginTop: 15,
    marginHorizontal: 20,
  },
  image: {
    width: '100%',
    height: 375,
    position: 'absolute',
    zIndex: -1,
    resizeMode: 'stretch',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  cart: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    position: 'relative',
    width: 100,
  },
  carticon: {
    position: 'absolute',
    zIndex: 1,
    left: 7,
  },
  cartbut: {
    width: '100%',
    height: '100%',
    paddingLeft: 15,
  },
  imgcount: {
    backgroundColor: 'white',
    width: 30,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '78%',
  },
  txt: {
    color: 'black',
  },
  up: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subheader: {
    flexDirection: 'column',
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#E9E9E9',
    height: 70,
  },
  subharga: {
    flexDirection: 'row',
    marginHorizontal: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  view: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  shopview: {
    width: '100%',
    height: 100,
    backgroundColor: '#304B3B',
    flexDirection: 'row',
    paddingHorizontal: 34,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shopicon: {
    width: 64,
    height: 64,
  },
  btnshop: {
    marginLeft: 7,
    backgroundColor: 'white',
    height: 27,
    width: '40%',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
});
