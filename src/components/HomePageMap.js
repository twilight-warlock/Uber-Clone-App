import React from 'react';
import {Image, Text, View} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from "../../assets/data/cars.js"

const HomePageMap = () => {
  const getImage = (type)=>{
    if(type=="Comfort")
      return require('../../assets/images/top-Comfort.png')
    if(type=="UberXL")
      return require('../../assets/images/top-UberXL.png')
    return require('../../assets/images/top-UberX.png')
    
  }
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
        {cars.map((car,index)=>{
          return (
            <Marker coordinate={{latitude: car.latitude, longitude: car.longitude}} key={index}>
          <Image
            source={getImage(car.type)}
            style={{width: 50, height: 50, resizeMode: 'contain',transform:[{
              rotate:`${car.heading}deg`
            }]}}
          />
        </Marker>
          )
        })}
      </MapView>
    </>
  );
};

export default HomePageMap;
