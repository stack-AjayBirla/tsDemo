/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';
import CustomTextButton from '../../component/customTextButton';
import CustomInput from '../../navigation/CustomInput';

const SignIn = () => {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>LOGIN</Text>
        <CustomInput
          placeholder={'Please Enter Your Userid'}
          title={'USER-ID'}
        />
        <CustomInput
          placeholder={'Please Enter Your Password'}
          title={'PASSWORD'}
        />
        <CustomButton
          title="LOGIN"
          buttonStyle={styles.button}
          onPress={() => Navigation.navigate('BottomTabNavigatore')}
        />
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={{color: 'black', margin: 5}}>NEW-USER ?</Text>
          <CustomTextButton
            title="Sign-up"
            onPress={() => Navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#357840',
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
  button: {
    height: 50,
    marginHorizontal: '20%',
    marginVertical: 15,
    borderRadius: 25,
    backgroundColor:'#357840',
  },
});
export default SignIn;
