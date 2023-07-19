import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import Saludos from "./src/components/LotsOfGreetings";
import LotsOfGreetings from './src/components/LotsOfGreetings';
// import Greeting from "./src/components/Greetings";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <LotsOfGreetings />
      {/* <Greeting name='Rexxar' /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});

