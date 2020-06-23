import React, { useCallback } from "react";
import {
  Text,
  View,
  Alert,
  Linking,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const supportedURL = "https://www.youtube.com/watch?v=_ZeUlqJwNmw";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  // Use Callback is memoized to prevent unnecessary re-renders if url changes
  const buttonClick = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity onPress={buttonClick} style={styles.button}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>OPEN Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>OPEN Unsupported URL</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  button: {
    color: "red",
    borderWidth: 1,
    padding: 10,
    margin: 5
  }
});

export default TestScreen;
