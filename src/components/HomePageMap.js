import React from 'react';
import {Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const HomePageMap = () => {
  return (
    <MapView
      provider={PROVIDER_GOOGLE}
      style={{height: '100%', width: '100%'}}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default HomePageMap;
