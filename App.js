import Ract from "react";
import { Text, View } from "react-native";
import Greeting from "./src/components/Greetings";

const LotsOfGreetings = () => {
  return (
    <View>
      <Greeting name="Rosa" />
      <Greeting name="Jaime" />
      <Greeting name="Valeria" />
      <Greeting name="Alberto" apellido="Salinas" />
    </View>
  );
};

export default LotsOfGreetings;
