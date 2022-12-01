import React, {useState} from 'react';
import styles from './styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import star from '../../assets/images/star.png';
import starcorner from '../../assets/images/starcorner.png';
import Font from '../../Stylish/Font';
export default function index({
  reviewstyle,
  starstyle,
  txtstyle,
  type,
  rating,
  onPress,
  indicator,
}) {
  const [defaultRating, setDefaultRating] = useState(rating);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);

  function setText() {
    switch (type) {
      case 'ada':
        return (
          <Text style={[Font.Roboto24green, txtstyle]}>{defaultRating}/5</Text>
        );
      case 'tidak':
        return;
      default:
        break;
    }
  }
  function setIndicator() {
    switch (indicator) {
      case 'off':
        return (
          <View style={[styles.container, reviewstyle]}>
            {maxRating.map(item => {
              return (
                <Image
                  style={[styles.star, starstyle]}
                  source={item <= defaultRating ? star : starcorner}
                />
              );
            })}
            {setText()}
          </View>
        );
        break;
      case 'On':
        return (
          <TouchableOpacity onPress={onPress}>
            <View style={[styles.container, reviewstyle]}>
              {maxRating.map(item => {
                return (
                  <Image
                    style={[styles.star, starstyle]}
                    source={item <= defaultRating ? star : starcorner}
                  />
                );
              })}
              {setText()}
            </View>
          </TouchableOpacity>
        );
    }
  }
  return <View>{setIndicator()}</View>;
}
