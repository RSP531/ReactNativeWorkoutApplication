import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default class TestScreen2 extends Component {
  state = {
    ready: false,
    SlideInLeft: new Animated.Value(0)
  };

  start = () => {
    return Animated.parallel([
      Animated.timing(this.state.SlideInLeft, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start();
  };

  render() {
    let { SlideInLeft } = this.state;
    return (
      <LinearGradient
        colors={[
          "rgb(215, 221, 20)",
          "#b40adf",
          "rgb(34, 67, 214)",
          "rgb(159, 53, 190)"
        ]}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.btn} onPress={() => this.start()}>
            <Text style={styles.textBtn}>Start</Text>
          </TouchableOpacity>
          <Animated.View
            style={{
              transform: [
                {
                  translateY: SlideInLeft.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, 100]
                  })
                }
              ],
              height: 100,
              width: 100,
              borderRadius: 12,
              backgroundColor: "#347a2a",
              justifyContent: "center"
            }}
          >
            <Text style={styles.text}>SlideDown </Text>
          </Animated.View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center"
  },
  btn: {
    backgroundColor: "#480032",
    width: 100,
    height: 40,
    padding: 3,
    justifyContent: "center",
    borderRadius: 6,
    marginTop: 29
  },
  textBtn: {
    color: "#f4f4f4",
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
});
