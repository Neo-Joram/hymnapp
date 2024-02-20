import { StatusBar } from "expo-status-bar";
import {
  NativeEventEmitter,
  NativeModules,
  Platform,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Layout from "./components/Layout";
import { MyProvider } from "./StateContext";
import { useEffect } from "react";

const BatteryModule = NativeModules.BatteryModule;
const batteryEmitter = new NativeEventEmitter(BatteryModule);

export default function App() {
  useEffect(() => {
    const subscription = batteryEmitter.addListener(
      "BatteryLevel",
      (batteryLevel) => {
        console.log("Battery Level:", batteryLevel);
      }
    );

    return () => {
      subscription.remove();
    };
  }, []);

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
