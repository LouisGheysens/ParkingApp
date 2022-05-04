import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CameraScreen from "../screens/CameraScreen";
import ContactScreen from "../screens/ContactScreen";
import ImagesScreen from "../screens/ImagesScreen";
import LocationScreen from "../screens/LocationScreen";

const Drawer = createDrawerNavigator();

const NativeDrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Camera" component={CameraScreen} />
      <Drawer.Screen name="Contacten" component={ContactScreen} />
      <Drawer.Screen name="Images" component={ImagesScreen} />
      <Drawer.Screen name="Locatie" component={LocationScreen} />
    </Drawer.Navigator>
  );
};

export default NativeDrawerNavigator;

const styles = StyleSheet.create({});
