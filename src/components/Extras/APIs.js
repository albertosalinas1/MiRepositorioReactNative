import Resact, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json)
    .then(data=>{
      setUsers(data)
      setLoading(false)
    })           
  }, [])
  if(loading){
    <View style={styles.center}><Text>Cargando...</Text></View>
  }
  return (
    <View style={styles.container}>
     <FlatList
      data={users}
      renderItem={({item}) => <Text>{item.name}</Text> }
      keyExtractor={item => String(item.id)}     
     ></FlatList>
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
  center: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  }
});

