import React, { useContext } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import Navbar from "./Navbar";
import { MyContext } from "../StateContext";

const Home = () => {
  const { drawer } = useContext(MyContext);

  return (
    <View style={styles.home}>
      <Text>Welcome home</Text>
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
});

export default Home;
