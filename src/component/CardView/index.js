import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import cart from '../../assets/images/cart.png';
export default function Index({image, nama, harga, cardstyle, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.card, cardstyle]}>
        <Image source={image} style={styles.image}></Image>
        <View style={styles.desc}>
          <View style={styles.label}>
            <Text style={styles.name}>{nama}</Text>
            <Text style={styles.harga}>{harga}</Text>
          </View>
          <View style={styles.icon}>
            <Image source={cart} style={styles.cart}></Image>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
