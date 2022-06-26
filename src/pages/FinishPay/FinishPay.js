import React, {useState, useEffect} from 'react';
import {View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ExpInput from '../../components/ExpInput';
import {useDispatch} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {outUser} from '../../context/authSlice';
import axios from 'axios';
import styles from './FinishPay.style';

const FinishPay = ({navigation}) => {
  const dispatch = useDispatch();

  const [response, setResponse] = useState({});
  const [responsebank, setResponseBank] = useState({});

  const expens = useSelector(state => state.expCalcu.expens);
  const info = useSelector(state => state.authFlow.userID);

  const logOut = () => {
    navigation.navigate('LoginScreen');
    dispatch(outUser());
  };

  const payedScreen = () => {
    navigation.navigate('PayedPaymentsScreen');
  };

  const editScreen = () => {
    navigation.navigate('ExpenseCalculationScreen');
  };

  const isFocused = useIsFocused();
  useEffect(() => {
    axios
      .get(`http://192.168.1.31:8000/bank-account/${info}`)
      .then(response => {
        setResponse(response.data);
      });

    axios
      .get(`http://192.168.1.31:8000/needcalculate/${info}`)
      .then(response => {
        setResponseBank(response.data);
      });
  }, [isFocused]);

  const isPayed = index => {
    navigation.navigate('PayAreaScreen', {indexNumber: index});
  };

  return (
    <View style={styles.container}>
      <View>
        {response == null ? (
          <Text style={{color: '#22222A'}}>boş</Text>
        ) : (
          response?.balance?.map((item, index) => (
            <TouchableWithoutFeedback key={index}>
              <View style={styles.money_info}>
                <Text style={styles.title1}>
                  Mevcut bakiyeniz:{item.balance} TL
                </Text>
                <Text style={styles.title1}>
                  Bu ay toplam ödemeniz gereken {responsebank.totalAmount} TL
                  var
                </Text>
              </View>
            </TouchableWithoutFeedback>
          ))
        )}
      </View>
      <View style={{flex: 1}}>
        <Text style={styles.title2}>Yaklaşan Ödemeler</Text>
        <FlatList
          data={expens}
          renderItem={({item, index}) =>
            !item.paid ? (
              <ExpInput
                onPress={() => isPayed(index)}
                text={item.name}
                text2={item.end_date}
                text3={item.amount}
              />
            ) : <View/>
          }
        />
        <View style={{flexDirection:'row',justifyContent: 'space-around'}}>
          <TouchableWithoutFeedback onPress={editScreen}>
            <View style={styles.money_info3}>
              <Text style={styles.title3}>Düzenle</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={payedScreen}>
            <View style={styles.money_info3}>
              <Text style={styles.title3}>Ödenenler</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={logOut}>
            <View style={styles.money_info3}>
              <Text style={styles.title4}>Çıkış Yap</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
};

export default FinishPay;
