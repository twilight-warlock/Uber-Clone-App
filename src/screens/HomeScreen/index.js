/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import CovidMessage from '../../components/Covid Message';
import HomeSearchComponent from '../../components/HomeSeachComponent';
import HomePageMap from '../../components/HomePageMap';

const index = () => {
  return (
    <View>
      <View style={{height: Dimensions.get('window').height - 400}}>
        <HomePageMap />
      </View>
      <CovidMessage />
      <HomeSearchComponent />
    </View>
  );
};

export default index;
