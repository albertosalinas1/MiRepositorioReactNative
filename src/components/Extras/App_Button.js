import Resact, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Dimensions, Button } from 'react-native';

const width=Dimensions.get('window').width;
//const {width, height}=Dimensions.get('window');
export default function App() {
  const [text, setText]= useState('');
  const [submit, setSubmit]= useState('');

  return (
    <View style={styles.container}>
      <Text>Texto: {submit}</Text> 
      <TextInput 
        style={styles.input} placeholder='Escriba aqui'
        onChangeText={txt => setText(txt)}
        defaultValue={text}
      />
 
      <StatusBar style="auto" />
    <Button onPress={()=>{
      setSubmit(text);
      alert("Texto enviado con exito");
    }} title ="Aceptar"/>
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

