import Resact from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
    <ImageBackground 
      style={styles.photo}
      source={{uri:'https://placekitten.com/200/300'}}>
      <Text >Hola Kitty</Text>
      </ImageBackground>
    </View>
  );
  }

const styles = StyleSheet.create({
 
  photo:{
    alignItems:'center',
    // justifyContent: 'center',

    height:300,
    width:200,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
//    justifyContent: 'flex-start',
//    flexDirection:'column'
    paddingTop:22,

  }, 
});

