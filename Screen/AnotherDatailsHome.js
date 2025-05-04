import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function AnotherDatailsHome() {
  return (
    <View style={style.container}> 
      <Text style={style.containerTexto}>Fin de los detalles</Text>
    </View>
  )
}
const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'pink',
    },
    containerTexto: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  })


