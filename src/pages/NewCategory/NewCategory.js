import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Button,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import DatePicker from 'react-native-date-picker';
import {useSelector} from 'react-redux';
import moment from 'moment';
import axios from 'axios';
import styles from './NewCategory.style';

const NewCategory = ({navigation}) => {
  const userID = useSelector(state => state.authFlow.userID);

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());
  const [again, setAgain] = useState('');
  const [open, setOpen] = useState(false);
  const backButton = () => {
    navigation.navigate('ExpenseCalculationScreen');
  };

  const SendDBPayments = async () => {
    try {
      const payData = {
        uniq: Date.now(),
        user_id: userID,
        name,
        amount: price,
        start_date: formattedDate,
        end_date: dsa,
        paid: false,
      };
      const res = await axios.post(
        'http://192.168.1.31:8000/payments',
        payData,
      );
      navigation.navigate('ExpenseCalculationScreen');
    } catch (error) {
      console.error(error.message);
    }
  };

  let tomorrow = date;
  let dsa = moment(tomorrow).add(again, 'day').format('DD-MM-YYYY');
  var asd = date;
  var formattedDate = moment(asd).format('DD-MM-YYYY');

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/Images/new.png')}
      />
      <View style={styles.inputa}>
        <Text style={styles.title}>Yeni Kategori</Text>
        <View style={styles.middle_container}>
          <View style={styles.pay_container}>
            <Text style={styles.sub_title}>Ad:</Text>
            <TextInput
              style={styles.input_area_name}
              placeholder="Kategori adı"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View style={styles.pay_container}>
            <Text style={styles.sub_title}>Ücret:</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input_area_price}
              placeholder="0,00TL"
              onChangeText={setPrice}
              value={price}
            />
          </View>
        </View>
        <View style={styles.pay_container}>
          <Button
            style={styles.date_button}
            title="Başlangıç tarihi seçiniz"
            onPress={() => setOpen(true)}
          />
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <View style={styles.picker} dropdownIconColor={'white'}>
          <Picker
            style={styles.picker}
            dropdownIconColor={'white'}
            selectedValue={again}
            onValueChange={(itemValue, itemIndex) => setAgain(itemValue)}>
            <Picker.Item
              style={styles.picker_title}
              label="Süreyi seçiniz"
              enabled={false}
            />
            <Picker.Item style={styles.picker_title} label="Aylık" value="30" />
            <Picker.Item
              style={styles.picker_title}
              label="Haftalık"
              value="7"
            />
            <Picker.Item style={styles.picker_title} label="Günlük" value="1" />
          </Picker>
        </View>
      </View>
      <View style={styles.twobutton_container}>
        <TouchableOpacity style={styles.del_button} onPress={backButton}>
          <Text style={styles.button_text}>Geri</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ok_button} onPress={SendDBPayments}>
          <Text style={styles.button_text}>Bitti</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewCategory;
