import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './Welcome.style';
import WelcomeSvg from '../../assets/Svg/welcome.svg';
const Welcome = ({navigation}) => {
  const handleExpenseCalculationDirect = () => {
    navigation.navigate('ExpenseCalculationScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgcontainer}>
        {<WelcomeSvg width={330} height={330} />}
      </View>
      <Text style={styles.title}>Equmoney’e hoşgeldin</Text>
      <Text style={styles.descr}>
        Giderlerinizi kontrol altına alın, borçlarınızdan kurtulun, paranızı
        biriktirin ve mali hedeflerinize hızlıca ulaşın
      </Text>
      <TouchableOpacity
        onPress={handleExpenseCalculationDirect}
        style={styles.welcome_button}>
        <Text style={styles.button_text}>Başlayalım!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
