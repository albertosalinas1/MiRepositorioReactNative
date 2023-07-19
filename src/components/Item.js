import React from "react";
import { StyleSheet, Text } from "react-native";

function Item({ name }) {
  const itemStyles = StyleSheet.create({
    fontSize: 18,
    marginVertical: 4,
  });
  return <Text style={itemStyles}>{name}</Text>;
}
export default Item;
