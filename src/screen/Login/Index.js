import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import welcome from '../../assets/images/welcome.png';
import TextInput from '../../component/TextInput';
import iconpass from '../../assets/images/pass.png';
import Btn from '../../component/Button';
import font from '../../Stylish/Font';
import google from '../../assets/images/google.png';
import facebook from '../../assets/images/facebook.png';
export default function Index({navigation}) {
  const [isSecureEntry, setIsSecureEntry] = useState(true);
  function onPressHandlerRegister() {
    navigation.navigate('Register');
  }
  function onPressHandlerHome() {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={welcome} style={styles.welcome}></Image>
        <Text style={font.Robotoheader}>Welcome Back!</Text>
        <Text style={font.Robotosubheader}>
          log in to your existing account of veco
        </Text>
        <TextInput
          placeholder={'Email / Phone Number'}
          secureTextEntry={false}
          keyboardtype={'text'}
          tisty={styles.tisty}></TextInput>
        <TextInput
          placeholder={'Password'}
          secureTextEntry={isSecureEntry}
          tisty={styles.tisty}></TextInput>
        <TouchableOpacity
          onPress={() => {
            setIsSecureEntry(prev => !prev);
          }}>
          <Image source={iconpass} style={styles.iconpass} />
        </TouchableOpacity>
        <Text style={font.roboto12whiteflexend}>forgot password?</Text>
        <Btn
          label={'Login'}
          type={'black'}
          btnStyle={styles.button}
          onPress={onPressHandlerHome}
          textstyle={font.Roboto20center}
        />
        <View style={styles.coulumb}>
          <Text style={font.Roboto14w400}>or connect using</Text>
          <View style={styles.row}>
            <Btn
              label={'Google'}
              type={'white'}
              icon={google}
              iconstyle={styles.icon}
              btnStyle={styles.smallbut}
              onPress={onPressHandlerHome}
              textstyle={font.Roboto20center}
            />
            <Btn
              label={'Facebook'}
              type={'white'}
              icon={facebook}
              iconstyle={styles.icon}
              btnStyle={styles.smallbut}
              onPress={onPressHandlerHome}
              textstyle={font.Roboto20center}
            />
          </View>
          <View style={styles.row}>
            <Text style={font.Roboto14w400}>Don't have an account yet?</Text>
            <TouchableOpacity onPress={onPressHandlerRegister}>
              <Text style={font.Roboto14w400}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
