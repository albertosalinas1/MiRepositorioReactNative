import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
function App() {
 return (
 <SafeAreaView>
 <Text style={styles.title}>Lista de súper</Text>
 <ScrollView style={styles.itemsContainer}>
 <Text style={styles.item}>Tomate</Text>
 <Text style={styles.item}>Cebolla</Text>
 <Text style={styles.item}>Pollo</Text>
 <Text style={styles.item}>Café</Text>
 </ScrollView>
 </SafeAreaView>
 )
}
const styles = StyleSheet.create({
 title: {
 marginTop: 20,
 textAlign: 'center',
 fontSize: 24,
 fontWeight: '600',
 },
 itemsContainer: {
 marginTop: 10,
 paddingHorizontal: 24,
 },
 item: {
 fontSize: 18,
 marginVertical: 4
 },
});
export default App;
