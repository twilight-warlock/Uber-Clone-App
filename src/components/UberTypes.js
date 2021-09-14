import React from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import UberType from './UberType';
import data from '../../assets/data/types';
import MaterialCom from 'react-native-vector-icons/MaterialCommunityIcons';

const UberTypes = () => {
  const confirm = () => console.log('Pressed');
  const later = () => console.log('Schedule for later pressed');
  return (
    <View>
      <FlatList data={data} renderItem={({item}) => <UberType data={item} />} />
      <View style={styles.Arrange}>
        <Pressable onPress={confirm} style={styles.Button}>
          <Text style={styles.Text}>Confirm UberX</Text>
        </Pressable>
        <Pressable onPress={later} style={styles.Button2}>
          <MaterialCom name="map-clock-outline" size={30} style={styles.Icon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Arrange: {
    flexDirection: 'row',
  },
  Button: {
    backgroundColor: 'black',
    height: 50,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%',
  },
  Button2: {
    backgroundColor: '#eee',
    height: 50,
    margin: 10,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
  },
  Text: {
    color: 'white',
    fontSize: 18,
  },
  Icon: {
    padding: 5,
  },
});

export default UberTypes;
