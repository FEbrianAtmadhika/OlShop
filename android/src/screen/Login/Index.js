import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import welcome from '../../assets/images/welcome.png';
import TextInput from '../../component/TextInput';
import iconpass from '../../assets/images/pass.png';
import Btn from '../../component/Button';
export default function Index({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  function onPressHandlerRegister() {
    navigation.navigate('Register');
  }
  function onPressHandlerHome() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={welcome} style={styles.welcome}></Image>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subheader}>
          log in to your existing account of veco
        </Text>
        <TextInput
          placeholder={'Email / Phone Number'}
          secureTextEntry={false}
          keyboardtype={'text'}
          tisty={styles.tisty}></TextInput>
        <TextInput
          placeholder={'Password'}
          secureTextEntry={isSecureEntry}
          tisty={styles.tisty}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <Image source={iconpass} style={styles.iconpass} />
        </TouchableOpacity>
        <Text style={styles.forgot}>forgot password?</Text>
        <Btn
          label={'Login'}
          type={'yellow'}
          btnStyle={styles.button}
          onPress={onPressHandlerHome}
        />
        <View style={styles.footer}>
          <Text style={styles.signup}>Don't have an account yet?</Text>
          <TouchableOpacity onPress={onPressHandlerRegister}>
            <Text style={styles.signup}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
