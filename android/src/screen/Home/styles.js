import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 35,
    backgroundColor: '#E9E9E9',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
  },
  textheader: {
    fontFamily: 'HennyPenny-Regular',
    fontSize: 30,
    fontWeight: '400',
    marginRight: 9,
  },
  search: {
    width: '75%',
    height: 35,
    alignContent: 'flex-end',
    position: 'relative',
  },
  iconsearch: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: 40,
    top: 20,
  },
  news: {
    width: '100%',
    height: 150,
    backgroundColor: '#304B3B',
    marginTop: 15,
    padding: 15,
  },
});
