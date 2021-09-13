import React, {useState} from 'react';
import {View, Text, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

const index = () => {
  const [fromText, setfromText] = useState('');
  const [destnText, setdestnText] = useState('');

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <TextInput
          style={styles.Input}
          placeholder="From ?"
          value={fromText}
          onChangeText={setfromText}
        />
        <TextInput
          style={styles.Input}
          placeholder="Where To?"
          value={destnText}
          onChangeText={setdestnText}
        />
        <GooglePlacesAutocomplete
          placeholder="Search here"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          onFail={error => console.error(error)}
          requestUrl={{
            url: 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api',
            useOnPlatform: 'web',
          }}
          query={{
            key: '',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    padding: 10,
    backgroundColor: '#ddd',
    height: '100%',
  },
  Input: {
    padding: 10,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
});

export default index;
