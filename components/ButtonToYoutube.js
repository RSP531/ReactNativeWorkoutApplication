import React, { useCallback } from "react";
import {
  Text,
  View,
  Alert,
  Linking,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const ButtonToYoutube = ({ url, children }) => {
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
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow"
  },
  text: {
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 5,
    color: "#8860D0"
  },
  button: {
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "#5AB9EA",
    borderWidth: 1,
    borderColor: "#8860D0"
  }
});
export default ButtonToYoutube;
