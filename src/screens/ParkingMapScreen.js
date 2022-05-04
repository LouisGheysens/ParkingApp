import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MapView, { Marker } from 'react-native-maps'
import { useSelector } from 'react-redux';

const ParkingMapScreen = () => {

  const { data } = useSelector((state) => state.parkings);


  return (
    <View style={styles.container}>
    <MapView style={styles.mapView} provider="google" showsUserLocation initialRegion={{
      latitude: 51.0439865,
      longitude: 3.7139551,
      latitudeDelta: 0,
      longitudeDelta: 0.05,
    }}>
    {data.records.map((p) => (
      <Marker key={p.recordId} coordinate={{
        latitude: p.fields.location[0],
        longitude: p.fields.location[1],
      }}
      title={p.fields.name}
      description={p.fields.availablecapacity.toString()}
      />
    ))}
    </MapView>
    </View>
  );
};

export default ParkingMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapView: {
    flex: 1
  }
});
