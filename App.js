import React, { useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, TextInput, Alert, StatusBar, Button } from 'react-native';

export default function App() {

  const [address, setAddress] = useState('');

  const getLocation = () => {
    fetch(`example.com/find?i=${keyword}`)
    .then(response => response.json())
    .then(responseJson => setLocation(responseJson))
    .catch(error => { 
        Alert.alert('Error', error); 
    });    
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{latitude: 60.200692,longitude: 24.934302,latitudeDelta: 0.0322,longitudeDelta: 0.0221,  }}
      >
        <Marker coordinate={{latitude:60.201373, longitude:24.934041}}title='Haaga-Helia' />
      </MapView>

      <TextInput style={styles.textInput} placeholder='address' 
        onChangeText={text => setAddress(text)} />
      <Button title="Find" onPress={getLocation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
