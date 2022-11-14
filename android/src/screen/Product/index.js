import {
  View,
  Text,
  Image,
  BackHandler,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import back from '../../assets/images/back.png';
import search from '../../assets/images/search.png';
import Btn from '../../component/Button';
import Card from '../../component/CardView';
import TextInput from '../../component/TextInput';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import P1 from '../../assets/images/P1.png';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P4 from '../../assets/images/P4.png';

export default function Index({navigation}) {
  const [produk, setProduk] = useState([
    {nama: 'Black Jacket', image: P1, harga: '$90', id: '1'},
    {nama: 'Pink Shoes', image: P2, harga: '$90', id: '2'},
    {nama: 'Shirt', image: P3, harga: '$90', id: '3'},
    {nama: 'Sneaker', image: P4, harga: '$90', id: '4'},
    {nama: 'Black Jacket', image: P1, harga: '$90', id: '5'},
    {nama: 'Pink Shoes', image: P2, harga: '$90', id: '6'},
    {nama: 'Shirt', image: P3, harga: '$90', id: '7'},
    {nama: 'Sneaker', image: P4, harga: '$90', id: '8'},
  ]);
  function onPressHandlerDetails() {
    navigation.navigate('Details', {data: produk});
  }
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} style={styles.iconback} />
          </TouchableOpacity>
          <TextInput
            placeholder={'Seach'}
            keyboardtype={'text'}
            tisty={styles.searchti}
          />
          <Image source={search} style={styles.iconsearch} />
          <Btn
            label={'Filter (2)'}
            btnStyle={styles.filterbut}
            textstyle={styles.filterbuttxt}
            type={'white'}
          />
        </View>
        <View style={styles.subheader}>
          <Text style={styles.filterbuttxt}>Sort By</Text>
          <View style={styles.sortby}>
            <Text style={styles.sorttxt}>Relevancy</Text>
            <Icon name="chevron-down-outline" style={styles.iconsort} />
          </View>
        </View>
        <View style={styles.card}>
          {produk &&
            produk.map(item => {
              return (
                <>
                  <View>
                    <Card
                      image={item.image}
                      nama={item.nama}
                      harga={item.harga}
                      onPress={onPressHandlerDetails}></Card>
                  </View>
                </>
              );
            })}
        </View>
      </SafeAreaView>
    </>
  );
}
