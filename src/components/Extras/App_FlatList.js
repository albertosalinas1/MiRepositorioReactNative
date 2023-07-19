import Resact, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <FlatList 
      data={[
        {key:'1', name: 'Alberto'},
        {key:'2', name: 'Sara'},
        {key:'3', name: 'Silvia'},
        {key:'4', name: 'Patricia'},
        {key:'5', name: 'Luis'},
        {key:'6', name: 'Jose'},
        {key:'7', name: 'Marcos'},
        {key:'8', name: 'Julio'},
        {key:'9', name: 'Leticia'},
        {key:'10', name: 'Mayela'},
        {key:'11', name: 'Laura'},
        {key:'12', name: 'Pedro'},
        {key:'13', name: 'Juan'},
        {key:'14', name: 'Mario'},
        {key:'15', name: 'Miguel'},


      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
    />
    </View>
  );
  }

const styles = StyleSheet.create({
  item:{
    padding:10,
    fontSize:22,
    height:50,
    borderBottomColor: '#ccc',
    borderBottomWidth:1,

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

