/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {useNavigation} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';

const MapScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.MainContainer}>
      <TouchableOpacity style={{position: 'absolute'}}>
        <Image
          source={require('../assets/images/ic_back.png')}
          style={{tintColor: 'black', position: 'absolute'}}
        />
        <Text>adsadssdfdfgfghgjhg</Text>
      </TouchableOpacity>
      <MapView
        style={styles.mapStyle}
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 22.755412611388646,
          longitude: 75.87733787139537,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          coordinate={{
            latitude: 22.755412611388646,
            longitude: 75.87733787139537,
          }}
          title={'MURLIWALA'}
          description={'Murliwala sweets&namkeen'}
        />
        <Marker
          coordinate={{
            latitude: 22.758726977774362,
            longitude: 75.87405484745582,
          }}
          title={'R1-SOLO'}
          description={'R1 solo restaurants'}
        />
        <Marker
          coordinate={{
            latitude: 22.745319919254612,
            longitude: 75.89543745692147,
          }}
          title={'THE REGIMENT'}
          description={'THE Regiment restaurants and cafe '}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  searchBox: {
    position: 'absolute',
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    elevation: 10,
  },
});
export default MapScreen;
