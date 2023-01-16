/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '../constant/googleMapKey';

const ChooseLocation = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search loction"
      onPress={(data, details = null) => {
        const fetchDetails = true;
        console.log(data, details);
      }}
      query={{
        key: GOOGLE_MAP_KEY,
        language: 'en',
      }}
    />
  );
};
export default ChooseLocation;
