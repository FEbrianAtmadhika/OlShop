import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 150,
    width: '100%',
    paddingHorizontal: 20,
  },
  searchti: {
    height: 35,
    width: '90%',
    marginLeft: 15,
  },
  iconsearch: {
    width: 20,
    height: 20,
    position: 'absolute',
    right: '10%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnshop: {
    marginLeft: 7,
    backgroundColor: '#304B3B',
    height: 27,
    width: 100,
    borderRadius: 5,
  },
  infoshop: {
    justifyContent: 'space-between',
    alignContent: 'center',
    height: '80%',
  },
  rowinfoshop: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    height: 80,
  },
  iconshop: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  status: {
    height: 10,
    width: 10,
    borderRadius: 25,
  },
  starstyle: {
    height: 15,
    width: 15,
  },
  btnmenu: {
    backgroundColor: '#304B3B',
    width: '50%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: '#FDDE67',
    borderBottomWidth: 2,
  },
  card: {
    alignSelf: 'center',
    marginTop: 20,
  },
  headercontent: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'space-evenly',
    alignContent: 'flex-start',
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
  iconsort: {
    color: 'white',
    height: 10,
    width: 10,
  },
  content: {
    marginHorizontal: 10,
  },
  imageshop: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
});
