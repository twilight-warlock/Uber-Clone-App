import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import UberType from './UberType';
import data from '../../assets/data/types';

const UberTypes = () => {
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => <UberType data={item} />} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default UberTypes;
