import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import CustomButton from '../component/customButton';

import {getData} from '../utils/LocalStorage';

interface Response {
  name: string;
  email: string;
  password: string;
}

const ProfileScreen: React.FC<Response> = () => {
  const Navigation = useNavigation();
  const [userData, setUserData] = useState<string[]>();
  const [userName, setUserName] = useState<string[]>();
  useEffect(() => {
    getData('user_data').then(response => {
      let myData: any = String(response);
      console.log('data', myData);
      setUserData(myData);
      console.log('user-data ', userData);
    });
  }, [userData]);
  useEffect(() => {
    getData('user_Name').then(response => {
      let myUser: any = String(response);
      console.log('data', myUser);
      setUserName(myUser);
      console.log('user-name ', userName);
    });
  }, [userName]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/user.png')}
          style={styles.image}
        />
        <Text style={styles.title}> User :- {userData} </Text>
        <Text style={styles.title}> User Name :- {userName} </Text>
      </View>
      <CustomButton
        title="Logout"
        buttonStyle={styles.button}
        buttonText={styles.buttonTitle}
        onPress={() => Navigation.navigate('SignIn')}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  profileContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    margin: 5,
  },
  image: {
    tintColor: 'white',
    height: 80,
    width: 80,
  },
  button: {
    backgroundColor: 'green',
    marginHorizontal: '25%',
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'white',
    top: 300,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    margin: 10,
  },
});
export default ProfileScreen;
