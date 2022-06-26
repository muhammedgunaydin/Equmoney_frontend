import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import axios from 'axios';
import styles from './PayArea.styles';
import {pay} from '../../context/calcuSlice';

const PayArea = ({route, navigation}) => {
  const {indexNumber} = route?.params;
  const expens = useSelector(state => state.expCalcu.expens);
  const handleUniq = useSelector(state => state.expCalcu.expens[indexNumber].uniq);
  const info = useSelector(state => state.authFlow.userID);
  const dispatch = useDispatch();

  const asd = async id => {
    try {

      const response = await axios.patch(
        `http://192.168.1.31:8000/payments/${id}`,
        {paid: true},
      );
      const res = await axios.get(
        `http://192.168.1.31:8000/bank-account/${info}`,
      );
      const bakiye = res.data.balance[0].balance - response.data.payment.amount;
      const handlePatch = await axios.patch(
        `http://192.168.1.31:8000/bank-account/${info}`,
        {balance: bakiye},
      );

      dispatch(pay(indexNumber));
      navigation.navigate('FinishPayScreen');
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleBack = () => {
    navigation.navigate('FinishPayScreen');
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/paycalcu.png')}
      />
      <View>
        <View style={styles.price_container}>
          <Text style={styles.sub_text}>Ödeme:</Text>
          <Text style={styles.sub_text}>{expens[indexNumber].name}</Text>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.sub_text}>Ücret:</Text>
          <Text style={styles.sub_text}> {expens[indexNumber].amount} TL</Text>
        </View>
        <View style={styles.price_container}>
          <Text style={styles.sub_text}> Ödeme Tarihi:</Text>
          <Text style={styles.sub_text}> {expens[indexNumber].end_date}</Text>
        </View>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity onPress={handleBack}>
          <View style={styles.backContainer}>
            <Text style={styles.titleBack}>Geri</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={async () => await asd(handleUniq)}>
          <View style={styles.payContainer}>
            <Text style={styles.titlePay}>Öde</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PayArea;
