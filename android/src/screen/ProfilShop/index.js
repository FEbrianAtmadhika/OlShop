import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Back from '../../component/back';
import background from '../../assets/images/headershop.png';
import TextInput from '../../component/TextInput';
import search from '../../assets/images/search.png';
import Array from '../../component/Array/';
import Font from '../../Stylish/Font';
import star from '../../assets/images/star.png';
import Btn from '../../component/Button';
import Card from '../../component/CardView';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Index({navigation}) {
  const [shop, setShop] = useState(Array);
  const [produk, setProduk] = useState(Array.Shop.produk);
  const [activeMenu, setActiveMenu] = useState('Shop');
  function setStatus() {
    switch (shop.Shop.status) {
      case '1':
        return (
          <View style={[styles.status, {backgroundColor: '#7AC93B'}]}></View>
        );
      default:
        return <View style={[styles.status, {backgroundColor: 'red'}]}></View>;
        break;
    }
  }
  function getContent() {
    switch (activeMenu) {
      case 'Shop':
        return (
          <View>
            <View style={styles.headercontent}>
              <Text style={Font.Roboto16black}>Description</Text>
              <Text style={Font.Roboto10}>{shop.Shop.description}</Text>
              <View>
                <Text style={Font.Roboto10}>Social Media</Text>
                <Text style={Font.Roboto10}>
                  {['Instagram    : ', shop.Shop.instagram]}
                </Text>
                <Text style={Font.Roboto10}>
                  {['Line              : ', shop.Shop.Line]}
                </Text>
              </View>
            </View>
            <Image source={shop.Shop.image1} style={styles.imageshop} />
            <View style={styles.content}>
              <Text style={Font.Roboto16black}>Recommendation</Text>
              <View style={styles.card}>
                <FlatList
                  data={produk}
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
          </View>
        );
      case 'Chat':
        return (
          <View>
            <View style={styles.subheader}>
              <Text style={Font.Roboto14center}>Sort By</Text>
              <View style={styles.sortby}>
                <Text style={Font.Roboto14w400}>Relevancy</Text>
                <TouchableOpacity>
                  <Icon name="chevron-down-outline" style={styles.iconsort} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.card}>
              <FlatList
                data={produk}
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
        );
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground source={background}>
          <View style={styles.header}>
            <View style={styles.row}>
              <Back navigation={navigation} />
              <TextInput
                placeholder={'Seach'}
                keyboardtype={'text'}
                tisty={styles.searchti}
              />
              <Image source={search} style={styles.iconsearch} />
            </View>
            <View style={styles.rowinfoshop}>
              <Image source={shop.Shop.iconshop} style={styles.iconshop} />
              <View style={styles.infoshop}>
                <Text style={Font.Roboto16black}>{shop.Shop.nama}</Text>
                <View style={styles.row}>
                  {setStatus()}
                  <Text style={Font.Roboto12black}> Online</Text>
                </View>
                <View style={styles.row}>
                  <Image source={star} style={styles.starstyle} />
                  <Text style={Font.Roboto12black}> {shop.Shop.rating}</Text>
                  <Text>{'      |      '}</Text>
                  <Text style={Font.Roboto12black}>
                    {[shop.Shop.jmlproduk, ' Product']}
                  </Text>
                </View>
              </View>
              <Btn
                type={'white'}
                btnStyle={styles.btnshop}
                label={'Chat Now'}
                textstyle={Font.Roboto12White}
              />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.row}>
          <TouchableWithoutFeedback
            style={styles.btnmenu}
            onPress={() => setActiveMenu('Shop')}>
            <View
              style={[
                styles.btnmenu,
                {
                  borderBottomColor: activeMenu == 'Shop' ? '#FDDE67' : 'white',
                },
              ]}>
              <Text
                style={[
                  Font.Roboto14w400,
                  {color: activeMenu == 'Shop' ? '#FDDE67' : 'white'},
                ]}>
                Shop
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            style={styles.btnmenu}
            onPress={() => setActiveMenu('Chat')}>
            <View
              style={[
                styles.btnmenu,
                {
                  borderBottomColor: activeMenu == 'Chat' ? '#FDDE67' : 'white',
                },
              ]}>
              <Text
                style={[
                  Font.Roboto14w400,
                  {color: activeMenu == 'Chat' ? '#FDDE67' : 'white'},
                ]}>
                Chat
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        {getContent()}
      </ScrollView>
    </View>
  );
}
