import React from 'react';
import {SafeAreaView, View, Text, StyleSheet, TextInput} from 'react-native';
import CostomButton from '../../component/costomButton';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>LOGIN</Text>
        <Text style={styles.inputTitle}>USER-ID</Text>
        <TextInput
          placeholder="userId"
          style={styles.input}
          placeholderTextColor="white"
        />
        <Text style={styles.inputTitle}>PASSWORD</Text>
        <TextInput
          placeholder="userId"
          style={styles.input}
          placeholderTextColor="white"
        />
        <CostomButton
          title="LOGIN"
          buttonStyle={styles.button}
          onPress={undefined}
          buttonText={undefined}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    color: 'red',
    fontWeight: '500',
    alignSelf: 'center',
  },
  inputContainer: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginHorizontal: 15,
    marginBottom: 30,
    borderRadius: 15,
  },
  input: {
    margin: 10,
    borderRadius: 10,
    height: 50,
    backgroundColor: 'red',
    padding: 10,
  },
  inputTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: 'red',
    marginLeft: 15,
    marginTop: 10,
  },
  button: {
    height: 50,
    marginHorizontal: '20%',
    marginVertical: 15,
    borderRadius: 25,
  },
});
export default SignIn;
