import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunity from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const HomeSearch = () => {
  return (
    <View>
      <View style={styles.InputBox}>
        <Text style={styles.Text}>Enter pickup point</Text>
        <View style={styles.TypeBox}>
          <AntDesign name="clockcircle" size={24} color={'#000'} />
          <Text style={{fontSize: 17}}>Now</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color={'#000'} />
        </View>
      </View>
      <View style={styles.RowConatiner}>
        <View style={styles.CoverElement}>
          <MaterialCommunity name="map-marker" size={20} color={'#000'} />
        </View>
        <Text style={styles.RecentText}>Night Club</Text>
      </View>
      <View style={styles.RowConatiner}>
        <View style={styles.CoverElement2}>
          <MaterialIcons name="home" size={20} color={'#fff'} />
        </View>
        <Text style={styles.RecentText}>Home</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  InputBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#dfdfdf',
    margin: 10,
  },
  Text: {
    padding: 10,
    fontSize: 24,
    borderRightColor: '#ccc',
    borderRightWidth: 0.5,
    paddingRight: 45,
  },
  TypeBox: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 8,
    margin: 10,
    borderRadius: 20,
    width: 120,
  },
  RowConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fefefe',
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomColor: '#dfdfdf',
    borderBottomWidth: 1,
  },
  CoverElement: {
    backgroundColor: '#dfdfdf',
    borderRadius: 25,
    padding: 8,
  },
  CoverElement2: {
    backgroundColor: '#4778ff',
    borderRadius: 25,
    padding: 8,
  },
  RecentText: {
    fontSize: 17,
    marginLeft: 15,
  },
});

export default HomeSearch;
