import React from 'react';
import {Text, View} from 'react-native';
import HomePageMap from '../../components/HomePageMap';
import UberTypes from '../../components/UberTypes';

const index = () => {
  return (
    <View>
      <View style={{height: 450}}>
        <HomePageMap />
      </View>
      <UberTypes />
    </View>
  );
};

export default index;
