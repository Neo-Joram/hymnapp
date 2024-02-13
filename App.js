import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import Layout from "./components/Layout";
import { MyProvider } from "./StateContext";

export default function App() {
  return (
    <MyProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#f5f5f5"
          barStyle={"default"}
          showHideTransition={"fade"}
        />
        <Layout />
      </SafeAreaView>
    </MyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 50 : 0,
  },
  contents: {},
});
