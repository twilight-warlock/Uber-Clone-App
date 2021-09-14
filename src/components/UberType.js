import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UberType = ({
  data: {id, type, imgAdd, people, duration, price, cutoff},
}) => {
  const currentDate = new Date();
  const dropoffTime = new Date(currentDate.getTime() + duration * 60000)
    .toTimeString()
    .split(' ')[0]
    .slice(0, 5);

  return (
    <View style={styles.Container} key={id}>
      <Image source={imgAdd} style={styles.Image} />
      <View style={styles.MiddleContainer}>
        <View style={styles.Vertical}>
          <Text style={styles.Name}>{type}</Text>
          <Text style={styles.People}>
            <Ionicons name="person" size={15} /> {people}
          </Text>
        </View>
        <Text style={styles.Time}>{dropoffTime} dropoff</Text>
      </View>
      <View style={styles.LastContainer}>
        <Text style={styles.Price}>${price.toFixed(2)}</Text>
        {cutoff ? (
          <Text style={styles.Cutoff}>${cutoff.toFixed(2)}</Text>
        ) : (
          <></>
        )}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
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
    fontSize: 23,
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
