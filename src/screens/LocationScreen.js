import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";

const LocationScreen = () => {
  const [status, requestPermission] = Location.useBackgroundPermissions();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    requestPermission();
  }, []);

  //   useEffect(async () => {
  //     try {
  //       const result = await Location.getCurrentPositionAsync();
  //       setLocation(result);
  //     } catch {}
  //   }, []);

  useEffect(async () => {

    try{
      const positionSubscription = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      }, (location) => setLocation(location)
      );
    }catch(error){
      console.log('Fouthandeling: ', error);
    }
    return () => positionSubscription.remove();
  }, []);

  if (status?.status !== "granted") {
    return <Text>No permission</Text>;
  }

  return (
    <View>
      <Text>LocationScreen</Text>
      <Text>Latitude: {location?.coords?.latitude}</Text>
      <Text>Longitude: {location?.coords?.longitude}</Text>
    </View>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({});
