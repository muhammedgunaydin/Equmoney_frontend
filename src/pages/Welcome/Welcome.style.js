import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#22222A',
    flex: 1,
  },
  svgcontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  title: {
    fontWeight: '400',
    color: 'white',
    fontSize: 32,
    textAlign: 'center',
  },
  descr: {
    fontWeight: '300',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    margin: 20,
  },
  button_text: {
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
  },
  welcome_button: {
    backgroundColor: '#419D78',
    marginRight: 25,
    marginLeft: 25,
    margin: 65,
    borderRadius: 5,
    padding: 13,
  },
});
