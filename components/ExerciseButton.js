import React, { useState, useRef } from "react";
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
import ExerciseDetails from "./ExerciseDetails";

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
      {visible ? <ExerciseDetails /> : null}
    </View>
  );
};

export default ExerciseButton;

const styles = StyleSheet.create({
  button: {
    elevation: 10,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: 320,
    backgroundColor: "#5680E9",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: "row"
  },
  buttonLift: {
    flex: 1,
    fontSize: 30,
    justifyContent: "center",
    color: "white"
  },
  buttonLiftSM: {
    flex: 1,
    fontSize: 20,
    justifyContent: "center",
    color: "white"
  },
  buttonSetsReps: {
    flex: 1,
    fontSize: 20,
    alignSelf: "center",
    textAlign: "right",
    color: "white"
  }
});
