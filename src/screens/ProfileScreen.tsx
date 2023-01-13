/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';

import {getData} from '../utils/LocalStorage';

interface Response {
  name: string;
  email: string;
  password: string;
}

const ProfileScreen: React.FC<Response> = () => {
  const [userData, setUserData] = useState<string[]>();
  useEffect(() => {
    getData('user_data').then(response => {
      let myData: any = String(response);
      console.log('data', myData);
      setUserData(myData);
    });
  }, []);
  return (
    <SafeAreaView style={{backgroundColor: 'white', flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image source={require('../../assets/images/user.png')} />
        <Text>User Name </Text>
      </View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text>USER DETAIL</Text>
        <Text>{userData}</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProfileScreen;
