import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
export default function index({value}) {
  function minus() {
    setValue(value - 1);
  }
  function plus() {
    setValue(value - 1);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={minus}>
        <View style={styles.button}>-</View>
      </TouchableOpacity>
      <View style={styles.button}>{value}</View>
      <TouchableOpacity onPress={plus}>
        <View style={styles.button}>+</View>
      </TouchableOpacity>
    </View>
  );
}
