import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { Axios } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchParkings } from "../../store/parkings/slice";

const ParkingListScreen = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.parkings);
  console.log(data);
  useEffect(() => {
    dispatch(fetchParkings());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.records}
        keyExtractor={(item) => item.recordid}
        renderItem={({ item }) => (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text>{item.fields.name}</Text>
            <Text>
              {item.fields.availablecapacity} / {item.fields.totalcapacity}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ParkingListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
});
