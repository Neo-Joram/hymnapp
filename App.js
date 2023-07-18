import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [counter, setCounter] = useState(0);
  const incrementor = useCallback(() => {
    setCounter(counter + 1);
  }, [setCounter, counter]);
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput
        placeholder="Welcome"
        style={{
          border: "1px solid black",
          paddingHorizontal: "10px",
          paddingVertical: "5px",
          borderRadius: "12px",
        }}
      />
      <select>
        <option>One option</option>
      </select>
      <h3>Heading three</h3>
      <span>This is span</span>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>Table head</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table data</td>
          </tr>
        </tbody>
      </table>
      <h2>Counter {counter}</h2>
      <button onClick={() => incrementor()}>AddCounter</button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
