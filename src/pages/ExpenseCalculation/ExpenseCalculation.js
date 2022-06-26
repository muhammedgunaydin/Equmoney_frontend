import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {useIsFocused} from '@react-navigation/native';
import {addData} from '../../context/calcuSlice';
import styles from './ExpenseCalculation.style';
import NewCategoryInput from '../../components/NewCategoryInput';
import ExpInput from '../../components/ExpInput';

const ExpenseCalculation = ({navigation}) => {
  const dispatch = useDispatch();

  const handleNewCategoryDirect = () => {
    navigation.navigate('NewCategoryScreen');
  };

  const handleAccountAreaDirect = () => {
    navigation.navigate('AccountAreaScreen');
  };

  const handleSignglePageFix = index => {
    navigation.navigate('PayingCalculationScreen', {indexNumber: index});
  };
  const [response, setResponse] = useState({});
  const info = useSelector(state => state.authFlow.userID);

  const isFocused = useIsFocused();
  useEffect(() => {
    axios.get(`http://192.168.1.31:8000/payments/${info}`).then(response => {
      setResponse(response.data);
      dispatch(addData(response.data.payments));
    });
  }, [isFocused]);

  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.imagecontainer}>
          <Image source={require('../../assets/Images/expcalcu.png')} />
        </View>
        <Text style={styles.page_title}>Harcamalarını Hesapla</Text>
        {response == null ? (
          <Text style={{color: '#22222A'}}>boş</Text>
        ) : (
          response?.payments?.map((item, index) => (
            <ExpInput
              key={index}
              text={item.name}
              text2={item.end_date}
              text3={item.amount}
              onPress={() => handleSignglePageFix(index)}
            />
          ))
        )}
        <NewCategoryInput
          onPress={handleNewCategoryDirect}
          text="Yeni kategori ekleyin"
        />
        <TouchableOpacity
          onPress={handleAccountAreaDirect}
          style={styles.welcome_button}>
          <Text style={styles.button_text}>İleri</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ExpenseCalculation;
