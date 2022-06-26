import React from 'react';
import {TouchableWithoutFeedback, View, Text,Button} from 'react-native';

import styles from './ExpInput.style';

const ExpInput = ({text, text2,text3, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.input_text}>{text}</Text>
        <Text style={styles.input_text2}>SÖT:{text2}</Text>
        <Text style={styles.input_text3}>{text3}TL</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpInput;
