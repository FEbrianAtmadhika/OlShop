import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import search from '../../assets/images/search.png';
import Btn from '../../component/Button';
import Card from '../../component/CardView';
import TextInput from '../../component/TextInput';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Array from '../../component/Array';
import Back from '../../component/back';
import Font from '../../Stylish/Font';
export default function Index({navigation}) {
  const [produk, setProduk] = useState(Array);
  const [menu, setMenu] = useState([
    {menu: 'Relevency'},
    {menu: 'Price'},
    {menu: 'Populer'},
    {menu: ''},
  ]);
  function getSort() {
    <View style={styles.dropdownmenu}>
      <Text style={Font.Roboto14w400}></Text>
    </View>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Back navigation={navigation} />
        <TextInput
          placeholder={'Seach'}
          keyboardtype={'text'}
          tisty={styles.searchti}
        />
        <Image source={search} style={styles.iconsearch} />
        <Btn
          label={'Filter (2)'}
          btnStyle={styles.filterbut}
          textstyle={Font.Roboto14center}
          type={'black'}
        />
      </View>
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
          data={produk.array}
          renderItem={({item}) => {
            return (
              <Card
                image={item.image}
                nama={item.detailrating.namarating}
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
