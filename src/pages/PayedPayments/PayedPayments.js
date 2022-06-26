import React from 'react';
import {View, Text, TouchableWithoutFeedback, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import ExpInput from '../../components/ExpInput';
import styles from './PayedPayments.style';

const PayedPayments = ({navigation}) => {
  const expens = useSelector(state => state.expCalcu.expens);

  const backPage = () => {
    navigation.navigate('FinishPayScreen');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1 / 16}}>
        <Text style={styles.title2}>Ödenenler</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={expens}
          renderItem={({item}) =>
            item.paid ? (
              <ExpInput
                text={item.name}
                text2={item.end_date}
                text3={item.amount}
              />
            ) : (
              <View />
            )
          }
        />
      </View>
      <TouchableWithoutFeedback onPress={backPage}>
        <View style={styles.money_info2}>
          <Text style={styles.title2}>Geri</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default PayedPayments;
