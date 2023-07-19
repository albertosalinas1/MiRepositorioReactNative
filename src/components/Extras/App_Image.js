import Resact from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
    <Image 
      style={styles.photo}
      // source={require('./assets/favicon.png')}
      source={{uri:'https://placekitten.com/200/300'}}

    />
    </View>
  );
  }

const styles = StyleSheet.create({
  photo:{
    height:300,
    width:200,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
//    justifyContent: 'flex-start',
//    flexDirection:'column'
    paddingTop:22,

  }, 
});

