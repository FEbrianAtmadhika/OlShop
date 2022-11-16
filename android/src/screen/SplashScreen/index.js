import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  StatusBar,
} from 'react-native';
import React from 'react';
import styles from './styles';
import Btn from '../../component/Button';
import bgimage from '../../assets/images/bgimage.png';
import {NavigationHelpersContext} from '@react-navigation/native';
import font from '../../Stylish/Font';
import Font from '../../Stylish/Font';

export default function Index({navigation}) {
  function onPressLogin() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text style={font.HennyPenny64}>Vēcō</Text>
      <View style={styles.content}>
        <Image source={bgimage} style={styles.image}></Image>
        <Btn
          label={'Shop Now'}
          textstyle={Font.Roboto20center}
          type={'white'}
          btnStyle={styles.button}
          onPress={onPressLogin}
        />
      </View>
    </View>
  );
}
