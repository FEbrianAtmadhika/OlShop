// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../../screen/SplashScreen/index';
import Login from '../../screen/Login/Index';
import Register from '../../screen/Register/index';
import Home from '../../screen/Home/index';
import Product from '../../screen/Product';
import Details from '../../screen/Details';
import Reviews from '../../screen/Reviews';
const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'SplashScreen'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Reviews" component={Reviews} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;
