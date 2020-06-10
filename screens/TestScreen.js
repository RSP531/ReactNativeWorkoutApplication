import React, { useCallback } from "react";
import {
  Text,
  View,
  Alert,
  Linking,
  StyleSheet,
  Animated,
  Button,
  TouchableOpacity
} from "react-native";

const supportedURL = "https://www.youtube.com/watch?v=_ZeUlqJwNmw";

const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <TouchableOpacity
      title={children}
      onPress={handlePress}
      style={styles.button}
    >
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

const TestScreen = () => {
  return (
    <View style={styles.container}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
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
    margin: 5,
    backgroundColor: "red"
  }
});

export default TestScreen;
