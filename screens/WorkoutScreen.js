import React, { useEffect } from "react";
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
import ExerciseButton from "../components/ExerciseButton";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import axios from "axios";

const exerciseList = [
  {
    exercise: "Deadlift",
    setsReps: "4 SETS X 10,8,6,4",
    youTube: "https://www.youtube.com/watch?v=-4qRntuXBSc&t=13s"
  },
  {
    exercise: "Pull Ups",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=vw5Xmu5CIew"
  },
  {
    exercise: "Single Arm Dumbbell Row",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=CCiXFyJqDCM"
  },
  {
    exercise: "T-Bar Row",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=rvbjGSQ2tVE"
  },
  {
    exercise: "Barbell Face Pulls",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=wqdXBiu6OUU"
  },
  {
    exercise: "Bent Over Lateral Raises",
    setsReps: "4 SETS X 10 REPS",
    youTube: "https://www.youtube.com/watch?v=b_LEX4n9lOs"
  }
];

const WorkoutScreen = () => {
  useEffect(() => {
    //Here you will get the exercises
    getWorkouts();
  });

  const getWorkouts = async () => {
    try {
      const res = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log(res.data);
      console.log("hi");
    } catch (error) {
      console.error("Robs error:", error);
    }
  };
  return (
    <ScrollView>
      <LinearGradient
        colors={["#5680E9", "#84CEEB", "#C1C8E4", "#8860D0"]}
        style={{ flex: 1 }}
        start={{ x: 1, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.header}>
          <TabBarIcon name="md-flame" size={50} />
        </View>
        <View style={styles.title}>
          <Text style={styles.titleText}>Day 1 </Text>
          <Text style={styles.subtitleText}>Back & Rear Deltoids </Text>
        </View>
        <View style={styles.body}>
          {exerciseList.map((exercise, id) => (
            <ExerciseButton
              number={id}
              key={id}
              exercise={exercise.exercise}
              setsReps={exercise.setsReps}
              youTubeLink={exercise.youTube}
            />
          ))}
        </View>
      </LinearGradient>
    </ScrollView>
  );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
  container: {},
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8860D0",
    width: 60,
    padding: 10,
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
    marginTop: 30
  },
  title: {
    alignItems: "center",
    width: 500,
    alignSelf: "center",
    borderRadius: 10
  },
  titleText: {
    fontSize: 35,
    color: "white"
  },
  subtitleText: {
    fontSize: 20,
    color: "white",
    marginBottom: 10
  },
  body: {
    flex: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50
  }
});
