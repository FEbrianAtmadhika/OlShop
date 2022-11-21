import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Back from '../../component/back';
import Btn from '../../component/Button';
import cart from '../../assets/images/cart.png';
import Toko from '../../assets/images/toko.png';
import Font from '../../Stylish/Font';
import Rating from '../../component/Ratings';
import clock from '../../assets/images/jam.png';
import home from '../../assets/images/home.png';
import chat from '../../assets/images/chat.png';

export default function Index({route, navigation}) {
  function onPressReviewsHolder() {
    navigation.navigate('Reviews', {data: route.params.data});
  }
  function onPressProfilShop() {
    navigation.navigate('ProfilShop');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <Btn
            btnStyle={styles.btnpreorder}
            label={'Pre order'}
            icon={clock}
            type={'green'}
            iconstyle={styles.preordericon}
            textstyle={Font.Roboto10}
          />
          <View style={styles.subharga}>
            <View style={styles.view}>
              <Text style={Font.Roboto12green}>{route.params.data.harga}</Text>
              <Text style={Font.Roboto24green}>{route.params.data.harga}</Text>
            </View>
            <View style={styles.view}>
              <Rating
                type={'ada'}
                indicator={'On'}
                rating={route.params.data.rating}
                onPress={onPressReviewsHolder}
              />
            </View>
          </View>
        </View>
        <View style={styles.shopview}>
          <Image source={Toko} style={styles.shopicon} />
          <View>
            <Text style={[Font.Roboto14w400, {marginLeft: 7}]}>
              fitrah shop
            </Text>
            <View style={styles.row}>
              <Btn
                type={'black'}
                btnStyle={styles.btnshop}
                label={'Go To Shop'}
                onPress={onPressProfilShop}
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
        <View style={styles.describe}>
          <View style={styles.descheader}>
            <Text style={Font.Roboto16black}>Description : </Text>
          </View>
          <View style={styles.desccontent}>
            <Text style={Font.Roboto14center}>
              Country: {'               '}
              {route.params.data.country}
            </Text>
            <Text style={Font.Roboto14center}>
              Brand: {'                  '}
              {route.params.data.brand}
            </Text>
            <Text style={Font.Roboto14center}>
              Category: {'            '}
              {route.params.data.category}
            </Text>
            <Text style={Font.Roboto14center}>
              Weight: {'                '}
              {route.params.data.weight}
            </Text>
          </View>
          <View>
            <Text style={Font.Roboto12black}>
              {route.params.data.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.row2}>
        <View style={styles.botnav}>
          <View style={styles.rborder}>
            <TouchableOpacity>
              <Image source={home} style={styles.iconbot} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={chat} style={styles.iconbot} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.addtocart}>
          <TouchableOpacity>
            <Text style={Font.Roboto20w400}>add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
