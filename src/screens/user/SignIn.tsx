/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CustomButton from '../../component/customButton';
import CustomTextButton from '../../component/customTextButton';
import CustomInput from '../../navigation/CustomInput';
import {storeData} from '../../utils/LocalStorage';

interface Props {
  title: string;
  placeholder: string;
  onChangeText: () => void;
  onPress: (item: any) => void;
  navigation: Navigation;
}
export type Navigation = {
  navigate: (scene: string) => void;
};

const SignIn: React.FC<Props> = ({navigation}: Props) => {
  const Navigation = useNavigation();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const _handleSigIn = () => {
    if (userId === '' || password === '') {
      Alert.alert('please fill field');
    } else {
      let user = userId;

      storeData('user_data', JSON.stringify(user));
      Navigation.navigate('BottomTabNavigatore');
      console.log('user', user);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.headerText}>LOGIN</Text>
        <CustomInput
          placeholder={'Please Enter Your Userid'}
          title={'USER-ID'}
          onChangeText={text => setUserId(text)}
        />
        <CustomInput
          placeholder={'Please Enter Your Password'}
          title={'PASSWORD'}
          onChangeText={text => setPassword(text)}
        />
        <CustomButton
          title="LOGIN"
          buttonStyle={styles.button}
          onPress={() => _handleSigIn()}
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
    backgroundColor: '#357840',
  },
});
export default SignIn;
