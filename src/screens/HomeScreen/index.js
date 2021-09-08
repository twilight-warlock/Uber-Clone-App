/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/Covid Message';
import HomeSearchComponent from '../../components/HomeSeachComponent';
import HomePageMap from '../../components/HomePageMap';

const index = () => {
  return (
    <View>
      <Text>Yo</Text>
      <HomePageMap />
      <CovidMessage />
      <HomeSearchComponent />
    </View>
  );
};

export default index;
