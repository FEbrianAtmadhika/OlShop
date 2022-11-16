import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
    borderRadius: 20,
  },
  header: {
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
    position: 'relative',
  },
  searchti: {
    height: 35,
    width: '75%',
    marginLeft: 15,
  },
  iconsearch: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: '25%',
  },
  filterbut: {
    marginLeft: 7,
    backgroundColor: 'white',
    height: 35,
    width: 70,
    borderRadius: 5,
  },
  filterbuttxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
  },
  subheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 35,
    paddingHorizontal: 15,
    alignItems: 'flex-end',
    marginTop: 25,
  },
  sortby: {
    flexDirection: 'row',
    backgroundColor: '#304B3B',
    height: '100%',
    width: 150,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  sorttxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 14,
    fontWeight: '400',
    color: 'white',
  },
  iconsort: {
    color: 'white',
    height: 10,
    width: 10,
  },
  card: {
    alignSelf: 'center',
    marginTop: 20,
  },
});
