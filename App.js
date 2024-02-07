import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [display, setDisplay] = useState("");
  const [operator, setOperator] = useState("");

  const handleNumberPress = (number) => {
    if (display === "") {
      setDisplay(number);
    } else {
      setDisplay((prevDisplay) => {
        const lastChar = prevDisplay.length > 0 ? prevDisplay.slice(-1) : "";

        if (/\+|\-|\*|\//.test(lastChar)) {
          return prevDisplay + ` ${number}`;
        } else {
          return prevDisplay + "" + number;
        }
      });
    }
  };

  const handleOperatorPress = (op) => {
    if (operator === "") {
      setOperator(op);
      setDisplay((prevDisplay) => prevDisplay + ` ${op} `);
    } else {
      const result = calculateResult();
      setDisplay(`${result} ${op} `);
      setOperator(op);
    }
  };

  const calculateResult = () => {
    return eval(display);
  };

  const handleClearPress = () => {
    setDisplay("");
    setOperator("");
  };

  const handleEqualPress = () => {
    const result = calculateResult();
    setDisplay(`${result}`);
    setOperator("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </View>

      <View style={styles.calcNbrs}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(7)}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(8)}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(9)}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(4)}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(5)}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(6)}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(1)}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(2)}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(3)}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(0)}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleNumberPress(".")}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleEqualPress("=")}
        >
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.operators}>
        <TouchableOpacity style={styles.operator} onPress={handleClearPress}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => handleOperatorPress("/")}
        >
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => handleOperatorPress("*")}
        >
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => handleOperatorPress("-")}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operator}
          onPress={() => handleOperatorPress("+")}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  displayContainer: {
    width: "100%",
    height: "20%",
    backgroundColor: "#ddd",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: "2rem",
  },
  displayText: {
    fontSize: 36,
    fontWeight: "bold",
  },
  calcNbrs: {
    flex: 3,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  button: {
    width: "30%",
    height: "20%",
    backgroundColor: "#fff",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  operators: {
    width: "100%",
    height: "50%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  operator: {
    width: "18%",
    height: "20%",
    backgroundColor: "#fff",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
  },
});
