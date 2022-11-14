import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Btn from '../../component/Button';
import TextInput from '../../component/TextInput';
import search from '../../assets/images/search.png';
import P1 from '../../assets/images/P1.png';
import P2 from '../../assets/images/P2.png';
import P3 from '../../assets/images/P3.png';
import P4 from '../../assets/images/P4.png';
import bg from '../../assets/images/bghome.png';
import Card from '../../component/CardView/index';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SectionGrid} from 'react-native-super-grid';
export default function Index({navigation}) {
  const [produk, setProduk] = useState([
    {nama: 'Black Jacket', image: P1, harga: '$90', id: '1'},
    {nama: 'Pink Shoes', image: P2, harga: '$90', id: '2'},
    {nama: 'Shirt', image: P3, harga: '$90', id: '3'},
    {nama: 'Sneaker', image: P4, harga: '$90', id: '4'},
  ]);
  const [second, setSecond] = useState(10);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(12);

  function onPressHandlerProduct() {
    navigation.navigate('Product');
  }
  var timer;
  useEffect(() => {
    timer = setInterval(() => {
      setSecond(second - 1);
      if (second === 0) {
        setMinute(minute - 1);
        setSecond(59);
      }
      if (minute === 0 && second === 0) {
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    }, 1000);
    return () => clearInterval(timer);
  });
  return (
    <ScrollView>
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
          <Image source={bg} style={styles.bgnews}></Image>
          <Text style={[styles.title, {fontSize: 12}]}>
            UP TO 20% DISCOUNT ON
          </Text>
          <Text style={styles.caudex}>Girl's Fashion</Text>
          <Text style={styles.title}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text style={styles.title}>
            adipiscing elit. Et vestibulum amet elementum
          </Text>
          <Btn
            label={'EXPLORE NOW'}
            textstyle={styles.textbutton}
            type={'yellow'}
            btnStyle={styles.button}
            textStyle={styles.textbutton}
            onPress={onPressHandlerProduct}></Btn>
          <View style={styles.navbut}>
            <Btn
              btnStyle={styles.navbutton}
              type={'yellow'}
              label={'Flash Sale'}
              textstyle={styles.navbuttontxt}></Btn>
            <Btn
              btnStyle={styles.navbutton}
              type={'yellow'}
              label={'Best Seller'}
              textstyle={styles.navbuttontxt}></Btn>
            <Btn
              btnStyle={styles.navbutton}
              type={'yellow'}
              label={'New Collection'}
              textstyle={styles.navbuttontxt}></Btn>
            <Btn
              btnStyle={styles.navbutton}
              type={'yellow'}
              label={'Recomendation'}
              textstyle={styles.navbuttontxt}></Btn>
          </View>
        </View>
        <View style={styles.viewtimer}>
          <Text style={styles.txttimer}> Flash Sale </Text>
          <Text style={styles.timer}>{hour}</Text>
          <Text style={styles.txttimer}> : </Text>
          <Text style={styles.timer}>{minute}</Text>
          <Text style={styles.txttimer}> : </Text>
          <Text style={styles.timer}>{second}</Text>
        </View>
        <View style={styles.card}>
          <FlatList
            data={produk}
            renderItem={({item}) => {
              return (
                <Card
                  image={item.image}
                  nama={item.nama}
                  harga={item.harga}></Card>
              );
            }}
            keyExtractor={produk => produk.id.toString()}
            numColumns={'2'}
          />
        </View>
      </View>
    </ScrollView>
  );
}
