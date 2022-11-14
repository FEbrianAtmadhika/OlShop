import {NavigationHelpersContext} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Index({label, onPress, btnStyle, type, textstyle}) {
  function getTextColor() {
    switch (type) {
      case 'green':
        return {color: '#FFFFFF'};
      default:
        return {};
    }
  }
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, btnStyle]}>
      <Text style={[styles.text, textstyle, getTextColor()]}>{label}</Text>
    </TouchableOpacity>
  );
}
