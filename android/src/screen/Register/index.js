import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../component/TextInput';
import styles from './styles';
import iconpass from '../../assets/images/pass.png';
import icondate from '../../assets/images/date.png';
import DatePicker from 'react-native-date-picker';
import CheckBox from '@react-native-community/checkbox';
import Btn from '../../component/Button';
export default function Index({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [isSelected, setSelection] = useState(false);
  function onPressHandler() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.header}>Lets get started</Text>
        <Text style={styles.subheader}>
          Create an account to veco to get all features
        </Text>
        <TextInput
          placeholder={'First Name'}
          secureTextEntry={false}></TextInput>
        <TextInput
          placeholder={'Phone'}
          secureTextEntry={false}
          keyboardtype={'numeric'}></TextInput>
        <TextInput
          placeholder={'Birth Date'}
          secureTextEntry={false}
          value={date}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setOpen(true);
          }}>
          <Image source={icondate} style={styles.icondate} />
        </TouchableOpacity>
        <DatePicker
          modal
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
        <TextInput
          placeholder={'Email'}
          secureTextEntry={false}
          keyboardtype={'email-address'}></TextInput>
        <TextInput
          placeholder={'Password'}
          secureTextEntry={isSecureEntry}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <Image source={iconpass} style={styles.iconpass} />
        </TouchableOpacity>
        <View style={styles.checkboxcontainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
          <View style={styles.content}>
            <Text style={styles.aggrement}>
              I have read and accepted the General
            </Text>
            <Text style={styles.aggrement}>
              Terms and Conditions of this app.
            </Text>
          </View>
        </View>
        <Btn
          label={'Sign Up'}
          type={'yellow'}
          btnStyle={styles.button}
          onPress={onPressHandler}
        />
        <View style={styles.footer}>
          <Text style={styles.login}>Have an account yet?</Text>
          <TouchableOpacity onPress={onPressHandler}>
            <Text style={styles.login}> Log in</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
