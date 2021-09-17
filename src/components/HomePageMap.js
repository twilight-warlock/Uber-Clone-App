import React from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const HomePageMap = () => {
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
        <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}>
          <Image
            source={require('../../assets/images/top-UberX.png')}
            style={{width: 80, height: 80, resizeMode: 'contain'}}
          />
        </Marker>
        <Marker coordinate={{latitude: 37.78828, longitude: -122.4385}}>
          <Image
            source={require('../../assets/images/top-UberXL.png')}
            style={{width: 80, height: 80, resizeMode: 'contain'}}
          />
        </Marker>
        <Marker coordinate={{latitude: 37.78878, longitude: -122.4425}}>
          <Image
            source={require('../../assets/images/top-Comfort.png')}
            style={{width: 80, height: 80, resizeMode: 'contain'}}
          />
        </Marker>
      </MapView>
    </>
  );
};

export default HomePageMap;
