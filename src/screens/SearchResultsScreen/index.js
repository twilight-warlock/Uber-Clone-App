import React from 'react';
import {Text, View} from 'react-native';
import HomePageMap from '../../components/HomePageMap';
import UberTypes from '../../components/UberTypes';

const index = () => {
  return (
    <View>
      <HomePageMap />
      <UberTypes />
      <Text>Yo bro who got you smiling like that?</Text>
    </View>
  );
};

export default index;
