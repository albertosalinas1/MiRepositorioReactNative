import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet, Text } from "react-native";
import Item from "./src/components/Item";

const shoppingItems = [
  "Tomate",
  "Cebolla",
  "Pollo",
  "Café",
  "Galletas",
  "Pan",
  "Refresco",
];

function App() {
  return (
    <View>
      <Text style={styles.title}>Lista de súper</Text>
      <ScrollView style={styles.itemsContainer}>
        {shoppingItems.map((item, key) => (
          <Item key={key} name={item} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
  },
  itemsContainer: {
    marginTop: 10,
    paddingHorizontal: 24,
  },
  item: {
    fontSize: 18,
    marginVertical: 4,
  },
});
export default App;
