import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  TextInput
} from "react-native";

const ExerciseButton = props => {
  const [visible, toggle] = useState(false);

  const showDetails = () => {
    toggle(() => !visible);
  };
  return (
    <View>
      <TouchableOpacity onPress={() => showDetails()}>
        <View style={styles.button}>
          {props.exercise.length > 9 ? (
            <Text style={styles.buttonLiftSM}>{props.exercise}</Text>
          ) : (
            <Text style={styles.buttonLift}>{props.exercise}</Text>
          )}
          <Text style={styles.buttonSetsReps}>{props.setsReps}</Text>
        </View>
      </TouchableOpacity>
      {visible ? (
        <View style={styles.details}>
          <View style={styles.group}>
            <Text style={styles.text}>Weight:</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
          <View style={styles.group}>
            <Text style={styles.text}>Notes:</Text>
            <TextInput style={styles.input}></TextInput>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ExerciseButton;

const styles = StyleSheet.create({
  button: {
    width: 320,
    backgroundColor: "darkorange",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: "row",
    shadowColor: "pink"
  },
  buttonLift: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center"
  },
  buttonLiftSM: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center"
  },
  buttonSetsReps: {
    flex: 1,
    fontSize: 20,
    alignSelf: "center",
    textAlign: "right"
  },
  details: {
    flexDirection: "column",
    borderWidth: 1,
    borderRadius: 10
  },
  group: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    backgroundColor: "cyan",
    fontSize: 20,
    borderRadius: 10
  },
  input: {
    backgroundColor: "darkorchid",
    width: 225,
    fontSize: 20,
    height: 60,
    borderWidth: 1,
    borderRadius: 10
  }
});
