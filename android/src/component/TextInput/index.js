import {View, TextInput} from 'react-native';
import {useState} from 'react';
import React from 'react';
import styles from './styles';
const index = ({placeholder, secureTextEntry, keyboardtype, value, tisty}) => {
  const [text = value, setchangetext] = useState(null);
  return (
    <View style={[styles.container, tisty]}>
      <TextInput
        style={styles.textinput}
        keyboardType={keyboardtype}
        placeholder={placeholder}
        onChangeText={setchangetext}
        value={text}
        secureTextEntry={secureTextEntry}></TextInput>
    </View>
  );
};

export default index;
