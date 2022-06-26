import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    display: 'flex',
  },
  inputArea: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    color: 'black',
    margin: 10,
    marginRight: 35,
    marginLeft: 35,
    fontWeight: '500',
    fontSize: 15,
  },
});
