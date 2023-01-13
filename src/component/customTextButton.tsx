/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

interface Props {
  title: string;
  onPress?: any;
  buttonText?: any;
}

const CustomTextButton = (props: Props) => {
  const {title, onPress, buttonText} = props;
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <Text style={[Styles.buttonText, buttonText]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    color: 'red',
    fontWeight: '500',
  },
});

export default CustomTextButton;
