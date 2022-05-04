import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParkingListScreen from "../screens/ParkingListScreen";
import ParkingMapScreen from "../screens/ParkingMapScreen";
import { Feather } from "@expo/vector-icons";
import NativeDrawerNavigator from "./NativeDrawerNavigator";

const Tab = createBottomTabNavigator();

const ParkingTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          title: "Lijst",
          tabBarIcon: ({ size, color }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
        name="Lijst"
        component={ParkingListScreen}
      />
      <Tab.Screen
        options={{
          title: "Kaart",
          tabBarIcon: ({ size, color }) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
        name="Kaart"
        component={ParkingMapScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          title: "Nativefeatures",
          tabBarIcon: ({ size, color }) => (
            <Feather name="camera" size={size} color={color} />
          ),
        }}
        name="NativeFeatures"
        component={NativeDrawerNavigator}
      />
    </Tab.Navigator>
  );
};

export default ParkingTabNavigator;
