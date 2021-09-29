import React from 'react';
import {Image, Text, View} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const RoutePageMap = () => {
  const origin = {
    latitude: 37.78825,
    longitude: -122.4324,
  };

  const destination = {
    latitude: 37.78825,
    longitude: -122.4524,
  };
  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{height: '100%', width: '100%'}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={'AIzaSyAhCLK_AJU4KFVR64vBDCMxf_0j5FgBR5I9'}
          strokeWidth={4}
          strokeColor="black"
        />
        <Marker coordinate={origin} title={'Origin'} />
        <Marker coordinate={destination} title={'Destination'} />
      </MapView>
    </>
  );
};

export default RoutePageMap;
