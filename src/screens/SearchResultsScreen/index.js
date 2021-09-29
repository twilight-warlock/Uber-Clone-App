import React from 'react';
import {Text, View} from 'react-native';
import RoutePageMap from '../../components/RoutePageMap';
import UberTypes from '../../components/UberTypes';

const index = () => {
  return (
    <View>
      <View style={{height: 450}}>
        <RoutePageMap />
      </View>
      <UberTypes />
    </View>
  );
};

export default index;
