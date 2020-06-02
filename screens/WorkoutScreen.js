import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button
} from "react-native";
import TabBarIcon from "../components/TabBarIcon";

import { ScrollView } from "react-native-gesture-handler";

const WorkoutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TabBarIcon name="md-flame" size={50} focused="true" />
      </View>
      <View style={styles.title}>
        <Text style={styles.titleText}>Day 1 </Text>
        <Text style={styles.subtitleText}>Back & Rear Deltoids </Text>
      </View>
      <View style={styles.body}>
        <CustomButton
          exercise={"Deadlift"}
          setsReps={"4 SETS X 10,8,6,4"}
        ></CustomButton>
        <CustomButton
          exercise={"Pull Ups"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"Single Arm Dumbbell Row"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"T-Bar Row"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"Barbell Face Pulls"}
          setsReps={"4 SETS X 12 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"Bent Over Lateral Raises"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"Bent Over Lateral Raises"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
        <CustomButton
          exercise={"Bent Over Lateral Raises"}
          setsReps={"4 SETS X 10 REPS"}
        ></CustomButton>
      </View>
    </ScrollView>
  );
};

export default WorkoutScreen;

const CustomButton = props => {
  return (
    <TouchableOpacity onPress={() => console.log("button pressed")}>
      <View style={styles.button}>
        {props.exercise.length > 9 ? (
          <Text style={styles.buttonLiftSM}>{props.exercise}</Text>
        ) : (
          <Text style={styles.buttonLift}>{props.exercise}</Text>
        )}
        <Text style={styles.buttonSetsReps}>{props.setsReps}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "turquoise",
    width: 100,
    alignSelf: "center",
    borderRadius: 10
  },
  title: {
    backgroundColor: "darkorchid",
    alignItems: "center"
  },
  titleText: {
    fontSize: 35,
    color: "white"
  },
  subtitleText: {
    fontSize: 20,
    color: "white"
  },
  body: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "blue"
  },
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
  }
});
