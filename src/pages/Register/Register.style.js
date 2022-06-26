import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#22222A',
    flex: 1,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    resizeMode: 'center',
  },
  createText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '300',
    fontSize: 38,
    marginBottom: 20,
  },
  first_screen_button: {
    backgroundColor: 'white',
    borderRadius: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 30,
    margin: 5,
    marginRight: 40,
    marginLeft: 40,
  },
  login_button_text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 24,
    fontWeight: '400',
  },
  create_account: {
    backgroundColor: '#22222A',
    margin: 15,
    width: 177,
    padding: 2,
    alignSelf: 'center',
  },
  create_account_text: {
    fontSize: 16,
    color: 'white',
  },
});
