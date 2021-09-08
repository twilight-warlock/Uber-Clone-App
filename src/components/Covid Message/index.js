import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import styles from './styles';

const CovidMessage = () => {
  return (
    <View style={styles.Container}>
      <Text style={styles.Title}>Travel only if necessary</Text>
      <Text style={styles.Text}>
        Help flatten the curve, Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti dolor, id nesciunt quae rerum mollitia
        molestiae? Minima doloremque consectetur nemo aliquam quidem porro
        cupiditate sit?
      </Text>
      <Text style={styles.LearnMore}>
        Learn more <Icon name="arrowright" size={18} color="#bed9ff" />
      </Text>
    </View>
  );
};

export default CovidMessage;
