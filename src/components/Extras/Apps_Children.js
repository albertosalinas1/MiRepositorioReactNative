import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Texto = (props) => {
  const {children}=props;
  return (
    <Text>{children}</Text>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Texto> Hola Mundo Children
              <Texto> Desde React Native </Texto>
      </Texto>
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

