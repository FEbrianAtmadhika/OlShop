import {View, Text, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import TextInput from '../../component/TextInput';
import search from '../../assets/images/search.png';
import P1 from '../../assets/images/P1.png';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P4 from '../../assets/images/P4.png';
import Btn from '../../component/Button';
import Card from '../../component/CardView/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Index(navigation) {
  const [produk, setProduk] = useState([
    {nama: 'Black Jacket', image: P1, harga: '$90'},
    {nama: 'Pink Shoes', image: P2, harga: '$90'},
    {nama: 'Shirt', image: P3, harga: '$90'},
    {nama: 'Sneaker', image: P4, harga: '$90'},
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Vēcō</Text>
        <TextInput
          placeholder={'Search Here'}
          keyboardtype={'text'}
          tisty={styles.search}></TextInput>
        <Image source={search} style={styles.iconsearch}></Image>
      </View>
      <View style={styles.news}>
        <Text style={styles.title}>UP TO 20% DISCOUNT ON</Text>
      </View>
    </View>
  );
}
