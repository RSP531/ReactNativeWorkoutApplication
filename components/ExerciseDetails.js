import React, { useState, useRef, useCallback } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Animated
} from "react-native";
import { Linking } from "expo";

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideUp = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(slideUp, {
      toValue: 1,
      duration: 250
      // useNativeDriver: true
    }).start();
    // Animated.parallel([
    //   Animated.timing(fadeAnim, {
    //     toValue: 1,
    //     duration: 250,
    //     useNativeDriver: true
    //   }),
    //   Animated.timing(slideUp, {
    //     toValue: 1,
    //     duration: 250,
    //     useNativeDriver: true
    //   })
    // ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
        transform: [
          {
            translateY: slideUp.interpolate({
              inputRange: [0, 1],
              outputRange: [-10, 0]
            })
          }
        ]
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const ExerciseDetails = () => {
  const myUrl = "https://www.youtube.com/watch?v=_ZeUlqJwNmw";

  const linkYoutube = useCallback(async () => {
    const supported = await Linking.canOpenURL(myUrl);
    // if (supported) {
    await Linking.open(myUrl);
    // }
  });
  return (
    <FadeInView style={styles.details}>
      <View style={styles.group}>
        <Text style={styles.text}>Weight:</Text>
        <TextInput style={styles.input} multiline={true}></TextInput>
      </View>
      <View style={styles.group}>
        <Text style={styles.text}>Notes:</Text>
        <TextInput style={styles.input} multiline={true}></TextInput>
      </View>
      <TouchableOpacity
        style={styles.exampleButton}
        onPress={() => linkYoutube}
      >
        <Text style={styles.text}>Example Video of Lift ></Text>
      </TouchableOpacity>
    </FadeInView>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    borderWidth: 1,
    borderColor: "#8860D0",
    marginTop: 5
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    borderRadius: 10,
    marginLeft: 5,
    color: "#8860D0"
  },
  input: {
    backgroundColor: "white",
    width: 225,
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: "#8860D0"
  },
  exampleButton: {
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
