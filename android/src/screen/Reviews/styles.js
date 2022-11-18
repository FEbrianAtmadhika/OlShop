import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    backgroundColor: '#E9E9E9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
  },
  fontheader: {
    paddingLeft: 20,
  },
  subheader: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },
  status: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
  },
  row: {
    width: '100%',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginTop: 10,
  },
  btnall: {
    width: 50,
    backgroundColor: 'white',
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnstar: {
    width: '30%',
    backgroundColor: 'white',
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
  },
  starstyle: {
    height: 15,
    width: 15,
  },
  content: {},
});
