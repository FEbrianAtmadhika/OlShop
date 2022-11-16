import {NavigationHelpersContext} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Index({
  iconstyle,
  icon,
  label,
  onPress,
  btnStyle,
  type,
  textstyle,
}) {
  function getTextColor() {
    switch (type) {
      case 'white':
        return {color: '#FFFFFF'};
      case 'black':
        return {color: '#000000'};
      default:
        return {};
    }
  }
  function getBackgroundColor() {
    switch (label) {
      case 'Google':
        return {backgroundColor: '#DB4437'};
      case 'Facebook':
        return {backgroundColor: '#3B5998'};
    }
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, btnStyle, getBackgroundColor()]}>
      <Image source={icon} style={iconstyle} />
      <Text style={[styles.text, textstyle, getTextColor()]}>{label}</Text>
    </TouchableOpacity>
  );
}
