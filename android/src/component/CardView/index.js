import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import cart from '../../assets/images/cart.png';
export default function Index(props) {
  return (
    <View style={styles.card}>
      {[props.image, styles.image, props.cardstyle]}
      <View style={styles.desc}>
        <View style={styles.label}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.harga}>{harga}</Text>
        </View>
        <View style={styles.icon}>
          <Image source={cart} style={styles.cart}></Image>
        </View>
      </View>
    </View>
  );
}
