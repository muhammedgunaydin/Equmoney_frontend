import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#22222A',
    flex: 1,
    justifyContent: 'space-around',
  },
  titleBack: {
    color: 'white',
    margin: 10,
    marginHorizontal: 25,
    fontSize: 20,
  },
  titlePay: {
    color: 'white',
    margin: 10,
    marginHorizontal: 25,
    fontSize: 20,
  },
  backContainer: {
    backgroundColor: 'red',
    borderRadius: 5,
  },
  payContainer: {
    backgroundColor: 'green',
    borderRadius: 5,
  },
  image: {
    margin: 35,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 7,
    resizeMode: 'contain',
    position: 'relative',
  },
  price_container: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    margin: 10,
    alignSelf: 'baseline',
  },
  sub_text: {
    color: 'white',
    fontSize: 32,
    marginHorizontal: 15,
  },
  button_container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 25,
    alignItems: 'center',
  },
});
