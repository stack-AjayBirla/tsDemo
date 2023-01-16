/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {GOOGLE_MAP_KEY} from '../constant/googleMapKey';
import {tabParam} from '../navigation/BottomTabNavigatore';
import {stackParam} from '../navigation/MainStack';

interface Props {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
  mapRef: React.MutableRefObject<undefined>;
}
type ProfileScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<tabParam, 'Profile'>,
  StackNavigationProp<stackParam, 'ChooseLocation'>
>;
const MapScreen: React.FC<Props> = () => {
  const Navigation = useNavigation<ProfileScreenNavigationProp>();
  const [state, setState] = useState({
    pickupCords: {
      latitude: 22.7196,
      longitude: 75.8577,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    droplocationCords: {
      latitude: 22.9676,
      longitude: 76.0534,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });
  const mapRef = useRef();
  const {pickupCords, droplocationCords} = state;
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={StyleSheet.absoluteFill}
          initialRegion={pickupCords}>
          <Marker
            coordinate={pickupCords}
            image={require('../assets/images/icCurLoc.png')}
          />
          <Marker
            coordinate={droplocationCords}
            image={require('../assets/images/loction.png')}
          />
          <MapViewDirections
            origin={pickupCords}
            destination={droplocationCords}
            apikey={GOOGLE_MAP_KEY}
            strokeWidth={4}
            strokeColor="hotpink"
            optimizeWaypoints={true}
            onReady={result => {
              mapRef.current.fitToCoardinates(result.coordinates, {
                edgePadding: {
                  right: 30,
                  bottom: 300,
                  left: 30,
                  top: 100,
                },
              });
            }}
          />
        </MapView>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          width: '100%',
          padding: 30,
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
        }}>
        <Text>here your are</Text>
        <TouchableOpacity
          style={styles.inputContainer}
          onPress={() => Navigation.navigate('ChooseLoction')}>
          <Text>choose loction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'center',
    marginTop: 10,
  },
});
export default MapScreen;
