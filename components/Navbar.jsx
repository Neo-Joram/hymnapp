import React from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Navbar = () => {
  const navigation = useNavigation();

  const getCurrentSection = () => {
    const currentState = navigation.getState();
    const currentSection =
      currentState.routes[currentState.routes.length - 1].name;
    return currentSection;
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Home")}
      >
        <MaterialCommunityIcons
          name="home"
          size={25}
          color="black"
          style={getCurrentSection() === "Home" && styles.link}
        />
        <Text style={getCurrentSection() === "Home" && styles.link}>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Calculator")}
      >
        <MaterialCommunityIcons
          name="calculator"
          size={25}
          color="black"
          style={getCurrentSection() === "Calculator" && styles.link}
        />
        <Text style={getCurrentSection() === "Calculator" && styles.link}>
          Calculator
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.linkDiv}
        onPress={() => navigation.navigate("Contact Us")}
      >
        <MaterialCommunityIcons
          name="account-circle"
          size={25}
          color="black"
          style={getCurrentSection() === "Contact Us" && styles.link}
        />
        <Text style={getCurrentSection() === "Contact Us" && styles.link}>
          Contact Us
        </Text>
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
    color: "cornflowerblue",
  },
});

export default Navbar;
