import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Dialog from 'react-native-dialog';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {getBalance} from '../../context/balanceSlice';
import styles from './AccountArea.style';

const AccountArea = ({navigation}) => {
  const dispatch = useDispatch();
  const userID = useSelector(state => state.authFlow.userID);
  const [balance, setBalance] = useState('');
  const [visible, setVisible] = useState(false);
  const showDialog = () => {
    setVisible(true);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  const AddBalance = async () => {
    try {
      const authData = {balance: balance, user_id: userID};
      const res = await axios.post(
        'http://192.168.1.31:8000/bank-account',
        authData,
      );
      setVisible(false);
      dispatch(getBalance(balance));
    } catch (error) {
      console.error(error.message);
    }
  };
  const handleFinishScreen = () => {
    navigation.navigate('FinishPayScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image source={require('../../assets/Images/account.png')} />
      </View>
      <Text style={styles.title}>Hesabını Ekle</Text>
      <Text style={styles.description}>
        Şimdi bazı harcamaları tahmin ettiğimize göre, şu anda ne kadar paranız
        olduğunu görelim.
        <TouchableOpacity onPress={showDialog} style={styles.account_button}>
          <Text style={styles.account_button_text}>
            Hesabınızı eklemek için tıklayın
          </Text>
        </TouchableOpacity>
      </Text>
      <View style={styles.dialog_container}>
        <Dialog.Container visible={visible}>
          <Dialog.Title>Bakiyenizi giriniz</Dialog.Title>
          <Dialog.Input keyboardType="numeric" onChangeText={setBalance} />
          <Dialog.Button label="İptal" onPress={handleCancel} />
          <Dialog.Button label="Ekle" onPress={AddBalance} />
        </Dialog.Container>
      </View>
      <TouchableOpacity style={styles.account_button3}>
        <Text style={styles.account_button_text2}>Önemli Not</Text>
        <Text style={styles.account_button_text3}>
          Mevcutta hesabınız bulunuyorken yeni bakiye girmek, bakiyenizi girilen
          bakiye ile değiştirecektir
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleFinishScreen}
        style={styles.account_button2}>
        <Text style={styles.account_button_text2}>İleri</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountArea;
