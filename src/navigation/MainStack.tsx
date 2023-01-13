/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import Home from '../screens/Home';

import Cart from '../screens/Cart';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabNavigatore from './BottomTabNavigatore';
import ProductDetail from '../screens/ProductDetail';
import MapScreen from '../screens/MapScreen';
import SignIn from '../screens/user/SignIn';
import SingUp from '../screens/user/SingUp';

export type stackParam = {
  Home: undefined;
  Cart: undefined;
  BottomTabBar: undefined;
  ProfileScreen: undefined;
  ProductDetail:undefined;
};

const Stack = createNativeStackNavigator<stackParam>();

interface Props {
  name: string;
  component: any;
}

const MainStack: React.FC<Props> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTabNavigatore"
          component={BottomTabNavigatore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SingUp}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MainStack;
