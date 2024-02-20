import React, { useContext } from "react";
import {
  Button,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "./Navbar";
import { MyContext } from "../StateContext";

const Home = () => {
  const { theme } = useContext(MyContext);

  return (
    <View style={theme === "light" ? styles.home : styles.homeDark}>
      <Text style={theme === "light" ? "" : { color: "white" }}>
        Welcome home
      </Text>
      <TouchableOpacity
        onPress={() => {
          // NativeModules.RNHello.findEvents((res) => {
          //   alert(res);
          // });
          NativeModules.ToastExample.show(
            "Hello form frontend",
            (err) => {
              alert(err);
            },
            (message) => {
              alert(message);
            }
          );
        }}
      >
        <Text style={theme === "light" ? "" : { color: "white" }}>
          Press me
        </Text>
      </TouchableOpacity>
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  homeDark: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    backgroundColor: "black",
  },
});

export default Home;
