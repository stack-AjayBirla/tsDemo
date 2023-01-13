import React, {FC} from 'react';
import {View, Text, StyleSheet, TextInput, ViewStyle} from 'react-native';

interface Props {
  placeholder: string;
  title: string;
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
  keyboardtype?: any;
  style?: ViewStyle;
}

const CustomInput: FC<Props> = ({
  placeholder,
  title,
  secureTextEntry,
  onChangeText,
  keyboardtype,
  style,
}) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput
        placeholder={placeholder}
        style={[styles.input, style]}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardtype}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 10,
    borderRadius: 10,
    height: 50,
    padding: 10,
    borderWidth: 2,
    borderColor: '#c71818',
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#357840',
    marginLeft: 15,
    marginTop: 10,
  },
});
export default CustomInput;
