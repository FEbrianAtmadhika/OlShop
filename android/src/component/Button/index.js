import {NavigationHelpersContext} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

export default function Index({
  label,
  onPress,
  type,
  isLoading,
  btnStyle,
  isDisable,
}) {
  function getBgColor() {
    switch (type) {
      case 'yellow':
        return {backgroundColor: '#FDDE67'};
      default:
        return {backgroundColor: '#304B3B'};
    }
  }

  function getTextColor() {
    switch (type) {
      case 'yellow':
        return {color: '#000000'};
      default:
        if (isDisable) {
        }
        return {};
    }
  }
  return (
    <TouchableOpacity
      disabled={isLoading || isDisable}
      onPress={onPress}
      style={[styles.container, btnStyle, getBgColor()]}>
      {isLoading ? (
        <Text style={[styles.text, getTextColor()]}>{label}</Text>
      ) : (
        <Text style={[styles.text, getTextColor()]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
}
