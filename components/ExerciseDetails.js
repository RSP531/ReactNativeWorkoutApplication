import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput,
  Animated,
  Easing
} from "react-native";

const FadeInView = props => {
  const [isEditing, setIsEditing] = useState(false);
  const opacity = useRef(new Animated.Value(0)).current;

  const saveButtonOpacity = opacity.interpolate({
    inputRange: [0, 0.8, 1],
    outputRange: [0, 0, 1]
  });

  const saveButtonTranslationX = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0]
  });

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isEditing ? 1 : 0,
      duration: 400,
      useNativeDriver: true
    }).start();
  }, [isEditing]);

  return (
    <Animated.View
      style={{
        opacity: saveButtonOpacity,
        transform: [{ translateX: saveButtonTranslationX }]
      }}
    >
      <TouchableOpacity onPress={() => setIsEditing(false)}>
        <Text>Save</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const ExerciseDetails = () => {
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
      <TouchableOpacity style={styles.exampleButton}>
        <Text>Example Video of Lift</Text>
      </TouchableOpacity>
    </FadeInView>
  );
};

export default ExerciseDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    borderWidth: 1
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: 20,
    borderRadius: 10
  },
  input: {
    backgroundColor: "gainsboro",
    width: 225,
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    paddingLeft: 10
  },
  exampleButton: {
    alignSelf: "center",
    backgroundColor: "darkorange",
    paddingVertical: 10,
    paddingHorizontal: 10,
    margin: 5,
    borderRadius: 5
  }
});
