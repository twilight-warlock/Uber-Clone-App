/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import CovidMessage from '../../components/CovidMessage';
import HomePageMap from '../../components/HomePageMap';

const index = () => {
  return (
    <View>
      <Text>Yo</Text>
      <HomePageMap />
      <CovidMessage />
    </View>
  );
};

export default index;
