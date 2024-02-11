import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Navbar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Calculator")}
      >
        <Text style={styles.link}>Calculator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <Text style={styles.link}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 64,
    backgroundColor: "#f5f5f5",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  linkDiv: {
    width: "33.3%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    fontSize: 18,
    color: "#007AFF",
  },
});

export default Navbar;
