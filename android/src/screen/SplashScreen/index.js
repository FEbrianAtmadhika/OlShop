import {View, Text, ScrollView, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import Btn from '../../component/Button';
import bgimage from '../../assets/images/bgimage.png';
import {NavigationHelpersContext} from '@react-navigation/native';

export default function Index({navigation}) {
  function onPressHandler() {
    navigation.navigate('Login');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.shop}>Vēcō</Text>
      <View style={styles.content}>
        <Image source={bgimage} style={styles.image}></Image>
        <Btn
          label={'Shop Now'}
          textStyle={styles.textbutton}
          type={'green'}
          btnStyle={styles.button}
          onPress={onPressHandler}
        />
      </View>
    </View>
  );
}
