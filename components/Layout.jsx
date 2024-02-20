import {
  DrawerLayoutAndroid,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Calculator, ContactUs } from "../components";
import { useContext } from "react";
import { MyContext } from "../StateContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const Layout = () => {
  const { drawer, theme, toggleTheme } = useContext(MyContext);

  const navigationView = () => (
    <View
      style={
        theme === "light"
          ? styles.navigationContainer
          : styles.navigationContainerDark
      }
    >
      <View style={styles.top}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="album"
            size={40}
            color={theme === "light" ? "black" : "white"}
            onPress={() => drawer.current.openDrawer()}
          />
          <Text
            style={theme === "light" ? styles.logoText : styles.logoTextDark}
          >
            Neo Mobile
          </Text>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Home")}
          >
            <MaterialCommunityIcons
              name="home"
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
            <Text style={theme === "light" ? styles.a : styles.aDark}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Calculator")}
          >
            <MaterialCommunityIcons
              name="calculator"
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
            <Text style={theme === "light" ? styles.a : styles.aDark}>
              Calculator
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Contact Us")}
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={25}
              color={theme === "light" ? "black" : "white"}
            />
            <Text style={theme === "light" ? styles.a : styles.aDark}>
              Contact Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottom}>
        <View style={styles.account}>
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
            color={theme === "light" ? "black" : "white"}
            onPress={() => drawer.current.openDrawer()}
          />
          <View
            style={
              theme === "light" ? styles.accountText : styles.accountTextDark
            }
          >
            <Text
              style={
                theme === "light"
                  ? styles.accountNames
                  : styles.accountNamesDark
              }
            >
              John Doe
            </Text>
            <Text
              style={
                theme === "light" ? styles.accountRole : styles.accountRoleDark
              }
            >
              Manager
            </Text>
          </View>
        </View>
        <MaterialCommunityIcons
          name="brightness-4"
          size={30}
          color={theme === "light" ? "black" : "white"}
          onPress={() => toggleTheme()}
        />
      </View>
    </View>
  );

  const getHeaderOptions = () => ({
    headerLeft: () => (
      <View style={{ marginLeft: 20 }}>
        <MaterialCommunityIcons
          name="menu"
          size={24}
          color="black"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    ),
  });

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={navigationView}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={() => getHeaderOptions()}
          />
          <Stack.Screen
            name="Calculator"
            component={Calculator}
            options={() => getHeaderOptions()}
          />
          <Stack.Screen
            name="Contact Us"
            component={ContactUs}
            options={() => getHeaderOptions()}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  containerDark: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "black",
    color: "white",
  },
  navigationContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ecf0f1",
    justifyContent: "space-between",
  },
  navigationContainerDark: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
    justifyContent: "space-between",
  },
  top: {},
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  logoText: {
    fontSize: 26,
    fontWeight: "bold",
  },
  logoTextDark: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },

  menu: {
    paddingVertical: 30,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  li: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#f5f5f5",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  a: {
    color: "darkblue",
  },
  aDark: { color: "white" },
  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  account: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  accountText: {
    display: "flex",
    flexDirection: "column",
  },
  accountNames: {
    fontSize: 17,
    fontWeight: "600",
  },
  accountTextDark: {
    display: "flex",
    flexDirection: "column",
    color: "white",
  },
  accountNamesDark: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
  },
  accountRoleDark: { color: "white" },
});

export default Layout;
