import Resact, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Dimensions } from 'react-native';

const width=Dimensions.get('window').width;
//const {width, height}=Dimensions.get('window');
export default function App() {
  const [text, setText]= useState('');

  return (
    <View style={styles.container}>
      <Text>Texto: {text}</Text> 
      <TextInput 
        style={styles.input} placeholder='Escriba aqui'
        onChangeText={txt => setText(txt)}
        defaultValue={text}
      />
 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input:{
    height:40,
    // backgroundColor:'#eee',
    borderBottomColor:'#ccc',
    borderBottomWidth:1,
    width: width,//'100%',//100
    textAlign:'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
});

