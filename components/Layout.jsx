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
  const { drawer } = useContext(MyContext);

  const navigationView = () => (
    <View style={styles.navigationContainer}>
      <View style={styles.top}>
        <View style={styles.logo}>
          <MaterialCommunityIcons
            name="album"
            size={40}
            color="black"
            onPress={() => drawer.current.openDrawer()}
          />
          <Text style={styles.logoText}>Neo Mobile</Text>
        </View>

        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Home")}
          >
            <MaterialCommunityIcons name="home" size={25} color="black" />
            <Text style={styles.a}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Calculator")}
          >
            <MaterialCommunityIcons name="calculator" size={25} color="black" />
            <Text style={styles.a}>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.li}
            // onPress={() => navigation.navigate("Contact Us")}
          >
            <MaterialCommunityIcons
              name="account-circle"
              size={25}
              color="black"
            />
            <Text style={styles.a}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.account}>
        <MaterialCommunityIcons
          name="account-circle"
          size={50}
          color="black"
          onPress={() => drawer.current.openDrawer()}
        />
        <View style={styles.accountText}>
          <Text style={styles.accountNames}>John Doe</Text>
          <Text style={styles.accountRole}>Manager</Text>
        </View>
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
  navigationContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: "#ecf0f1",
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
});

export default Layout;
