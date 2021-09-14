import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberType = () => {
  return (
    <View style={styles.Container}>
      <Image
        source={require('../../assets/images/UberX.jpeg')}
        style={styles.Image}
      />
      <View style={styles.MiddleContainer}>
        <View style={styles.Vertical}>
          <Text style={styles.Name}>UberX</Text>
          <Text style={styles.People}>
            <Ionicons name="person" size={15} /> 3
          </Text>
        </View>
        <Text style={styles.Time}>12:05 dropoff</Text>
      </View>
      <View style={styles.LastContainer}>
        <Text style={styles.Price}>$25.99</Text>
        <Text style={styles.Cutoff}>$29.50</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    // backgroundColor: '#ddd',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Image: {
    width: 90,
    height: 70,
    resizeMode: 'contain',
  },
  MiddleContainer: {
    flex: 1,
    paddingLeft: 15,
  },
  Vertical: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Name: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingRight: 10,
  },
  People: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  LastContainer: {
    paddingRight: 5,
  },
  Time: {
    fontSize: 16,
    color: '#777',
  },
  Price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  Cutoff: {
    textDecorationLine: 'line-through',
    fontSize: 15,
    textAlign: 'right',
  },
});

export default UberType;
