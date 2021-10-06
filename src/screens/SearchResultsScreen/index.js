import React from 'react';
import {Text, View,ScrollView, Dimensions} from 'react-native';
import RoutePageMap from '../../components/RoutePageMap';
import UberTypes from '../../components/UberTypes';

const index = () => {
  return (
    <ScrollView>
      <View style={{height: Dimensions.get("window").height * 0.52}}>
        <RoutePageMap />
      </View>
      <UberTypes />
    </ScrollView>
  );
};

export default index;
