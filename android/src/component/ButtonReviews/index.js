import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import Rating from '../Ratings';
import Font from '../../Stylish/Font';
export default function index({jmlrating, indicator, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Rating
          type={'tidak'}
          indicator={'off'}
          rating={indicator}
          reviewstyle={styles.reviewstyle}
          starstyle={styles.starstyle}
        />
        <Text style={Font.Roboto12green}>{['(', jmlrating, ')']}</Text>
      </View>
    </TouchableOpacity>
  );
}
