/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

interface Props {
  title: string;
  onPress?: any;
  buttonStyle?: any;
  buttonText?: any;
}

const CustomButton = (props: Props) => {
  const {title, onPress, buttonStyle, buttonText} = props;
  return (
    <View>
      <TouchableOpacity style={[Styles.button, buttonStyle]} onPress={onPress}>
        <Text style={[Styles.buttonText, buttonText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
});

export default CustomButton;
