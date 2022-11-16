import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import back from '../../assets/images/back.png';
import styles from './styles';

export default function Index({navigation}) {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image source={back} style={styles.iconback} />
    </TouchableOpacity>
  );
}
