/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, Text} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
      <Text>What up?</Text>
    </>
  );
};

export default App;
