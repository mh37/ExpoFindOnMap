import * as React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
        initialRegion={{latitude: 60.200692,longitude: 24.934302,latitudeDelta: 0.0322,longitudeDelta: 0.0221,  }}
      >
        <Marker coordinate={{latitude:60.201373, longitude:24.934041}}title='Haaga-Helia' />
      </MapView>
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
