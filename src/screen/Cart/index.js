import {View, Text, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Font from '../../Stylish/Font';
import Array from '../../component/Array';
import CheckBox from '@react-native-community/checkbox';
import Many from '../../component/Many';
import Btn from '../../component/Button';
import {FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function index({navigation}) {
  const [cart, addCart] = useState(Array);

  function remove() {}
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={Font.Roboto20center}>MY Shopping Cart</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity onPress={addCart(item)}></TouchableOpacity>
        <ScrollView>
          <FlatList
            data={cart.Cart}
            renderItem={({item}) => {
              return (
                <View style={styles.shop}>
                  <View style={styles.shopname}>
                    <CheckBox style={styles.checkbox} />
                    <Text style={Font.Roboto12black}>{item.namashop}</Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    </View>
  );
}
