import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import Button from "./components/Button";
import Row from "./components/Row";

export default function App() {
  const [number, setNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [lastResult, setLastResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const handleNewNumber = (newNumber) => {
    if (number === 0) {
      setNumber(newNumber);
    } else {
      setNumber(parseFloat("" + number + newNumber));
    }
  };

  const handleResult = () => {
    setLastResult(number);

    if (operation === "+") {
      setNumber(previousNumber + number);
    } else if (operation === "-") {
      setNumber(previousNumber - number);
    } else if (operation === "*") {
      setNumber(previousNumber * number);
    } else if (operation === "/") {
      setNumber(previousNumber / number);
    }
  };

  const handleAction = (action) => {
    if (action === "backspace") {
      if(number.toString().length > 1){
        setNumber(parseFloat(number.toString().slice(0, -1)));
      }
    } else if (action === "AC") {
      setPreviousNumber(0);
      setNumber(0);
    } else if (action === "+/-") {
      setNumber(number * -1);
    } else if (action === "%") {
      setNumber(number / 100);
    }
  };

  const handleOperation = (operation) => {
    if (operation === ",") {
      setNumber(parseFloat("" + number + "."));
      return;
    }
    if (previousNumber !== 0) {
      handleResult();
    }

    setPreviousNumber(number);
    setNumber(0);
    setOperation(operation);
  };

  const getVisibleNumber = () => {
    let visibleNumber = number;

    if (number == 0 && previousNumber !== 0) {
      visibleNumber = previousNumber;
    }

    if (number == NaN) {
      visibleNumber = "Error";
    }

    if (number == Math.PI) {
      visibleNumber = "π";
    }

    return visibleNumber;
  };
  return (
    <SafeAreaView style={styles.backgorund}>
      <View style={styles.result}>
        <Row>
          <Text style={styles.resultText}>{getVisibleNumber()}</Text>
          <TouchableOpacity onPress={() => handleAction("backspace")} style={{marginLeft: 10, marginRight: 0}}>
            <Ionicons name="backspace-outline" size={48} color="white"  style={{marginLeft: 10, marginRight: 0}} />
          </TouchableOpacity>
        </Row>
      </View>
      <View style={styles.container}>
        <Row>
          <Button
            onPress={() => handleAction("AC")}
            title="AC"
            theme="action"
          />
          <Button
            onPress={() => handleAction("+/-")}
            title="+/-"
            theme="action"
          />
          <Button onPress={() => handleAction("%")} title="%" theme="action" />

          <Button
            onPress={() => handleOperation("/")}
            title="/"
            theme="operator"
          />
        </Row>
        <Row>
          <Button onPress={() => handleNewNumber(1)} title="1" theme="number" />
          <Button onPress={() => handleNewNumber(2)} title="2" theme="number" />
          <Button onPress={() => handleNewNumber(3)} title="3" theme="number" />

          <Button
            onPress={() => handleOperation("+")}
            title="+"
            theme="operator"
          />
        </Row>

        <Row>
          <Button onPress={() => handleNewNumber(4)} title="4" theme="number" />
          <Button onPress={() => handleNewNumber(5)} title="5" theme="number" />
          <Button onPress={() => handleNewNumber(6)} title="6" theme="number" />

          <Button
            onPress={() => handleOperation("-")}
            title="-"
            theme="operator"
          />
        </Row>

        <Row>
          <Button onPress={() => handleNewNumber(7)} title="7" theme="number" />
          <Button onPress={() => handleNewNumber(8)} title="8" theme="number" />
          <Button onPress={() => handleNewNumber(9)} title="9" theme="number" />

          <Button
            onPress={() => handleOperation("*")}
            title="*"
            theme="operator"
          />
        </Row>

        <Row>
          <Button
            onPress={() => handleNewNumber(Math.PI)}
            title="π"
            theme="number"
          />
          <Button onPress={() => handleNewNumber(0)} title="0" theme="number" />

          <Button
            onPress={() => handleOperation(",")}
            title=","
            theme="number"
          />

          <Button onPress={() => handleResult()} title="=" theme="operator" />
        </Row>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  result: {
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
    paddingBottom: 0,
    marginBottom: 0,
    flex: 1,
  },
  resultText: {
    color: "#fff",
    fontSize: 60,
    marginBottom: 0,
  },
  container: {
    padding: 0,
    margin: 0,
    flex: 2,
    marginBottom: 10,
    justifyContent: "flex-end",
  },
  backgorund: {
    backgroundColor: "#000",
    flex: 1,
    flexDirection: "column",
  },
});
