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
import TabBarIcon from "../components/TabBarIcon";

import { ScrollView } from "react-native-gesture-handler";

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
        <View style={styles.dropdownGroup}>
          <Text style={styles.notes}>Weight:</Text>
          <TextInput style={styles.textInput}></TextInput>
          <Text style={styles.notes}>Notes:</Text>
          <TextInput style={styles.textInput}></TextInput>
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
    margin: 5,
    flexDirection: "row",
    shadowColor: "pink"
    // borderWidth: 1,
    // shadowOffset: { height: 1, width: 1 },
    // shadowOpacity: 0.75,
    // shadowRadius: 5,
    // elevation: 5,
  },
  buttonLift: {
    flex: 1,
    fontSize: 30,
    // backgroundColor: "turquoise",
    justifyContent: "center"
  },
  buttonLiftSM: {
    flex: 1,
    fontSize: 20,
    // backgroundColor: "turquoise",
    justifyContent: "center"
  },
  buttonSetsReps: {
    flex: 1,
    fontSize: 20,
    // backgroundColor: "grey",
    alignSelf: "center",
    textAlign: "right"
  },
  dropdownGroup: {
    backgroundColor: "red"
  },
  notes: {
    backgroundColor: "turquoise",
    paddingLeft: 10
  },
  textInput: {
    backgroundColor: "blue",
    alignSelf: "flex-end",
    width: 250
  }
});
