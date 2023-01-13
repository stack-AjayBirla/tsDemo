/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextStyle,
  ViewStyle,
  GestureResponderEvent,
} from 'react-native';
import {useSelector} from 'react-redux';

interface Props {
  title: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
  headerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  state?: unknown;
}

const Header = (props: Props) => {
  const navigation = useNavigation();
  const data = useSelector(state => state.count);
  const {title, onPress, headerStyle, buttonStyle, titleStyle} = props;
  return (
    <View style={[Styles.header, headerStyle]}>
      <Text style={[Styles.title, titleStyle]}>{title}</Text>
      <View style={[Styles.buttonContainer, buttonStyle]}>
        <TouchableOpacity
          style={{marginRight: 10}}
          onPress={() => navigation.navigate('MapScreen')}>
          <Image
            source={require('../assets/images/map.png')}
            style={{marginLeft: 10, height: 24, width: 24}}
          />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.cart} onPress={onPress}>
          <Image
            source={require('../assets/images/cart.png')}
            style={{height: 24, width: 24}}
          />
          <Text style={{color: 'red'}}>{data}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 1,
  },
  title: {
    fontSize: 22,
    color: 'black',
    fontWeight: '500',
    margin: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  cart: {
    flexDirection: 'row',
  },
});

export default Header;
