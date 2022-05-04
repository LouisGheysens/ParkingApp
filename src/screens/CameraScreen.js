import { Button, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef, useState } from "react";

import { Camera } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

const CameraScreen = () => {
  const [hasPermissions, setHasPermissions] = useState(false);
  const [image, setImage] = useState(null);
  const cameraRef = useRef(null);

  const isFocus = useIsFocused();

  const getCameraPermissions = async () => {
    console.log("test permissions");
    const response = await Camera.requestCameraPermissionsAsync();
    console.log(response);
    setHasPermissions(response.status === "granted");
  };

  useEffect(() => {
    getCameraPermissions();
  }, []);

  return (
    <View style={styles.container}>
      {hasPermissions && image === null ? (
        <View style={styles.camera}>
          {isFocus ? (
            <>
              <Camera ref={cameraRef} type="back" style={styles.camera} />
              <Button
                title="Neem foto"
                onPress={() =>
                  cameraRef?.current
                    ?.takePictureAsync()
                    .then((photo) => setImage(photo.uri))
                }
              />
            </>
          ) : null}
        </View>
      ) : (
        <View>
          <Text>U hebt geen permissies</Text>
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 300, height: 200 }}
            />
          )}
        </View>
      )}
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
});
