import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'

import { useNavigation } from '@react-navigation/native';
export default function DetailHome() {
  const Navigation = useNavigation();
  return (
    <View style={styles.container} > 
      <Text style={styles.containerTexto}>DetailHome</Text>
      <Button title='Mas de talles' onPress={() => Navigation.navigate('AnotherDatailsHome')}/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'skyblue',
    },
    containerTexto: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  })