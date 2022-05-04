import { Button, StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";

import * as ImagePicker from "expo-image-picker";

const ImagesScreen = () => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [img, setImg] = useState(null);

  const getImagePermissions = async () => {
    const response = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setHasPermissions(response.status === "granted");
  };

  useEffect(() => {
    getImagePermissions();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      allowsMultipleSelection: true,
      aspect: [4, 3],
    });
    setImg(result.uri);
  };

  if (!hasPermissions) {
    return <Text>Geen permissies</Text>;
  }

  return (
    <View>
      <Text>ImagesScreen</Text>

      {img && (
        <Image
          source={{ uri: img }}
          style={{ width: 300, height: 200 }}
          resizeMode="contain"
        />
      )}
      <Button title="Kies foto" onPress={pickImage} />
    </View>
  );
};

export default ImagesScreen;

const styles = StyleSheet.create({});
