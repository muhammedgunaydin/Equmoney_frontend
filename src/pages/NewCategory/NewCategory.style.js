import {StyleSheet, Dimensions} from 'react-native';

const getWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    backgroundColor: '#22222A',
    flex: 1,
    paddingHorizontal: 20,
  },

  image: {
    margin: 20,
    padding: 25,
    flex: 0.5,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  title: {
    fontSize: 40,
    color: 'white',
    textAlign: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  sub_title: {
    fontSize: 26,
    color: 'white',
  },

  input_area_price: {
    backgroundColor: 'white',
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  input_area_name: {
    backgroundColor: 'white',
    paddingHorizontal: 19,
    borderRadius: 5,
  },

  input_area_date: {
    backgroundColor: 'white',
    paddingHorizontal: 22,
    borderRadius: 5,
  },

  del_button: {
    backgroundColor: 'red',
    borderRadius: 5,
    height: 55,
    width: getWidth / 3,
    alignItems: 'center',
  },

  ok_button: {
    backgroundColor: '#419D78',
    borderRadius: 5,
    height: 55,
    width: getWidth / 3,
    alignItems: 'center',
  },

  twobutton_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 0.23,
  },

  pay_container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 14,
  },

  button_text: {
    fontSize: 36,
    color: 'white',
  },
  inputa: {
    flex: 1.5,
  },
  picker_container: {
    color: 'white',
  },
  picker: {
    color: 'white',
    paddingHorizontal: 0,
  },

  picker_title: {
    fontSize: 26,
  },
});
