import Ract from "react";
import { StyleSheet, Text, View } from "react-native";

const Greeting = (props) => {
  return (
    <View>
      <Text>
        Hello {props.name} {props.apellido}!
      </Text>
    </View>
  );
};

export default Greeting;
