import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const themes = {
  number: "rgba(33,56,64,1)",
  operator: "rgba(255,149,0,1)",
  action: "rgba(255,1,87,1)",
};

export default function Button({ onPress, title, theme }) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    button: {
      backgroundColor: themes[theme],
      padding: 10,
      width: 90,
      height: 90,
      margin: 3,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
    },
    buttonText: {
      color: "#fff",
      fontSize: 40,
      fontFamily: "Helvetica",
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
