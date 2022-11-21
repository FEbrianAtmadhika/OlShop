import {View, Text, Image, FlatList, ImageBackground} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import Btn from '../../component/Button';
import TextInput from '../../component/TextInput';
import search from '../../assets/images/search.png';
import bg from '../../assets/images/bghome.png';
import Card from '../../component/CardView/index';
import {ScrollView} from 'react-native-gesture-handler';
import Font from '../../Stylish/Font';
import Array from '../../component/Array/index';
export default function Index({navigation}) {
  const [produk, setProduk] = useState(Array);
  const [second, setSecond] = useState(10);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(12);
  const [activeMenu, setActiveMenu] = useState('Flash Sale');

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
          <Text style={Font.HennyPenny30}>Vēcō</Text>
          <TextInput
            placeholder={'Search Here'}
            keyboardtype={'text'}
            tisty={styles.search}></TextInput>
          <Image source={search} style={styles.iconsearch}></Image>
        </View>
        <View style={styles.news}>
          <Image source={bg} style={styles.bgnews}></Image>
          <Text style={Font.Roboto12White}>UP TO 20% DISCOUNT ON</Text>
          <Text style={Font.caudex36white}>Girl's Fashion</Text>
          <Text style={Font.Roboto8white}>
            Lorem ipsum dolor sit amet, consectetur
          </Text>
          <Text style={Font.Roboto8white}>
            adipiscing elit. Et vestibulum amet elementum
          </Text>
          <Btn
            label={'EXPLORE NOW'}
            textstyle={Font.Roboto8}
            type={'black'}
            btnStyle={styles.button}
            textStyle={Font.Roboto10}
            onPress={onPressHandlerProduct}></Btn>
          <View style={styles.navbut}>
            <Btn
              btnStyle={[
                styles.navbutton,
                {
                  backgroundColor:
                    activeMenu == 'Flash Sale' ? '#FDDE67' : 'white',
                },
              ]}
              type={'black'}
              label={'Flash Sale'}
              onPress={() => setActiveMenu('Flash Sale')}
              textstyle={Font.Roboto10}></Btn>
            <Btn
              btnStyle={[
                styles.navbutton,
                {
                  backgroundColor:
                    activeMenu == 'Best Seller' ? '#FDDE67' : 'white',
                },
              ]}
              type={'black'}
              label={'Best Seller'}
              onPress={() => setActiveMenu('Best Seller')}
              textstyle={Font.Roboto10}></Btn>
            <Btn
              btnStyle={[
                styles.navbutton,
                {
                  backgroundColor:
                    activeMenu == 'New Collection' ? '#FDDE67' : 'white',
                },
              ]}
              type={'black'}
              label={'New Collection'}
              onPress={() => setActiveMenu('New Collection')}
              textstyle={Font.Roboto10}></Btn>
            <Btn
              btnStyle={[
                styles.navbutton,
                {
                  backgroundColor:
                    activeMenu == 'Recomendation' ? '#FDDE67' : 'white',
                },
              ]}
              type={'black'}
              label={'Recomendation'}
              onPress={() => setActiveMenu('Recomendation')}
              textstyle={Font.Roboto10}></Btn>
          </View>
        </View>
        <View style={styles.viewtimer}>
          <Text style={Font.caudex24black}> Flash Sale </Text>
          <Text style={styles.timer}>{hour}</Text>
          <Text style={Font.caudex24black}> : </Text>
          <Text style={styles.timer}>{minute}</Text>
          <Text style={Font.caudex24black}> : </Text>
          <Text style={styles.timer}>{second}</Text>
        </View>
        <View style={styles.card}>
          <FlatList
            data={produk.array}
            renderItem={({item}) => {
              return (
                <Card
                  image={item.image}
                  nama={item.nama}
                  harga={item.harga}
                  onPress={() =>
                    navigation.navigate('Details', {data: item})
                  }></Card>
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
