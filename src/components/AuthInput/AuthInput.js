import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './AuthInput.style';

const AuthInput = ({placeholder, onChangeText,secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.inputArea}
      />
    </View>
  );
};

export default AuthInput;
