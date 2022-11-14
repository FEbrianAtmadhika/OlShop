import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  card: {
    width: 160,
    height: 250,
    marginHorizontal: 15,
    marginVertical: 5,
    alignSelf: 'center',
  },
  cardcontainer: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '84%',
    resizeMode: 'stretch',
    marginBottom: 9,
    borderRadius: 15,
  },
  desc: {
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
  name: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 14,
    fontWeight: '500',
    color: '#000000',
  },
  harga: {
    fontFamily: 'Roboto-Reguler',
    fontSize: 10,
    fontWeight: '500',
    color: '#000000',
  },
  icon: {
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#FFDE67',
    borderRadius: 5,
  },
  cart: {
    alignSelf: 'center',
  },
});
