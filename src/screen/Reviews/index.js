import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Back from '../../component/back';
import Rating from '../../component/Ratings';
import Font from '../../Stylish/Font';
import BtnStar from '../../component/ButtonReviews';
export default function Index({route, navigation}) {
  const [reviews, setReviews] = useState(route.params.data.detailrating);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Back navigation={navigation}></Back>
          <Text style={[Font.Roboto20center, styles.fontheader]}>
            Customers Review
          </Text>
        </View>
        <View style={styles.subheader}>
          <View style={styles.status}>
            <Rating
              type={'ada'}
              indicator={'off'}
              rating={route.params.data.rating}
              txtstyle={Font.Roboto12green}></Rating>
            <Text style={Font.Roboto12green}>
              {['(', route.params.data.jumlahrating, ')']} review
            </Text>
          </View>
          <View style={styles.row}>
            <TouchableOpacity>
              <View style={styles.btnall}>
                <Text style={Font.Roboto12black}>All</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.btnstar}>
              <BtnStar
                indicator={1}
                jmlrating={route.params.data.jumlahrating}
              />
            </View>
            <View style={styles.btnstar}>
              <BtnStar
                indicator={2}
                jmlrating={route.params.data.jumlahrating}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.btnstar}>
              <BtnStar
                indicator={3}
                jmlrating={route.params.data.jumlahrating}
              />
            </View>
            <View style={styles.btnstar}>
              <BtnStar
                indicator={4}
                jmlrating={route.params.data.jumlahrating}
              />
            </View>
            <View style={styles.btnstar}>
              <BtnStar
                indicator={5}
                jmlrating={route.params.data.jumlahrating}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          {reviews.map(item => {
            return (
              <View style={styles.viewreviews}>
                <Text style={Font.Roboto14center}>{item.namarating}</Text>
                <Text style={Font.Roboto11}>{item.ket}</Text>
                <View style={styles.footerreviews}>
                  <Text style={Font.Roboto10}>{item.tgl}</Text>
                  <Rating
                    type={'tidak'}
                    indicator={'off'}
                    rating={item.rating}
                    starstyle={styles.starstyle}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
