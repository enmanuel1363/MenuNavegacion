import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}> 
      <Text style={styles.texto}>Home</Text>
      <Button title='Ir a Detalle' onPress={() => navigation.navigate('DetailHome')}/>
     
    </View>
  )
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'brown',
},
texto: {
  fontSize: 30,
  fontWeight: 'bold',
},
})