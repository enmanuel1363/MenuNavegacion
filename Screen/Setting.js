import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Setting() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Setting</Text>
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
texto: {
  fontSize: 30,
  fontWeight: 'bold',
},
})