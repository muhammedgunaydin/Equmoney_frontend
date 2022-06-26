import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22222A',
  },
  title: {
    flex: 0.15,
    color: 'white',
    fontSize: 35,
    textAlign: 'center',
  },
  imagecontainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  description: {
    flex: 0.8,
    color: 'white',
    fontSize: 17,
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
  account_button: {
    backgroundColor: '#419D78',
    flex: 1 / 3,
    margin: 10,
    borderRadius: 5,
    padding: 15,
  },
  account_button2: {
    backgroundColor: '#419D78',
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  account_button3: {
    backgroundColor: 'grey',
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },
  account_button_text: {
    flex: 1 / 3,
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  account_button_text2: {
    color: 'white',
    textAlign: 'center',
    fontSize: 28,
  },
  account_button_text3: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
  },
  dialog_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
