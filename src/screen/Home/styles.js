import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E9E9E9',
  },
  header: {
    height: 50,
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginTop: 15,
    alignItems: 'center',
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
  },
  news: {
    width: '100%',
    height: 180,
    backgroundColor: '#304B3B',
    marginTop: 15,
    padding: 15,
    position: 'relative',
  },
  button: {
    height: 25,
    width: 60,
    marginTop: 20,
    borderRadius: 5,
  },
  textbutton: {
    fontSize: 8,
  },
  bgnews: {
    height: 180,
    width: 150,
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '7%',
  },
  viewtimer: {
    paddingVertical: 24,
    flexDirection: 'row',
    marginLeft: 10,
  },
  timer: {
    color: 'black',
    backgroundColor: '#FDDE67',
    borderRadius: 5,
    fontSize: 20,
    height: 30,
    width: 30,
    textAlign: 'center',
  },
  navbutton: {
    height: 27,
    width: '23%',
    borderRadius: 10,
    marginHorizontal: 2,
  },
  navbut: {
    flexDirection: 'row',
    alignSelf: 'center',
    position: 'absolute',
    bottom: -15,
  },
  card: {
    justifyContent: 'center',
  },
});
