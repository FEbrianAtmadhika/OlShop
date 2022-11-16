import {View, Text, Image, ImageBackground} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Back from '../../component/back';
import Btn from '../../component/Button';
import cart from '../../assets/images/cart.png';
import Star from '../../assets/images/star.png';
import Toko from '../../assets/images/toko.png';
import Font from '../../Stylish/Font';

export default function Index({route, navigation}) {
  return (
    <View style={styles.container}>
      <Image source={route.params.data.image} style={styles.image} />
      <View style={styles.header}>
        <View style={styles.up}>
          <Back navigation={navigation} />
          <View style={styles.cart}>
            <Btn
              label={'Cart : 2'}
              type={'black'}
              icon={cart}
              iconstyle={styles.carticon}
              textstyle={Font.Roboto13}
              btnStyle={styles.cartbut}></Btn>
          </View>
        </View>
        <View style={styles.imgcount}>
          <Text style={Font.Roboto12black}>1/5</Text>
        </View>
      </View>
      <View style={styles.subheader}>
        <Text style={Font.Roboto20center}>{route.params.data.nama}</Text>
        <View style={styles.subharga}>
          <View style={styles.view}>
            <Text style={Font.Roboto12green}>{route.params.data.harga}</Text>
            <Text style={Font.Roboto24green}>{route.params.data.harga}</Text>
          </View>
          <View style={styles.view}>
            <Image source={Star} style={styles.star} />
            <Text style={Font.Roboto24green}>4/5</Text>
          </View>
        </View>
      </View>
      <View style={styles.shopview}>
        <Image source={Toko} style={styles.shopicon} />
        <View>
          <Text style={Font.Roboto12White}>fitrah shop</Text>
          <View style={styles.row}>
            <Btn
              type={'black'}
              btnStyle={styles.btnshop}
              label={'Go To Shop'}
              textstyle={Font.Roboto12blackcenter}
            />
            <Btn
              type={'black'}
              btnStyle={styles.btnshop}
              label={'Chat Now'}
              textstyle={Font.Roboto12blackcenter}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
