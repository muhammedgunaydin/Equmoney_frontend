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
import styles from './Login.style';
import AuthInput from '../../components/AuthInput';
import {useDispatch} from 'react-redux';
import {getUser} from '../../context/authSlice';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegisterDirect = () => {
    navigation.navigate('RegisterScreen');
  };

  const loginto = async () => {
    try {
      const userData = {email: email, password: password};
      await axios
        .post('http://192.168.1.31:8000/login', userData)
        .then(response => {
          if (response.data.status === 400) {
            Alert.alert(
              'Equmoney',
              'Bir hata oluştu lütfen bilgileriniz kontrol ediniz',
            );
          } else {
            const user = {
              isLoggedIn: true,
              email: userData.email,
              userID: response.data.id,
            };
            dispatch(getUser(user));
            navigation.navigate('WelcomeScreen');
          }
        });
    } catch (error) {
      if (error) {
        Alert.alert(
          'Equmoney',
          'Bir hata oluştu lütfen bilgileriniz kontrol ediniz',
          error.message,
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
          <Text style={styles.loginText}>Giriş Yap</Text>
          <AuthInput
            placeholder={'Mail Adresi'}
            onChangeText={value => setEmail(value)}
          />
          <AuthInput
            placeholder={'Şifre'}
            onChangeText={value => setPassword(value)}
            secureTextEntry={true}
          />
          <TouchableOpacity
            style={styles.create_account}
            onPress={handleRegisterDirect}>
            <Text style={styles.create_account_text}>
              Hesabınız yok mu ? Kayıt Olun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.first_screen_button}
            onPress={loginto}>
            <Text style={styles.loginbutton}>Giriş Yap</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};

export default Login;
