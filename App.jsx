import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import Demo from './components/demo'


const App = () => {
  return (
    <View style={styles.main}>
      <Demo/>
    </View>
  )
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    alignItems:'center',
    backgroundColor: '#fff',}})

export default App