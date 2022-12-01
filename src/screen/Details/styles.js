import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#E9E9E9',
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
    height: 80,
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
    alignContent: 'center',
  },
  shopicon: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  btnshop: {
    marginLeft: 7,
    backgroundColor: 'white',
    height: 27,
    width: '44%',
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  describe: {
    width: '100%',
    backgroundColor: '#FFF',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  descheader: {
    justifyContent: 'center',
    paddingVertical: 10,
  },
  desccontent: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  preordericon: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 4,
  },
  btnpreorder: {
    backgroundColor: 'white',
    position: 'absolute',
    width: '20%',
    justifyContent: 'flex-start',
    paddingLeft: 7,
    alignItems: 'center',
    right: 20,
    top: 5,
    height: 25,
    borderRadius: 5,
  },
  botnav: {
    flexDirection: 'row',
    height: '100%',
    width: '50%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconbot: {
    height: 25,
    width: 25,
  },
  row2: {
    flexDirection: 'row',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    backgroundColor: 'white',
    height: 50,
  },
  addtocart: {
    backgroundColor: '#304B3B',
    height: '100%',
    width: '50%',
    borderBottomRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rborder: {
    borderRightWidth: 0.5,
    paddingRight: 30,
  },
});