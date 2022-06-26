import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import styles from './Register.style';
import AuthInput from '../../components/AuthInput';

const Register = ({navigation}) => {
  const handleLoginDirect = () => {
    navigation.navigate('LoginScreen');
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      const authData = {email: email, password: password};
      const res = await axios.post('http://192.168.1.31:8000/signup', authData);
      navigation.navigate('LoginScreen');
    } catch (error) {
      if (error) {
        Alert.alert(
          'Equmoney',
          'Bir hata oluştu lütfen bilgileriniz kontrol ediniz',
        );
      }
    }
  };

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView>
        <View>
          <Image
            source={require('../../assets/Images/logo.png')}
            style={styles.image}
          />
          <Text style={styles.createText}>Hesap Oluştur</Text>
          <AuthInput placeholder={'Mail Adresi'} onChangeText={setEmail} />
          <AuthInput
            placeholder={'Şifre'}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.create_account}
            onPress={handleLoginDirect}>
            <Text style={styles.create_account_text}>
              Zaten hesabınız var mı ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.first_screen_button} onPress={signUp}>
            <Text style={styles.login_button_text}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Register;
