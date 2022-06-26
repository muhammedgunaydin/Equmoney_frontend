import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {removeData} from '../../context/calcuSlice';
import axios from 'axios';
import styles from './PayingCalculation.style';

const PayingCalculation = ({navigation, route}) => {
  const dispatch = useDispatch();
  const expens = useSelector(state => state.expCalcu.expens);
  const {indexNumber} = route?.params;
  
  const deleteButton = async id => {
    try {
      const res = await axios.delete(`http://192.168.1.31:8000/payments/${id}`);
      navigation.navigate('ExpenseCalculationScreen');
      dispatch(removeData(expens[indexNumber].uniq));
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleExpenseCalculationDirect = () => {
    navigation.navigate('ExpenseCalculationScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/paycalcu.png')}
      />
      <View style={styles.inputa}>
        <Text style={styles.title}>Ödeme:{expens[indexNumber].name}</Text>
        <View style={styles.middle_container}>
          <View style={styles.pay_container}>
            <Text style={styles.sub_title}>Ücret:</Text>
            <Text style={styles.sub_title}> {expens[indexNumber].amount}</Text>
          </View>
        </View>
        <View style={styles.pay_container}></View>
        <View style={styles.picker_container}></View>
      </View>
      <View style={styles.twobutton_container}>
        <TouchableOpacity
          style={styles.del_button}
          onPress={() => deleteButton(expens[indexNumber].uniq)}>
          <Text style={styles.button_text}>Sil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ok_button}
          onPress={handleExpenseCalculationDirect}>
          <Text style={styles.button_text}>Bitti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayingCalculation;
