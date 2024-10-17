import { View, Text,StyleSheet, TextInput,Button } from 'react-native'
import React from 'react'


const App = () => {
  return (
    <View style={styles.container}>
      
      <Text>username</Text>
      <TextInput>username</TextInput>
      <Text>passwords</Text>
      <TextInput textContentType='password'>password</TextInput>
      {/* <Button>"login"</Button> */}

    </View>
  )
}
const styles = StyleSheet.create({
  container:{
  flex:-1,
  backgroundColor:'dodgerblue',
alignItems:"center",
justifyContent:"center"}
})

export default App