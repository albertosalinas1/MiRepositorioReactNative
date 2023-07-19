import Resact, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Texto = (props) => {
  const [texto, setTexto] = useState("Valor inicial del State");

  const actualizaTexto = () => {
    setTexto("Cambio de State");
  };
  return (
    <Text style={{ fontSize: 48 }} onPress={actualizaTexto}>
      {texto}
    </Text>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <Texto />

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
