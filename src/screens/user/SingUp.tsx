/* eslint-disable no-sequences */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';
import CustomInput from '../../navigation/CustomInput';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {stackParam} from '../../navigation/MainStack';
import {storeData} from '../../utils/LocalStorage';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: () => void;
  onPress: (item: any) => void;
}
type singUpnavigationType = NativeStackNavigationProp<stackParam, 'SignIn'>;
const SignUp: React.FC<Props> = () => {
  const [email, setEmail] = useState<string | null>('');
  const [password, setPassword] = useState<string | null>('');
  const [name, setName] = useState<string>('');
  const Navigation = useNavigation();

  const _handleSignUp = () => {
    if (email === '' || password === '' || name === '') {
      Alert.alert('please fill field');
    } else {
      let user = 'password';
      'name', 'email';

      storeData('user_data', JSON.stringify(user));
      Navigation.navigate('SignIn');
      console.log('user', user);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>SIGN-UP</Text>
        <CustomInput
          placeholder={'Please Enter Your Name'}
          title={'NAME'}
          onChangeText={text => setName(text)}
        />
        <CustomInput
          placeholder={'Please Enter Your Email-Id'}
          title={'EMAIL-ID'}
          onChangeText={text => setEmail(text)}
        />
        <CustomInput
          placeholder={'Please Enter Your Password'}
          title={'CREATE-PASSWORD'}
          onChangeText={text => setPassword(text)}
        />
        <CustomInput
          placeholder={'Please Canfirm Password'}
          title={'CONFIRM-PASSWORD'}
        />
        <CustomButton
          title="SIGN-UP"
          buttonStyle={styles.button}
          onPress={() => _handleSignUp()}
        />
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
    backgroundColor: '#357840',
  },
});
export default SignUp;
